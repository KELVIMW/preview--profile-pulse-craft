
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

interface ContactSectionProps {
  email: string;
  linkedIn: string;
  github: string;
  portfolio: string;
  calendlyLink?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  email,
  linkedIn,
  github,
  portfolio,
  calendlyLink
}) => {
  return (
    <div className="my-10 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 border-b border-github-primary pb-2">Let's Connect</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-github-primary mr-3" />
            <a href={`mailto:${email}`} className="text-github-secondary hover:text-github-primary">
              {email}
            </a>
          </div>
          
          <div className="flex items-center">
            <Linkedin className="h-5 w-5 text-github-primary mr-3" />
            <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-github-secondary hover:text-github-primary">
              linkedin.com/in/yourusername
            </a>
          </div>
          
          <div className="flex items-center">
            <Github className="h-5 w-5 text-github-primary mr-3" />
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-github-secondary hover:text-github-primary">
              github.com/yourusername
            </a>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          {calendlyLink && (
            <Button asChild className="bg-github-primary hover:bg-github-primary/90">
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                ✨ Book a Call
              </a>
            </Button>
          )}
          
          <Button asChild variant="outline" className="border-github-primary text-github-primary hover:text-github-primary/90">
            <a href={`mailto:${email}?subject=Security%20Audit%20Request`}>
              🔒 Security Review Request
            </a>
          </Button>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-github-secondary rounded-md text-white text-center">
        <p className="text-lg font-medium mb-2">
          If you're looking for someone who doesn't just write code, but <strong>builds resilient, secure, and intelligent systems</strong>, you're in the right place.
        </p>
        <p className="text-github-accent text-xl font-bold">
          I turn instability into innovation — faster than most people can identify the issue.
        </p>
        <p className="mt-4">Let's solve something big together.</p>
      </div>
    </div>
  );
};

export default ContactSection;
