import { useRef, useEffect } from "react";
import { SkillCardComponent } from "@/components/ui/skill-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import data from "@/data/index";

export function Skills() {
  const { skillCards } = data;
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  // Create duplicate arrays for infinite scroll effect
  const duplicatedCards = [...skillCards, ...skillCards];
  
  // Implement the scroll transition effect
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const headings = document.querySelectorAll('.heading-animate');
    
    const handlePageScroll = () => {
      const scrollY = window.scrollY;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // When we're halfway past a section
        if (scrollY > sectionTop - window.innerHeight / 2 && 
            scrollY < sectionTop + sectionHeight - window.innerHeight / 2) {
          section.classList.add('active-section');
          document.body.style.backgroundColor = 
            section.id === 'skills' ? 'var(--background-color)' : '';
        } else {
          section.classList.remove('active-section');
        }
      });
      
      // Animate headings when they come into view
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        const isVisible = (rect.top < window.innerHeight * 0.8);
        
        if (isVisible) {
          heading.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handlePageScroll);
    // Trigger once on load
    setTimeout(handlePageScroll, 500);
    
    return () => window.removeEventListener('scroll', handlePageScroll);
  }, []);
  
  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: 'var(--secondary-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" className="text-center mb-6">
          <p className="text-lg uppercase tracking-widest font-medium mb-2 mr-2 text-highlight">the</p>
          <h2 ref={headingRef} className="heading-animate text-4xl md:text-6xl font-bold mb-8">
            <span className="text-highlight"> Skills</span>
          </h2><p className="text-lg uppercase tracking-widest font-medium mb-2 ml-2 text-highlight">behind the magic</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "300ms" }}>
            I enjoy creating beautiful, intuitive, and performant web applications with cutting-edge technologies.
          </p>
        </ScrollReveal>
        
        {/* Horizontal scrolling skill cards like on whosbl33h.netlify.app */}
        <div className="relative">
          {/* Top row - scrolling right */}
          <div className="skill-cards-container mb-8">
            <div className="h-[10px] w-full border-t-2 border-gray-200 dark:border-gray-700 absolute top-0"></div>
            <div className="skill-cards-row scroll-right">
              {duplicatedCards.map((skill, index) => (
                <SkillCardComponent key={`right-${index}`} skill={skill} />
              ))}
            </div>
            <div className="h-[10px] w-full border-b-2 border-gray-200 dark:border-gray-700 absolute bottom-0"></div>
          </div>
          
          {/* Bottom row - scrolling left */}
          <div className="skill-cards-container">
            <div className="h-[10px] w-full border-t-2 border-gray-200 dark:border-gray-700 absolute top-0"></div>
            <div className="skill-cards-row scroll-left">
              {duplicatedCards.map((skill, index) => (
                <SkillCardComponent key={`left-${index}`} skill={skill} />
              ))}
            </div>
            <div className="h-[10px] w-full border-b-2 border-gray-200 dark:border-gray-700 absolute bottom-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
