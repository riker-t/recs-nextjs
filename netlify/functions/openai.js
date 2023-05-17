// ./netlify/functions/openai.js
const axios = require('axios');

exports.handler = async function (event, context) {
    console.log("OPENAI")
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { text } = JSON.parse(event.body);

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: text,
            max_tokens: 60,
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return { statusCode: 500, body: error.toString() };
    }
};
