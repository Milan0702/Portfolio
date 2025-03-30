import { useState, useRef, useEffect } from "react";
import { scrollToElement } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import data from "@/data/index";

export function Footer() {
  const { name, resumeUrl, socials } = data;
  const currentYear = new Date().getFullYear();
  const [hoverLink, setHoverLink] = useState<number | null>(null);
  
  const navigationLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    scrollToElement(targetId);
  };
  
  return (
    <footer style={{ backgroundColor: 'var(--secondary-bg)', color: 'var(--text-color)' }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-3">
              <span className="text-highlight">Milan</span>
              <span className="text-secondary">.Dev</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Full Stack Developer specialized in creating modern, responsive web applications with cutting-edge technologies.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socials.slice(0, 4).map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110 transform"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
            <div>
              <a 
                href={resumeUrl} 
                className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download Resume</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-y-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0 animate-fade-in-up opacity-0" style={{ animationDelay: "200ms" }}>
            &copy; {currentYear} <span>Milan.Dev</span>. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            {navigationLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                onMouseEnter={() => setHoverLink(index)}
                onMouseLeave={() => setHoverLink(null)}
                className="text-gray-400 hover:text-primary transition-all duration-300 relative"
              >
                {link.label}
                <span 
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${hoverLink === index ? 'w-full' : 'w-0'}`}
                ></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
