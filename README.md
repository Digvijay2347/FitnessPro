# FitnessPro

A modern and user-friendly fitness application designed to help users achieve their health and fitness goals. This app leverages APIs and AI to provide customized fitness plans, a chatbot for guidance, and integration with fitness tracking tools.

## Features

- **Personalized Fitness Plans**: Generate fitness plans tailored to user inputs like age, weight, height, and fitness goals.
- **AI-Powered Chatbot**: Get guidance and answers to your fitness-related queries using AI.
- **Fitness APIs**: Integration with multiple APIs for exercises, diet recommendations, and health tracking.
- **Frontend**: Responsive and interactive design built using modern web technologies.
- **Backend**: Node.js server for handling requests and managing data.
- **Secure Environment**: Sensitive data like API keys and configurations are secured using `.env` files.

## Project Structure
```bash
fitness/
├── backend/           # Core backend logic
├── chatbot-api/       # Chatbot API integration
├── fitness-api/       # Fitness-related API integration
├── node_modules/      # Node.js dependencies
├── public/           # Publicly accessible assets
├── server/           # Server-side code
├── src/              # Frontend application code
├── .gitignore        # List of files ignored by Git
├── index.html        # Main HTML file
├── package.json      # Node.js dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js    # Vite configuration for bundling
```

### Workout Management
- Create custom workout plans tailored to your goals
- Access a library of 500+ exercises with detailed instructions
- Track sets, reps, and weights for each exercise
- View exercise demonstrations through HD videos
- Generate AI-powered workout recommendations

### Progress Tracking
- Monitor your progress with detailed analytics
- Track body measurements and weight
- View progress photos
- Generate progress reports and insights
- Set and track fitness goals


## Installation

```bash
# Clone the repository
git clone https://github.com/Digvijay2347/FitnessPro.git

# Navigate to project directory
cd fitnesspro

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Tech Stack

- Frontend: React.js with TypeScript
- Backend: Node.js with Express
- Database: PostgreSQL
- Authentication: JWT
- State Management: Redux
- UI Framework: Material-UI
- Testing: Jest and React Testing Library
- CI/CD: GitHub Actions


## Environment Variables

Create a `.env` file in the 
```bash
├── chatbot-api/
├── fitness-api/
```
directory and add the following variables:

```
API_KEY=Your_api_key
```

## Acknowledgments

- Exercise database provided by [ExerciseDB](https://exercisedb.com)
- Nutrition data from [NutritionAPI](https://nutritionapi.com)
- Icons by [Material Icons](https://material.io/icons)

## Screenshots
![Collage](https://i.postimg.cc/ZqjP6bkH/Untitled-design.png)
![Dashboard](https://i.postimg.cc/dVVVLwBw/Screenshot-2025-01-11-003741.png)

![Fitness Planner](https://i.postimg.cc/N0vCdfzw/Screenshot-2025-01-11-005030.png)
![Progress Tracking](https://i.postimg.cc/vHjN6v7T/Screenshot-2025-01-11-005336.png)

## Roadmap

- Mobile app development (Q2 2025)
- AI-powered personal trainer
- Virtual workout classes
- Nutrition meal planning automation

- ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

- Documentation: [https://docs.fitnesspro.com](https://docs.fitnesspro.com)
- Email: digvijay12347@gmail.com
