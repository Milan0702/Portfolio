import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BackToTop from "@/components/ui/back-to-top";

export default function Home() {
  // Add custom styles for animations and effects
  useEffect(() => {
    // Add custom CSS for nav links
    const style = document.createElement('style');
    style.textContent = `
      .nav-link {
        position: relative;
      }
      
      .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: hsl(var(--primary));
        transition: width 0.3s;
      }
      
      .nav-link:hover::after {
        width: 100%;
      }
      
      .skill-bar {
        position: relative;
        height: 8px;
        border-radius: 4px;
        overflow: hidden;
      }
      
      .contact-input {
        transition: border-color 0.3s, box-shadow 0.3s;
      }
      
      .contact-input:focus {
        border-color: hsl(var(--primary));
        box-shadow: 0 0 0 3px hsla(var(--primary), 0.2);
      }
      
      @keyframes bounce-slow {
        0%, 100% {
          transform: translateY(-25%);
          animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
        50% {
          transform: translateY(0);
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      }
      
      .animate-bounce-slow {
        animation: bounce-slow 3s infinite;
      }
      
      @keyframes slideRight {
        0% {
          transform: translateX(-100px);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      .animate-slideRight {
        animation: slideRight 0.5s ease-in-out;
      }
      
      @keyframes slideUp {
        0% {
          transform: translateY(100px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
      
      .animate-slideUp {
        animation: slideUp 0.5s ease-in-out;
      }
    `;
    
    document.head.appendChild(style);
    
    // Add Font Awesome for icons
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesomeLink);
    
    return () => {
      document.head.removeChild(style);
      document.head.removeChild(fontAwesomeLink);
    };
  }, []);
  
  return (
    <div className="font-sans antialiased text-gray-800 transition-colors duration-500 dark:text-gray-100 min-h-screen">
      <div className="page-transition">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
