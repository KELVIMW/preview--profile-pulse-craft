
import React, { useState } from 'react';

interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 0-100
  }[];
}

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="my-10 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 border-b border-github-primary pb-2">Skill Stack</h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {skillCategories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === index
                ? 'bg-github-primary text-white'
                : 'bg-github-tertiary text-github-secondary hover:bg-github-primary/20'
            }`}
            onClick={() => setActiveCategory(index)}
          >
            {category.category}
          </button>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-md shadow-sm">
        {skillCategories[activeCategory].skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ '--progress-width': `${skill.level}%` } as React.CSSProperties}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
