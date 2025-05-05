import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Check if it's deployment mode
        if (process.env.IS_DEPLOYMENT === 'true') {
            console.log('Skipping HubSpot API call during deployment.');
            return res.status(200).json({ message: 'Deployment mode: HubSpot contact creation skipped.' });
        }

        const { firstName, lastName, email } = req.body;

        const hubSpotData = {
            properties: [
                { property: 'firstname', value: firstName },
                { property: 'lastname', value: lastName },
                { property: 'email', value: email },
            ],
        };

        const accessToken = process.env.HUBSPOT_ACCESS_TOKEN; // Get from environment variable

        if (!accessToken) {
            return res.status(401).json({ message: 'HubSpot Access Token is missing.' });
        }

        try {
            const response = await axios.post(
                `https://api.hubapi.com/crm/v3/objects/contacts`, // Using v3 contacts API
                { properties: hubSpotData.properties }, // v3 uses a different request body structure
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`,
                    },
                }
            );

            if (response.status === 201) { // v3 returns 201 for successful creation
                res.status(200).json({ success: true, data: response.data });
            } else {
                console.error('HubSpot API Error:', response.status, response.data);
                res.status(response.status).json({ message: 'Failed to create contact on HubSpot', error: response.data });
            }
        } catch (error) {
            console.error('Error creating contact:', error.response ? error.response.data : error.message);
            res.status(500).json({
                message: 'An error occurred while creating the contact.',
                error: error.response ? error.response.data : error.message,
            });
        }

    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}