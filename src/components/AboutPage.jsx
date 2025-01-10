import { useState } from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';
import AnimatedBackground from './AnimatedBackground';

const teamMembers = [
  {
    name: 'Digvijay Singh',
    role: 'Software Engineer',
    expertise: 'Strategic Planning, Integration, Full-Stack, API Development',
    image: 'https://i.postimg.cc/SsdzwDQG/dig.jpg',
    linkedin: 'https://www.linkedin.com/in/singh07digvijay/', // Add LinkedIn link
  },
  {
    name: 'Sajal Sahu',
    role: 'Software Developer',
    expertise: 'Software Architecture, Testing, Deployment, Backend Developer',
    image: '/src/assets/rst.jpg',
    linkedin: 'https://www.linkedin.com/in/sajal-sahu-3545a7251/', // Add LinkedIn link
  },
  {
    name: 'Harshit Sahu',
    role: 'ML Engineer',
    expertise: 'UX/UI Design, AI/ML',
    image: '/src/assets/hnny.png',
    github: 'https://github.com/hnny1436', 
  },
];


function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative min-h-screen bg-gray-100 py-1 px-4 sm:px-6 lg:px-8">
      <AnimatedBackground />
      <div className="relative max-w-7xl mx-auto pt-1">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-24">
          About Our Team
        </h1>
        <div className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center">
          <div className="relative w-[240px] sm:w-[300px] h-[320px] sm:h-[400px]">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full"
                initial={false}
                animate={{
                  rotate: (index - activeIndex) * 15,
                  x: (index - activeIndex) * 30,
                  y: Math.abs(index - activeIndex) * 8,
                  zIndex: activeIndex === index ? 3 : 2 - Math.abs(index - activeIndex),
                  scale: index === activeIndex ? 1 : 0.9,
                }}
                transition={{ duration: 0.5 }}
                style={{
                  transformOrigin: 'bottom center',
                  cursor: 'pointer',
                }}
                onClick={() => setActiveIndex(index)}
              >
                <TeamMember member={member} isActive={index === activeIndex} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8 gap-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-colors ${
                activeIndex === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              aria-label={`View team member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
