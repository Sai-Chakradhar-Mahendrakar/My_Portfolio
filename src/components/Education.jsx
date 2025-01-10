import React from 'react';

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      institution: "SRM University AP",
      description: "Computer Science and Engineering Specialized in Artificial Intelligence and Machine Learning",
      grade: "CGPA: 9.20",
      period: "2021 - 2025",
      align: "right"
    },
    {
      degree: "Senior Secondary",
      institution: "Narayana Junior College",
      grade: "Percentage: 96.0%",
      period: "2019 - 2021",
      align: "left"
    },
    {
      degree: "SSC",
      institution: "Sri Chaitanya Techno School",
      grade: "GPA: 9.7",
      period: "2018 - 2019",
      align: "right"
    }
  ];

  return (
    <section id="education" className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-blue-600 text-center mb-2">Education</h2>
        <hr className="w-16 h-1 bg-blue-600 border-0 rounded mb-6 mx-auto" />
        <div className="relative max-w-6xl mx-auto w-full">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-400"></div>
          {educationData.map((item, index) => (
            <div key={index} className={`mb-8 flex ${item.align === 'left' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-5/12 ${item.align === 'left' ? 'pl-4' : 'pr-4'}`}>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.degree}</h3>
                  <p className="text-sm text-gray-600">{item.institution}</p>
                  {item.description && <p className="text-xs text-gray-500 my-1">{item.description}</p>}
                  <p className="text-sm font-bold text-blue-600">{item.grade}</p>
                </div>
              </div>
              <div className="w-2/12 flex justify-center items-center relative">
                <div className="absolute z-10 w-6 h-6 bg-red-500 rounded-full border-3 border-white"></div>
                <div className="absolute z-20 bg-white px-2 py-0.5 rounded shadow-sm transform -translate-y-1/2 whitespace-nowrap">
                  <span className="text-xs font-semibold text-gray-700">{item.period}</span>
                </div>
              </div>
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}