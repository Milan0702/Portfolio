import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ServiceSkill } from "@/data/index";

interface ServiceCardProps {
  service: ServiceSkill;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Calculate animation delay based on index
  const animationDelay = `${index * 0.15}s`;

  // Get color classes based on service.color
  const getColorClasses = () => {
    switch (service.color) {
      case 'primary':
        return {
          bg: "bg-primary",
          bgLight: "bg-primary/10",
          text: "text-primary",
          border: "border-primary"
        };
      case 'secondary':
        return {
          bg: "bg-secondary",
          bgLight: "bg-secondary/10",
          text: "text-secondary",
          border: "border-secondary"
        };
      case 'accent':
        return {
          bg: "bg-accent",
          bgLight: "bg-accent/10",
          text: "text-accent",
          border: "border-accent"
        };
      case 'pink-500':
        return {
          bg: "bg-pink-500",
          bgLight: "bg-pink-500/10",
          text: "text-pink-500",
          border: "border-pink-500"
        };
      case 'blue-500':
        return {
          bg: "bg-blue-500",
          bgLight: "bg-blue-500/10",
          text: "text-blue-500",
          border: "border-blue-500"
        };
      case 'green-500':
        return {
          bg: "bg-green-500",
          bgLight: "bg-green-500/10",
          text: "text-green-500",
          border: "border-green-500"
        };
      default:
        return {
          bg: "bg-primary",
          bgLight: "bg-primary/10",
          text: "text-primary",
          border: "border-primary"
        };
    }
  };

  const colorClasses = getColorClasses();
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-transparent transition-all duration-500 cursor-pointer group hover:border-primary relative overflow-hidden",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
      )}
      style={{ transitionDelay: animationDelay }}
    >
      <div className="flex items-center mb-4">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${colorClasses.bg} mr-4`}>
          <i className={`${service.icon} text-xl`}></i>
        </div>
        <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-base">
        {service.description}
      </p>
      
      <div className="mt-6">
        <h4 className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium mb-3">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech, i) => (
            <span 
              key={i} 
              className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${colorClasses.bgLight} ${colorClasses.text}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${colorClasses.bg}`}>
          <i className="fas fa-arrow-right text-white text-sm"></i>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;