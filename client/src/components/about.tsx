import { useRef, useEffect } from "react";
import data from "@/data/index";
import { scrollToElement } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function About() {
  const { about, resumeUrl } = data;
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const headings = document.querySelectorAll('.heading-animate');
    
    const handleScroll = () => {
      // Animate headings when they come into view
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        const isVisible = (rect.top < window.innerHeight * 0.8);
        
        if (isVisible) {
          heading.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300" style={{ backgroundColor: 'var(--secondary-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" className="text-center mb-12">
          <h2 ref={headingRef} className="heading-animate text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-highlight">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: "200ms" }}>
            Here's a brief overview of who I am and what I do.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="heading-animate text-2xl font-bold mb-4">Who am I?</h3>
            {about.description.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-gray-700 dark:text-gray-300 mb-4 animate-fade-in-left opacity-0" 
                style={{ animationDelay: `${300 + (index * 100)}ms` }}
              >
                {paragraph}
              </p>
            ))}
            
            <div className="flex flex-wrap gap-3 mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "600ms" }}>
              {about.qualities.map((quality, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm custom-card"
                >
                  {quality}
                </span>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg animate-fade-in-right opacity-0" style={{ animationDelay: "300ms" }}>
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((stat, index) => (
                <div key={index} className="custom-card bg-gray-50 dark:bg-gray-800 p-4 rounded-lg" style={{ animationDelay: `${400 + (index * 100)}ms` }}>
                  <div className="text-primary text-4xl mb-2">
                    <i className={`fas ${stat.icon}`}></i>
                  </div>
                  <h4 className="text-xl font-bold mb-1">{stat.label}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{stat.value}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToElement('contact'); }}
                className="bg-white dark:bg-gray-800 text-primary border border-primary text-center py-3 rounded-lg transition duration-300 hover:bg-primary hover:text-white"
              >
                Hire Me
              </a>
              <a 
                href={resumeUrl}
                className="bg-white dark:bg-gray-800 text-primary border border-primary text-center py-3 rounded-lg transition duration-300 hover:bg-primary hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
