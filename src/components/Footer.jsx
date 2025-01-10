import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://counter4.optistats.ovh/private/counter.js?c=g7ex5m73jp1xms23s1lwqt877lm4p3ak&down=async';
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <footer className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Personal Info */}
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div>
              <h3 className="text-lg font-bold">Sai Chakradhar Rao Mahendrakar</h3>
            </div>
          </div>

          {/* Visitor Counter */}
          <div className="mb-2 md:mb-0">
            <div id="sfcg7ex5m73jp1xms23s1lwqt877lm4p3ak"></div>
            <noscript>
              <a href="https://www.freecounterstat.com" title="website counter code">
                <img 
                  src="https://counter4.optistats.ovh/private/freecounterstat.php?c=g7ex5m73jp1xms23s1lwqt877lm4p3ak" 
                  border="0" 
                  title="website counter code" 
                  alt="website counter code"
                />
              </a>
            </noscript>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/saichakradharrm/" className="text-xl hover:text-blue-400 transition duration-300">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Sai-Chakradhar-Mahendrakar" className="text-xl hover:text-gray-400 transition duration-300">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-2 pt-2 border-t border-gray-700 flex flex-wrap items-center justify-between">
          <p className="text-xs text-gray-400">
            © {currentYear} Sai Chakradhar Rao Mahendrakar. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}
