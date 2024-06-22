import React, { useState, useEffect } from 'react';
import { Code, Database, Globe, Brain, Eye, Wrench, PenTool, Monitor } from 'lucide-react';

const skillsData = [
  { Icon: Code, title: 'Programming Languages', skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'Assembly', 'Shell/Bash'] },
  { Icon: Database, title: 'Database', skills: ['MySQL', 'MongoDB'] },
  { Icon: Globe, title: 'Web Technologies', skills: ['HTML', 'CSS', 'JSON', 'NodeJS', 'ExpressJS', 'RESTful API', 'EJS', 'Mongoose', 'ReactJS'] },
  { Icon: Brain, title: 'Machine Learning', skills: ['Linear Regression', 'Logistic Regression', 'SVM', 'KNN', 'Decision Tree', 'Random Forest'] },
  { Icon: Brain, title: 'Deep Learning', skills: ['Artificial and Convolution Neural networks'] },
  { Icon: Eye, title: 'Computer Vision', skills: ['Object detection', 'YOLO Algorithms'] },
  { Icon: PenTool, title: 'MS Office', skills: ['Word', 'Excel', 'PowerPoint'] },
  { Icon: Monitor, title: 'Platforms', skills: ['Linux', 'Windows'] },
  { Icon: Wrench, title: 'Tools & Simulations', skills: ['Git', 'ROS 2.0'] },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 3) % skillsData.length);
    }, 3000); // Change the interval as needed (e.g., 3000ms for 3 seconds)
    return () => clearInterval(interval);
  }, []);

  const displayedSkills = skillsData.slice(activeIndex, activeIndex + 3).concat(
    skillsData.slice(0, Math.max(0, (activeIndex + 3) - skillsData.length))
  );

  return (
    <div id="skills" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
          Skills
        </h2>
        <div className="space-y-4 transition-transform duration-500 ease-in-out custom-scrollbar">
          {displayedSkills.map((category, index) => (
            <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0">
                <category.Icon size={48} className="text-red-600 mr-4" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <ul className="text-gray-700 flex flex-wrap">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="mr-4 mb-1">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}