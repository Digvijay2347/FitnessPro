const express = require('express');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");
const cors = require('cors');
require('dotenv').config();  // Load environment variables from .env file

// Initialize express app
const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(cors());
app.use(express.json());

// Define the generation configuration and safety settings
const GENERATION_CONFIG = {
    temperature: 0.7,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
};

const SAFETY_SETTINGS = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];

// Access API key and model name from environment variables
const API_KEY = process.env.API_KEY; // Read from .env file
const MODEL_NAME = 'gemini-1.5-pro'; // Replace with your model name

// Function to initialize and run the AI chat
const getAiResponse = async (userMessage) => {
    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });
        
        const chat = model.startChat({
            generationConfig: GENERATION_CONFIG,
            safetySettings: SAFETY_SETTINGS,
            history: [],
        });

        const result = await chat.sendMessage(userMessage);
        
        if (result.error) {
            throw new Error(result.error.message);
        }

        return result.response.text();
    } catch (error) {
        console.error('Error communicating with AI:', error);
        throw error;
    }
};

// Define API endpoint to receive user messages and return AI responses
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const aiResponse = await getAiResponse(message);
        res.json({ response: aiResponse });
    } catch (error) {
        res.status(500).json({ error: 'Error communicating with AI' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
