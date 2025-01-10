import { Code, Database, Globe, Brain, Eye, Wrench, PenTool, Monitor } from 'lucide-react';

const skillsData = [
  { Icon: Code, title: 'Programming Languages', skills: ['C', 'C++', 'Python', 'Java', 'JavaScript'] },
  { Icon: Database, title: 'Database', skills: ['MySQL', 'MongoDB'] },
  { Icon: Globe, title: 'Web Technologies', skills: ['HTML', 'CSS', 'JSON', 'NodeJS', 'ExpressJS', 'RESTful API', 'EJS', 'Mongoose', 'ReactJS'] },
  { Icon: Brain, title: 'Machine Learning', skills: ['Linear Regression', 'Logistic Regression', 'SVM', 'KNN', 'Decision Tree', 'Random Forest', 'Ensemble Learning'] },
  { Icon: Brain, title: 'Deep Learning and Generative AI', skills: ['Artificial and Convolution Neural networks', 'Natural Language Processing', 'Transformers', 'RAG Model'] },
  { Icon: Eye, title: 'Computer Vision', skills: ['Object detection', 'YOLO Algorithms'] },
  { Icon: PenTool, title: 'MS Office', skills: ['Word', 'Excel', 'PowerPoint'] },
  { Icon: Monitor, title: 'Platforms', skills: ['Linux', 'Windows'] },
  { Icon: Wrench, title: 'Tools & Simulations', skills: ['Git'] },
];

export default function Skills() {
  return (
    <div id="skills" className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-blue-600 text-center mb-2">
          Skills & Expertise
        </h2>
        <hr className="w-16 h-1 bg-blue-600 border-0 rounded mb-6 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div 
              key={index} 
              className="group flex flex-col p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <category.Icon 
                  size={40} 
                  className="text-blue-500 group-hover:text-red-500 transition-colors duration-300" 
                />
                <h3 className="text-xl font-semibold ml-4 text-gray-800">
                  {category.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <li 
                    key={i} 
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}