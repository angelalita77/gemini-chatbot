import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv'; 

dotenv.config();
const geminiApiKey = process.env.VITE_Gemini_API_Key;


const genAI = new GoogleGenerativeAI(geminiApiKey);



// const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     response_mime_type: 'application/json'
// };

// const model = genAI.getGenerativeModel({
//     model: 'gemini-1/5-flash',
//     generationConfig
// });
