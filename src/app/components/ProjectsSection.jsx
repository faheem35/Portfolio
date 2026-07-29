

"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
  id: 1,
  title: "Moonway General Contracting",
  description: `A corporate website developed for a UAE-based construction company. Designed a responsive interface showcasing services, projects, and contact information. Focused on performance, SEO optimization, clean UI/UX, and cross-device compatibility to strengthen the online presence.`,
  image: "/images/projects/0.jpg", 
  tag: ["All", "Web"],
  gitUrl: "https://github.com/faheem35/Moonway", 
  previewUrl: "https://moonwaycontracting.com",
},
  {
    id: 2,
    title: "Fitness World",
    description: `MERN stack fitness app with three dedicated panels for users, trainers, and admins.
Key features include personalized workout plans, live video sessions with trainers, AI chatbot assistance, and
BMI/BMR calculators. Integrated JWT and Google OAuth login, Multer for file uploads, and robust admin controls.`,
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/faheem35/Fitness-World",
    previewUrl: "https://fitness-world-sonn.vercel.app",
  },
  {
  id: 3,
  title: "Casa Find",
  description: `A full-stack real estate platform built using the MERN stack that allows users to browse, search, and list properties with detailed information. Features include user authentication, property management dashboard, image uploads, advanced filtering, and a responsive UI optimized for all devices.`,
  image: "/images/projects/2.jpg",
  tag: ["All", "Web"],
  gitUrl: "https://github.com/faheem35/Casa-Find",
  previewUrl: "https://casa-find.vercel.app",
},

  {
    id: 4,
    title: "ProjectVerse",
    description: `MERN stack project fair platform with secure authentication. Users can showcase, edit, and delete projects through a personalized dashboard, manage profiles, and explore uploaded projects. A responsive design ensures smooth navigation and accessibility across devices and screen sizes.`,
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/faheem35/ProjectVerse-React-Node-Express-MongoDB",
    previewUrl: "https://project-fair-react-node-express-mongo-db-icy9.vercel.app",
  },
 

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-8 lg:py-16 min-h-screen flex flex-col justify-center">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
        My Projects
      </h2>
      <p className="text-center  text-gray-300 text-l leading-relaxed max-w-3xl mx-auto">Here are some of my recent projects that showcase my skills and expertise in building <br /> modern web applications.</p>

      <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-8 rounded-full mb-8 md:mb-12"></div>
      
     <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              
            />
          </motion.li>
        ))}
      </ul>

      {/* <div className="flex justify-center mt-6 md:mt-20 px-4">
        <a
          href="https://github.com/faheem35?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 sm:px-8 md:px-10 rounded-md transition-colors duration-300 text-sm sm:text-base"
        >
          View More on GitHub
        </a>
      </div> */}

      <div className="flex justify-center mt-6 md:mt-20 px-4">
  <a
    href="https://github.com/faheem35?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto text-center bg-black-200 hover:bg-gray-900 border border-gray-400 text-white font-semibold py-3 px-6 sm:px-8 md:px-10 rounded-md transition-colors duration-300 text-sm sm:text-base flex items-center justify-center gap-2"
  >
    <svg 
      className="w-5 h-5" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
    View More on GitHub
  </a>
</div>

    </section>
  );
};

export default ProjectsSection;