
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Link } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  title: string;
  description: string;
  portfolioUrl: string;
  emailAddress: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  title,
  description,
  portfolioUrl,
  emailAddress
}) => {
  return (
    <div className="animate-fade-in">
      <div className="terminal-header">
        <div className="terminal-circle bg-red-500"></div>
        <div className="terminal-circle bg-yellow-500"></div>
        <div className="terminal-circle bg-green-500"></div>
        <div className="ml-2 text-sm opacity-70">profile.md</div>
      </div>
      <div className="terminal-body">
        <h1 className="text-3xl font-bold mb-2">👋 Hi, I'm <span className="text-github-primary">{name}</span></h1>
        <h3 className="text-lg text-github-accent mb-4">{title}</h3>
        <p className="mb-6 text-github-tertiary typing-effect">{description}</p>
        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-github-primary hover:bg-github-primary/90">
            <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
              <Link className="mr-2 h-4 w-4" />
              View My Portfolio
            </a>
          </Button>
          <Button asChild variant="outline" className="border-github-primary text-github-primary hover:text-github-primary/90">
            <a href={`mailto:${emailAddress}`}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
