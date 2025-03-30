import { useRef, useEffect } from "react";
import { ServiceCard } from "@/components/ui/service-card";
import { SkillBar } from "@/components/ui/skill-bar";
import { scrollToElement } from "@/lib/utils";
import data from "@/data/index";

export function Skills() {
  const { serviceSkills, frontendSkills, backendSkills } = data;
  const sectionRef = useRef<HTMLElement>(null);
  const scrollDownRef = useRef<HTMLDivElement>(null);
  
  // Scroll to the next section when the scroll down button is clicked
  const handleScrollDown = () => {
    const nextSection = sectionRef.current?.nextElementSibling;
    if (nextSection && "id" in nextSection) {
      scrollToElement(nextSection.id);
    }
  };
  
  // Track scroll position to animate the scroll down button
  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = scrollDownRef.current;
      if (!scrollButton) return;
      
      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current?.offsetTop || 0;
      const sectionHeight = sectionRef.current?.clientHeight || 0;
      
      // If we're past the skills section, fade out the button
      if (scrollY > sectionTop + sectionHeight - 200) {
        scrollButton.style.opacity = "0";
        scrollButton.style.transform = "translateY(20px)";
      } else {
        scrollButton.style.opacity = "1";
        scrollButton.style.transform = "translateY(0)";
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What <span className="text-primary dark:text-primary">I Do</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My expertise spans across various domains of software development, from frontend to backend.
          </p>
        </div>
        
        {/* Service Skills Cards - New Bl33h-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 relative">
          {serviceSkills.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        {/* Core Technical Skills */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Technical <span className="text-primary dark:text-primary">Proficiency</span></h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              In-depth expertise and experience with key technologies in my stack.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <i className="fas fa-code text-primary mr-3"></i>
                Frontend Development
              </h3>
              
              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                    color="primary"
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <i className="fas fa-server text-secondary mr-3"></i>
                Backend Development
              </h3>
              
              <div className="space-y-6">
                {backendSkills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                    color="secondary"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down button - Similar to dvlpr.pro */}
      <div 
        ref={scrollDownRef}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer transition-all duration-300"
      >
        <span className="text-gray-500 dark:text-gray-400 mb-2 text-sm font-medium">Scroll Down</span>
        <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center animate-bounce-slow">
          <i className="fas fa-angle-down text-primary"></i>
        </div>
      </div>
    </section>
  );
}

export default Skills;