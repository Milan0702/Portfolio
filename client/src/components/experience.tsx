import { useRef, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import data from "@/data/index";

export function Experience() {
  const { experiences, education, certificates } = data;
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
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300" style={{ backgroundColor: 'var(--primary-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" className="text-center mb-12">
          <h2 ref={headingRef} className="heading-animate text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-highlight">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: "200ms" }}>
            My professional journey and roles I've held over the years.
          </p>
        </ScrollReveal>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 animate-fade-in-up opacity-0" style={{ animationDelay: "300ms" }}></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center">
                {/* Timeline dot */}
                <div 
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-900 animate-fade-in-up opacity-0" 
                  style={{ animationDelay: `${400 + (index * 150)}ms` }}
                ></div>
                
                {/* Left side (even items) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0 md:order-1 order-2">
                      <div 
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg ml-auto custom-card animate-fade-in-left opacity-0" 
                        style={{ animationDelay: `${500 + (index * 150)}ms` }}
                      >
                        <span className={`inline-block px-3 py-1 bg-${experience.color}/10 text-${experience.color} rounded-full text-sm font-medium mb-2`}>
                          {experience.duration}
                        </span>
                        <h3 className="text-xl font-bold mb-1 heading-animate">{experience.role}</h3>
                        <h4 className="text-gray-600 dark:text-gray-400 mb-3">{experience.company}</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          {experience.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2 justify-end">
                          {experience.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2"></div>
                  </>
                ) : (
                  <>
                    <div className="w-full md:w-1/2 order-1"></div>
                    <div className="w-full md:w-1/2 md:pl-12 mb-8 md:mb-0 order-2">
                      <div 
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg custom-card animate-fade-in-right opacity-0" 
                        style={{ animationDelay: `${500 + (index * 150)}ms` }}
                      >
                        <span className={`inline-block px-3 py-1 bg-${experience.color}/10 text-${experience.color} rounded-full text-sm font-medium mb-2`}>
                          {experience.duration}
                        </span>
                        <h3 className="text-xl font-bold mb-1 heading-animate">{experience.role}</h3>
                        <h4 className="text-gray-600 dark:text-gray-400 mb-3">{experience.company}</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          {experience.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Education section */}
        <div className="mt-20">
          <h3 className="heading-animate text-2xl font-bold mb-10 text-center">Education</h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg max-w-3xl mx-auto custom-card animate-fade-in-up opacity-0" style={{ animationDelay: "800ms" }}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                  <i className="fas fa-graduation-cap text-2xl text-primary"></i>
                </div>
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                  {education.duration}
                </span>
                <h4 className="text-xl font-bold mb-1 heading-animate">{education.degree}</h4>
                <h5 className="text-gray-600 dark:text-gray-400 mb-3">{education.institution}</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  {education.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {education.subjects.map((subject, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications Section */}
        <div className="mt-20">
          <ScrollReveal direction="up" className="mb-10">
            <h3 className="heading-animate text-2xl font-bold mb-6 text-center">
              Certifications & <span className="text-highlight">Achievements</span>
            </h3>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((certificate, index) => (
                <a 
                  key={index}
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block custom-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 hover:shadow-lg animate-fade-in-up opacity-0"
                  style={{ 
                    animationDelay: `${300 + (index * 100)}ms`,
                    transform: 'translateY(0)',
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--card-border)'
                  }}
                >
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <i className="fas fa-certificate text-primary"></i>
                    </div>
                    <h4 className="font-bold text-lg" style={{ color: 'var(--text-color)' }}>{certificate.name}</h4>
                  </div>
                  <p className="text-sm mb-2" style={{ color: 'var(--text-color-light)' }}>
                    <strong>Issuer:</strong> {certificate.issuer}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--text-color-light)' }}>
                    <strong>Date:</strong> {certificate.date}
                  </p>
                  <div className="mt-4 text-primary text-sm font-medium flex items-center">
                    View Certificate
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Experience;
