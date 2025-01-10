import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const TeamMember = ({ member, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-[320px] sm:h-[400px] rounded-lg shadow-lg overflow-hidden bg-white"
      animate={{
        scale: isHovered && isActive ? 1.05 : 1,
      }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="object-cover w-full h-full"
      />
      <motion.div
        className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 sm:p-6 text-white"
        initial={false}
        animate={{
          opacity: isHovered || !isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 flex items-center gap-3">
          {member.name}
          <div className="flex gap-2">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 hover:scale-110 transition-transform"
                aria-label={`${member.name}'s LinkedIn`}
              >
                <FaLinkedin size={18} />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-blue-400 hover:scale-110 transition-transform"
                aria-label={`${member.name}'s GitHub`}
              >
                <FaGithub size={18} />
              </a>
            )}
          </div>
        </h2>
        <p className="text-base sm:text-lg mb-1 sm:mb-2">{member.role}</p>
        <p className="text-xs sm:text-sm text-gray-200">{member.expertise}</p>
      </motion.div>
    </motion.div>
  );
};

export default TeamMember;
