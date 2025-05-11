
import React from 'react';
import { Check, Award } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface Certification {
  name: string;
  logoUrl?: string;
  issueDate?: string;
  description?: string;
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
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <div 
                className="flex items-center p-4 bg-white rounded-md shadow-sm card-hover cursor-pointer"
              >
                <div className="mr-4 bg-github-primary rounded-full p-1">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">{cert.name}</span>
                <div className="ml-auto flex items-center">
                  <div className="bg-github-accent/20 text-github-accent text-xs px-2 py-1 rounded-full">
                    Verified
                  </div>
                  {cert.logoUrl && (
                    <img 
                      src={cert.logoUrl} 
                      alt={cert.name} 
                      className="h-6 ml-2" 
                    />
                  )}
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 p-4">
              <div>
                <h4 className="text-base font-semibold">{cert.name}</h4>
                {cert.issueDate && (
                  <p className="text-sm text-gray-500">Issued: {cert.issueDate}</p>
                )}
                {cert.description && (
                  <p className="text-sm mt-2">{cert.description}</p>
                )}
                <div className="flex items-center mt-3 text-github-primary">
                  <Check className="h-4 w-4 mr-1" />
                  <span className="text-xs">Validated credential</span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;
