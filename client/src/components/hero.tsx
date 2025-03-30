import { useState, useEffect } from "react";
import { scrollToElement } from "@/lib/utils";
import data from "@/data/index";

export function Hero() {
  const { name, title, intro, resumeUrl, socials } = data;
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textOptions = ["Websites", "Web Apps", "UI/UX Interfaces"];
  const [isTyping, setIsTyping] = useState(true);
  
  // Typing animation effect
  useEffect(() => {
    const texts = textOptions;
    const currentText = texts[currentTextIndex];
    
    if (isTyping) {
      if (typedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setTypedText(currentText.substring(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText(currentText.substring(0, typedText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(true);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }
  }, [typedText, isTyping, currentTextIndex, textOptions]);
  
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center transition-colors duration-300" style={{ backgroundColor: 'var(--primary-bg)' }}>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in-left opacity-0" style={{ animationDelay: "100ms", animationDuration: "800ms" }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms", animationDuration: "1s", animationFillMode: "forwards" }}>
              Hi, I'm 
            </span>
            <span className="text-highlight opacity-0 animate-fade-in-up" style={{ animationDelay: "600ms", animationDuration: "1s", animationFillMode: "forwards" }}>
              {name}
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "900ms", animationDuration: "1s", animationFillMode: "forwards" }}>
            <span className="text-secondary">{title}</span> who creates <span className="text-primary inline-block min-w-32 relative">{typedText}<span className="animate-blink absolute">|</span></span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl opacity-0 animate-fade-in-up" style={{ animationDelay: "1200ms", animationDuration: "1s", animationFillMode: "forwards" }}>
            {intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToElement('contact'); }}
              className="btn-primary px-6 py-3 flex items-center opacity-0 animate-fade-in-up group"
              style={{ animationDelay: "1500ms", animationDuration: "1s", animationFillMode: "forwards" }}
            >
              <span>Let's Build Together!</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToElement('projects'); }}
              className="btn-secondary px-6 py-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "1700ms", animationDuration: "1s", animationFillMode: "forwards" }}
            >
              View Projects
            </a>
            <a 
              href={resumeUrl} 
              className="btn-primary px-6 py-3 flex items-center opacity-0 animate-fade-in-up group"
              style={{ animationDelay: "1900ms", animationDuration: "1s", animationFillMode: "forwards", backgroundColor: "var(--secondary)" }}
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
          <div className="mt-10 flex space-x-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "2100ms", animationDuration: "1s", animationFillMode: "forwards" }}>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300 transform hover:scale-125"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                style={{ animationDelay: `${2200 + (index * 100)}ms` }}
              >
                <i className={`${social.icon} text-2xl`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:justify-end animate-fade-in-right opacity-0" style={{ animationDelay: "500ms", animationDuration: "1s", animationFillMode: "forwards" }}>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl animate-pulse">
              <img 
                src="https://images.unsplash.com/vector-1740123385901-0d69693fce5e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt={name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-7 -right-8 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg animate-bounce" style={{ animationDuration: "3s" }}>
              <i className="fas fa-code text-3xl text-secondary"></i>
            </div>
            <div className="absolute -top-5 -left-8 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-pulse" style={{ animationDuration: "2s" }}>
              <i className="fab fa-react text-2xl text-primary animate-spin" style={{ animationDuration: "4s" }}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Add animated background decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg width="770" height="875" viewBox="0 0 100 100">
          <circle cx="53" cy="50" r="30" fill="none" stroke="var(--primary)" strokeWidth="1" />
          <circle cx="53" cy="50" r="40" fill="none" stroke="var(--primary)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="50" fill="none" stroke="var(--primary)" strokeWidth="0.5" className="animate-ping" style={{ animationDuration: "5s" }} />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
