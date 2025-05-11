
import React from 'react';
import { Check } from "lucide-react";

interface Certification {
  name: string;
  logoUrl?: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <div className="my-10 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 border-b border-github-primary pb-2">Certifications & Credentials</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="flex items-center p-4 bg-white rounded-md shadow-sm card-hover"
          >
            <div className="mr-4 bg-github-primary rounded-full p-1">
              <Check className="h-5 w-5 text-white" />
            </div>
            <span className="font-medium">{cert.name}</span>
            {cert.logoUrl && (
              <img 
                src={cert.logoUrl} 
                alt={cert.name} 
                className="h-6 ml-auto" 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;
