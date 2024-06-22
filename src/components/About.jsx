import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const imageUrls = [
  "src/assets/about/code.jpg",
  "src/assets/about/ai-ml.png", 
  "src/assets/about/datascience.jpg",
  "src/assets/about/dbms.webp",
  "src/assets/about/Mern-Stack.png",
];



export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen py-20">
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="flex flex-wrap justify-around h-full">
          {imageUrls.map((url, index) => (
            <motion.img
              key={index}
              src={url}
              alt={`Tech image ${index + 1}`}
              className="w-1/4 h-1/4 object-cover m-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto p-8 bg-white bg-opacity-90 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mb-6"></div>
          
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">
            I'm Sai Chakradhar Rao Mahendrakar
          </h3>
          
          <TypeAnimation
            sequence={[
              'AIML Engineer', 2000,
              'Full Stack Web Developer', 2000,
              'Software Engineer', 2000,
              'MERN Stack Developer', 2000,
              'Database Engineer', 2000
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="h4"
            className="text-2xl font-medium text-red-500 mb-6"
          />
          
          <motion.p 
            className="text-gray-700 mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            My journey in the tech world began with a fascination for how technology can transform lives. Over the years, I've honed my skills in various programming languages and frameworks, enabling me to build robust and scalable applications.
          </motion.p>
          
          <motion.p 
            className="text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            I'm always eager to learn new technologies and take on challenging projects. When I'm not coding, you can find me exploring new places, reading books, and staying up-to-date with the latest tech trends.
          </motion.p>
          
          <motion.div 
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 shadow-md">
              View My Projects
            </a>
            <a href="#contact" className="bg-white text-blue-500 border border-blue-500 px-6 py-3 rounded-full hover:bg-blue-50 transition duration-300 shadow-md">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}