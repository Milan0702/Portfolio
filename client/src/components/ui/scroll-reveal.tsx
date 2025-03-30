import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  distance?: number;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 800,
  className,
  threshold = 0.1,
  distance = 50
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  // Set initial and final transform styles based on direction
  const getTransformStyles = () => {
    switch (direction) {
      case "up":
        return {
          initial: `translateY(${distance}px)`,
          final: "translateY(0)"
        };
      case "down":
        return {
          initial: `translateY(-${distance}px)`,
          final: "translateY(0)"
        };
      case "left":
        return {
          initial: `translateX(${distance}px)`,
          final: "translateX(0)"
        };
      case "right":
        return {
          initial: `translateX(-${distance}px)`,
          final: "translateX(0)"
        };
      default:
        return {
          initial: `translateY(${distance}px)`,
          final: "translateY(0)"
        };
    }
  };

  const { initial, final } = getTransformStyles();

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? final : initial,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;