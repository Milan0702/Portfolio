import React from 'react';
import { SkillCard } from '@/data/index';

interface SkillCardProps {
  skill: SkillCard;
}

export function SkillCardComponent({ skill }: SkillCardProps) {
  return (
    <div className="skill-card flex flex-col p-6 rounded-lg min-w-[260px] max-w-[300px] h-[280px] shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-xl"
      style={{ 
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        boxShadow: '0 10px 15px -3px rgba(var(--primary-rgb), 0.15), 0 4px 6px -2px rgba(var(--primary-rgb), 0.1)'
      }}
    >
      <div className="mb-4 flex justify-center">
        <div className="w-14 h-14 bg-primary/20 dark:bg-primary/30 rounded-full flex items-center justify-center border-2" style={{ borderColor: 'var(--primary)' }}>
          <i className={`${skill.icon} text-primary text-2xl`}></i>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-center" style={{ color: 'var(--text-color)' }}>{skill.name}</h3>
      
      <p className="text-sm leading-relaxed flex-grow" style={{ color: 'var(--text-color-light)' }}>
        {skill.description}
      </p>
    </div>
  );
}

export default SkillCardComponent;