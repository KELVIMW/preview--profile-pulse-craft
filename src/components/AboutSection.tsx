
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface AboutSectionProps {
  experience: string;
  specialty: string;
  achievements: string[];
  skills: {
    category: string;
    items: string[];
  }[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  experience,
  specialty,
  achievements,
  skills
}) => {
  return (
    <div className="my-10 animate-fade-in">
      <div className="bg-github-secondary rounded-md p-6 text-white">
        <h2 className="text-2xl font-bold mb-4 border-b border-github-primary pb-2">About Me</h2>
        
        <p className="mb-4">
          I'm a <strong>Tech Lead in InfraSec & SRE</strong>, with over <strong>{experience}</strong> of experience 
          solving complex technical challenges across <strong>cloud platforms</strong>, <strong>security</strong>, 
          and <strong>automated systems</strong>.
        </p>
        
        <p className="mb-6">
          🧠 <strong>{specialty}</strong> — I specialize in <strong>root cause analysis</strong>, 
          crafting solutions that prevent recurrence and improve system resilience.
        </p>
        
        <h3 className="text-lg font-bold mb-2">Key Achievements:</h3>
        <ul className="list-disc pl-5 mb-6 space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
        
        <h3 className="text-lg font-bold mb-2">I bring deep knowledge in:</h3>
        <div className="space-y-4">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <p className="font-semibold text-github-primary">{skillGroup.category}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {skillGroup.items.map((skill, idx) => (
                  <Badge key={idx} className="bg-github-accent/20 text-github-accent hover:bg-github-accent/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
