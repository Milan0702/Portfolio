import { cn } from "@/lib/utils";
import { Project } from "@/data/index";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { title, description, image, technologies, liveUrl, githubUrl } = project;
  
  // Map technology to color class
  const getTechColor = (tech: string) => {
    const colorMap: Record<string, string> = {
      "React": "blue",
      "Next.js": "blue",
      "Node.js": "green",
      "Express": "green",
      "MongoDB": "yellow",
      "Firebase": "green",
      "TypeScript": "pink",
      "JavaScript": "yellow",
      "Stripe": "purple",
      "Socket.io": "indigo",
      "Redux": "purple",
      "GraphQL": "pink",
      "PostgreSQL": "yellow",
      "AWS S3": "green",
      "Storybook": "blue",
      "Styled Components": "pink",
      "Figma": "yellow",
      "Jest": "purple",
      "Redis": "red",
      "Docker": "blue",
      "Kubernetes": "gray",
      "React Native": "blue",
      "Health APIs": "red"
    };
    
    return colorMap[tech] || "gray";
  };
  
  return (
    <div className={cn(
      "project-card group custom-card overflow-hidden transform hover:-translate-y-2 transition duration-300",
      className
    )}>
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-end space-x-2">
              {liveUrl && (
                <a 
                  href={liveUrl} 
                  className="btn-primary p-2 rounded-full flex items-center justify-center w-10 h-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-link"></i>
                </a>
              )}
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  className="btn-secondary p-2 rounded-full flex items-center justify-center w-10 h-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-primary/20 dark:bg-primary/30 text-gray-800 dark:text-white text-xs rounded-md"
              style={{ borderLeft: `3px solid var(--primary)` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
