// pages/api/createContact.js

import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email } = req.body;

        const hubSpotData = {
            properties: [
                { property: 'firstname', value: firstName },
                { property: 'lastname', value: lastName },
                { property: 'email', value: email },
            ],
        };

        const accessToken = 'pat-na2-448f88f8-1420-4e66-aac0-e86802652fe2';
        try {
            const response = await axios.post(
                `https://api.hubapi.com/contacts/v1/contact`,
                hubSpotData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`,  // Use Bearer token for Access Token
                    },
                }
            );

            if (response.status === 200) {
                res.status(200).json({ success: true, data: response.data });
            } else {
                res.status(500).json({ message: 'Failed to create contact' });
            }
        } catch (error) {
            console.error('Error creating contact:', error.response ? error.response.data : error.message);
            res.status(500).json({
                message: 'An error occurred while creating the contact.',
                error: error.response ? error.response.data : error.message, // Log the detailed error message
            });
        }

    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
