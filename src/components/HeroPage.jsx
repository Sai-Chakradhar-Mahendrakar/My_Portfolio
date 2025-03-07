import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faJs,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBrain,
  faCode,
  faChartLine,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { SiKaggle } from "react-icons/si";
import myImage from "../assets/Chakri.jpg";

export default function HeroPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/saichakradharrm/",
      icon: faLinkedin,
      color: "text-blue-600 hover:text-blue-800",
      label: "LinkedIn"
    },
    {
      href: "https://github.com/Sai-Chakradhar-Mahendrakar",
      icon: faGithub,
      color: "text-gray-700 hover:text-gray-900",
      label: "GitHub"
    }
  ];

  return (
    <div
      id="home"
      className={`min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm{" "}
            <span className="text-blue-600">
              Sai Chakradhar Rao Mahendrakar
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
            <TypeAnimation
              sequence={[
                "AIML Engineer",
                2000,
                "Full Stack Web Developer",
                2000,
                "Software Engineer",
                2000,
                "MERN Stack Developer",
                2000,
                "Database Engineer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="text-red-500"
            />
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0">
            Passionate about creating innovative solutions and bringing ideas to
            life through code. With expertise in AI/ML, full-stack development,
            and data science, I'm ready to tackle complex challenges.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 ${link.color} transform hover:scale-110`}
                aria-label={link.label}
              >
                <FontAwesomeIcon icon={link.icon} size="2x" />
              </a>
            ))}
            <a
              href="https://kaggle.com/saichakradhar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-all duration-300 transform hover:scale-110"
              aria-label="Kaggle Profile"
            >
              <SiKaggle className="w-8 h-8" />
            </a>
          </div>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Projects
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 shadow-2xl flex items-center justify-center">
              <img
                src={myImage}
                alt="Sai Chakradhar"
                className="rounded-full w-52 h-52 sm:w-72 sm:h-72 object-cover border-4 border-white"
              />
            </div>

            {[
              { icon: faReact, color: "text-blue-400", position: "-top-8 right-0", delay: "0s" },
              { icon: faNode, color: "text-green-500", position: "-bottom-8 left-0", delay: "0.5s" },
              { icon: faJs, color: "text-yellow-400", position: "top-1/4 -left-8", delay: "1s" },
              { icon: faBrain, color: "text-pink-500", position: "top-0 left-1/4", delay: "1.5s" },
              { icon: faDatabase, color: "text-purple-500", position: "bottom-0 right-1/4", delay: "2s" },
              { icon: faChartLine, color: "text-indigo-500", position: "top-1/2 -right-8", delay: "2.5s" },
              { icon: faCode, color: "text-gray-700", position: "bottom-1/4 -left-8", delay: "3.5s" },
            ].map((bubble, index) => (
              <FloatingIconBubble
                key={index}
                icon={bubble.icon}
                color={bubble.color}
                position={bubble.position}
                animationDelay={bubble.delay}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white py-2 px-6 rounded-full shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
        <p className="font-semibold text-lg text-gray-800">
          30+ Projects Completed
        </p>
      </div>
    </div>
  );
}

const FloatingIconBubble = ({ icon, color, animationDelay, position }) => (
  <div
    className={`absolute ${position} bg-white p-2 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300`}
    style={{
      animation: `float 3s ease-in-out infinite`,
      animationDelay,
    }}
  >
    <FontAwesomeIcon icon={icon} className={`${color} w-6 h-6`} />
  </div>
);