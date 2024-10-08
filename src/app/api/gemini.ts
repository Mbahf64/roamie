// import { NextApiRequest, NextApiResponse } from 'next';
// import OpenAI from 'openai';

// // Initialize OpenAI with API key from environment variables
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY || '', // Make sure the API key exists
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     res.setHeader('Allow', ['POST']);
//     return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//   }

//   try {
//     const { prompt } = req.body;

//     // Validate the input
//     if (!prompt || typeof prompt !== 'string') {
//       return res.status(400).json({ error: 'A valid prompt is required' });
//     }

//     // Send the request to OpenAI API
//     const response = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo', // You can change the model if needed
//       messages: [{ role: 'user', content: prompt }],
//     });

//     // Extract the AI's response
//     const botResponse = response.choices[0]?.message?.content || 'No response from AI';

//     return res.status(200).json({ message: botResponse });

//   } catch (error: any) {
//     console.error('Error with OpenAI API:', error.response?.data || error.message);
//     return res.status(500).json({
//       error: 'Failed to fetch response from OpenAI API',
//       details: error.message,
//     });
//   }
// }





// Import necessary modules
import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Load your API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { prompt } = req.body;

    // Validate the prompt
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'A valid prompt is required' });
    }

    // Fetch the model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Send the request to the Google Generative AI (Gemini) API
    const response = await model.generateContent(prompt);

    // Extract the AI's response
    const botResponse = response.response?.text || 'No response from AI';

    return res.status(200).json({ message: botResponse });
  } catch (error: any) {
    console.error('Error with Gemini API:', error.response?.data || error.message);
    return res.status(500).json({
      error: 'Failed to fetch response from Gemini API',
      details: error.message,
    });
  }
}
