import { useState, useRef, useEffect } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import data from "@/data/index";

// Extract unique categories from projects
const categories = ["All", ...Array.from(new Set(data.projects.map(project => project.category)))];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  const filteredProjects = selectedCategory === "All" 
    ? data.projects 
    : data.projects.filter(project => project.category === selectedCategory);
    
  // Determine how many projects to show initially (2 rows: 6 on desktop, 4 on tablet, 2 on mobile)
  const initialProjectsToShow = 6; // 3 columns x 2 rows on desktop
  
  // Projects to display based on whether we're showing all or just initial set
  const displayedProjects = showAllProjects 
    ? filteredProjects 
    : filteredProjects.slice(0, initialProjectsToShow);
    
  // Check if we need to show the "View All" button
  const hasMoreProjects = filteredProjects.length > initialProjectsToShow;
  
  const handleViewAllClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAllProjects(true);
    
    // Smooth scroll to show newly displayed projects
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      const currentScrollPosition = window.scrollY;
      const offset = 200; // Scroll a bit further down to show new content
      
      if (projectsSection) {
        window.scrollTo({
          top: currentScrollPosition + offset,
          behavior: 'smooth'
        });
      }
    }, 100);
  };
  
  const handleViewLessClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAllProjects(false);
    
    // Scroll back to the projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
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
  
  // Reset showAllProjects when category changes
  useEffect(() => {
    setShowAllProjects(false);
  }, [selectedCategory]);
  
  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300" style={{ backgroundColor: 'var(--secondary-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" className="text-center mb-12">
          <h2 ref={headingRef} className="heading-animate text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-highlight">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: "200ms" }}>
            Take a look at some of the projects I've worked on.
          </p>
        </ScrollReveal>

        <div className="mb-8 flex flex-wrap justify-center gap-3 animate-fade-in-up opacity-0" style={{ animationDelay: "300ms" }}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`project-filter-btn px-4 py-2 rounded-full font-medium transition duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white'
              }`}
              style={{ animationDelay: `${400 + (index * 50)}ms` }}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-fade-in-up opacity-0" 
              style={{ animationDelay: `${500 + (index * 100)}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 animate-fade-in-up opacity-0 " style={{ animationDelay: "800ms" }}>
          {hasMoreProjects && !showAllProjects ? (
            <button 
              onClick={handleViewAllClick}
              className="inline-block px-6 py-3 dark:bg-gray-800 hover:bg-primary-dark text-white font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg"
            >
              View All Projects
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          ) : (
            showAllProjects && (
              <button 
                onClick={handleViewLessClick}
                className="inline-block px-6 py-3 dark:bg-gray-800  hover:bg-secondary-dark text-white font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                View Less
                <i className="fas fa-arrow-up ml-2"></i>
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
