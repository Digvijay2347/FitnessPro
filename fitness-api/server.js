const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


const genAI = new GoogleGenerativeAI(process.env.API_KEY);


const cleanOutput = (data) => {
  return data.replace(/\*/g, '').trim();
};


app.post('/api/generate-plan', async (req, res) => {
  const { age, weight, height, goals } = req.body;

  const outputTemplate = '{\
    "Exercise": {\
      "data": "{exercise_plan}"\
    },\
    "Diet Plan": {\
      "data": "{diet_plan}"\
    },\
    "Recommendations": {\
      "data": "{recommendations}"\
    }\
  }';

  const prompt = `Generate a comprehensive fitness plan for a ${age}-year-old weighing ${weight} kg and ${height} cm tall with the goal to ${goals}. Please provide the response strictly in the following JSON format without any markdown or code blocks: ${outputTemplate}.`;

  try {
  
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);

    
    const generatedPlan = result.response.text().replace(/```json\n|\n```/g, ''); 
    
    
    console.log("Generated Plan:", generatedPlan);

    const parsedPlan = JSON.parse(generatedPlan);

    
    if (parsedPlan && parsedPlan.Exercise && parsedPlan.Exercise.data &&
        parsedPlan["Diet Plan"] && parsedPlan["Diet Plan"].data &&
        parsedPlan.Recommendations && parsedPlan.Recommendations.data) {
      
   
      res.json({
        exercise: cleanOutput(parsedPlan.Exercise.data),
        diet: cleanOutput(parsedPlan["Diet Plan"].data),
        recommendations: cleanOutput(parsedPlan.Recommendations.data)
      });
    } else {
      throw new Error('Unexpected response structure');
    }
  } catch (error) {
    console.error("Error Details:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'An error occurred while generating the fitness plan.' });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
