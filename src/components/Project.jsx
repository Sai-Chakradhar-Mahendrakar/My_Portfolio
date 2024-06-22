import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Enterprise eLearning Platform",
    tech: "MERN Stack Full Stack Web Development",
    description: "Developed a scalable eLearning platform utilizing MongoDB, ExpressJS, ReactJS, and NodeJS. Implemented user roles for Teachers and Administrators, ensuring efficient management and access control. Executed comprehensive software development life cycle practices, including diagramming and rigorous testing.",
    github: "https://github.com/Sai-Chakradhar-Mahendrakar/Elearning-Platform-Using-MERN"
  },
  {
    title: "Digital Watermarking System",
    tech: "Java",
    description: "Created a robust Digital Watermarking System using Java, integrating AWT and Swing for an intuitive GUI experience. Implemented multi-threading for efficient processing, coupled with advanced image handling techniques for seamless watermark embedding. This innovation led to a 30% reduction in data piracy instances.",
    github: "https://github.com/Sai-Chakradhar-Mahendrakar/Digital-Image-Watermarking"
  },
  {
    title: "Typing Speed Test",
    tech: "Python",
    description: "Developed a dynamic Typing Speed Test app with Python and Tkinter, resulting in a 50% increase in user retention. Implemented time-based speed and accuracy assessments, showcasing mastery of Python modules and GUI development.",
    github: "https://github.com/Sai-Chakradhar-Mahendrakar/Typing-Speed-Test"
  },
  {
    title: "Virtual Memory Manager",
    tech: "Operating System (C)",
    description: "Designed and implemented a Virtual Memory Manager, demonstrating mastery in translating logical addresses to physical addresses. This project showcased a deep understanding of virtual memory management in operating systems.",
    github: ""
  },
  {
    title: "Alpha-Beta Pruning",
    tech: "Artificial Intelligence",
    description: "Applied Alpha-Beta Pruning to enhance search efficiency in an Artificial Intelligence project focused on the TicTac-Toe game. Developed tailored optimization strategies, showcasing adept problem-solving skills in AI algorithm implementation.",
    github: ""
  }
];

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-300 group">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
      <Code className="text-blue-600" size={28} />
    </div>
    <p className="text-md font-medium text-red-600 mb-4">{project.tech}</p>
    <p className="text-gray-600 text-base mb-6 leading-relaxed">{project.description}</p>
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-base rounded-md hover:bg-blue-700 transition-colors duration-200 group"
    >
      <ExternalLink size={20} className="mr-2" />
      View on GitHub
      <ArrowUpRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
    </a>
  </div>
);

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextProject, 5000);  // Auto-scroll every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
          Projects
        </h2>
        <div className="relative">
          <ProjectCard project={projects[currentIndex]} />
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 bg-white rounded-full p-3 shadow-md hover:bg-blue-100 transition-colors duration-200"
            aria-label="Previous project"
          >
            <ChevronLeft className="text-blue-600" size={28} />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 bg-white rounded-full p-3 shadow-md hover:bg-blue-100 transition-colors duration-200"
            aria-label="Next project"
          >
            <ChevronRight className="text-blue-600" size={28} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-2 focus:outline-none ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}