// pages/api/submitForm.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, companyName, location, designation, employeeBase, resultPoints } = req.body;

        const hubSpotData = {
            fields: [
                { name: 'firstname', value: firstName },
                { name: 'lastname', value: lastName },
                { name: 'email', value: email },
                { name: 'company_name', value: companyName },
                { name: 'location', value: location },
                { name: 'designation', value: designation },
                { name: 'employee_base', value: employeeBase },
                { name: 'result_points', value: resultPoints },
            ],
        };

        const apiKey = 'YOUR_HUBSPOT_API_KEY';  // আপনার HubSpot API Key দিন
        const formGuid = 'd3f17094-fdfe-43c1-a592-cdb7917f87a8';  // আপনার HubSpot ফর্ম GUID
        const portalId = '46867666';  // আপনার HubSpot Portal ID

        try {
            const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    submittedAt: Date.now(),
                    fields: hubSpotData.fields,
                    context: {
                        pageUri: 'https://ergo-global-kik8.vercel.app/test',
                        pageName: 'Ergonomics Risk Assessment Form',
                    },
                }),
            });

            if (response.ok) {
                return res.status(200).json({ success: true });
            } else {
                return res.status(500).json({ message: 'Failed to submit data.' });
            }
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).json({ message: 'An error occurred while submitting the form.' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
