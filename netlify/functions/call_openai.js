console.log('OPENAI')

const axios = require('axios');

const openaiApiKey = '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';

exports.handler = async function (event, context) {
  console.log("OPENAI")
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { prompt } = JSON.parse(event.body);

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt,
        max_tokens: 200,
        n: 1,
        stop: null,
        temperature: 0.5,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('Error calling OpenAI API:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error calling OpenAI API' }),
    };
  }
};
