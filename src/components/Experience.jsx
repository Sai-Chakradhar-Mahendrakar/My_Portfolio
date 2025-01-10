import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import eeg from '../assets/experience/eeg.png';
import ros from '../assets/experience/ros.png';
import fl from '../assets/experience/fl.png';




const experiences = [
  {
    title: "Person Authentication and Identification Using Machine Learning",
    subtitle: "Research Internship 2023",
    description: [
      "Cutting-edge BCI (brain-computer interface) technology for real-time biometric security.",
      "High-performance AI models: SVM, KNN, Decision Trees, Random Forests, and Ensemble Learning.",
      "Utilizes EEG signals for user authentication/identification.",
      "Forges a new path in biometric security, tapping into the distinctive and intrinsic nature of EEG signals for unparalleled user identification."
    ],
    link: "https://github.com/Sai-Chakradhar-Mahendrakar/EEG-based-Person-Identification-and-Authentication",
    image: eeg  
  },
  {
    title: " Obstacle Avoidance in Autonomous Vehicles",
    subtitle: "UROP Undergraduate Research Opportunity Programme 2023",
    description: [
      "Implements the latest YOLOv8 algorithm for real-time object detection, crucial for effective collision avoidance.",
      "Utilizes advanced LiDAR technology to accurately capture range data of nearby objects, facilitating precise obstacle identification in varied environments.",
      "Conducts real-time simulations within the ROS framework to validate the reliability and practicality of the collision avoidance strategy."
    ],
    link: "https://github.com/Sai-Chakradhar-Mahendrakar/Obstacle-Avoidance-in-Autonomous-Vehicles",
    image: ros 
  },
  {
    title: "Healthcare Data Privacy Using Federated Learning and Homomorphic Encryption",
    subtitle: "Interdisciplinary Project 2024",
    description: [
      "Used CNN-trained brain tumor data to improve healthcare analysis, boosting diagnosis accuracy and treatment success.",
      "Employed CKKS homomorphic encryption for secure processing of sensitive healthcare data, ensuring privacy and confidentiality.",
      "Ensured compliance with data privacy regulations by implementing Federated Learning and Homomorphic Encryption techniques, protecting patient information at every stage of data processing."
    ],
    link: "",
    image: fl  
  }
];

const ExperienceCard = ({ experience }) => (
  <a href={experience.link} target="_blank" rel="noopener noreferrer" className="block">
    <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 group">
      <div className="flex flex-col md:flex-row items-start">
        <img src={experience.image} alt={experience.title} className="w-full md:w-80 h-48 md:h-64 object-cover mb-4 md:mb-0 md:mr-8 rounded-lg shadow-md" />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold text-red-600">{experience.title}</h3>
            <ArrowUpRight className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
          </div>
          <p className="text-md font-medium text-blue-600 mb-4">{experience.subtitle}</p>
          <ul className="list-disc list-inside space-y-2">
            {experience.description.map((point, index) => (
              <li key={index} className="text-gray-600 text-sm">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </a>
);

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
  };

  useEffect(() => {
    const timer = setInterval(nextExperience, 5000);  // Auto-scroll every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="experience" className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-blue-600 text-center mb-2">
          Experience
        </h2>
        <hr className="w-16 h-1 bg-blue-600 border-0 rounded mb-6 mx-auto" />
        <div className="relative">
          <ExperienceCard experience={experiences[currentIndex]} />
          <button
            onClick={prevExperience}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 bg-white rounded-full p-3 shadow-md hover:bg-blue-100 transition-colors duration-200"
            aria-label="Previous experience"
          >
            <ChevronLeft className="text-blue-600" size={28} />
          </button>
          <button
            onClick={nextExperience}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 bg-white rounded-full p-3 shadow-md hover:bg-blue-100 transition-colors duration-200"
            aria-label="Next experience"
          >
            <ChevronRight className="text-blue-600" size={28} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-2 focus:outline-none ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}