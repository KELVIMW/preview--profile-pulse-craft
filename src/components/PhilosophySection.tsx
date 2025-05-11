
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface PhilosophyItem {
  title: string;
  description: string;
}

interface PhilosophySectionProps {
  quote: string;
  philosophy: string;
  values: PhilosophyItem[];
}

const PhilosophySection: React.FC<PhilosophySectionProps> = ({ quote, philosophy, values }) => {
  return (
    <div className="my-10 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 border-b border-github-primary pb-2">Values & Mindset</h2>
      
      <div className="bg-github-secondary rounded-md p-6 text-white mb-6">
        <blockquote className="border-l-4 border-github-accent pl-4 italic text-lg">
          "{quote}"
        </blockquote>
      </div>
      
      <p className="mb-6 text-lg">{philosophy}</p>
      
      <h3 className="text-xl font-bold mb-4">My core philosophy is based on:</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {values.map((value, index) => (
          <Card key={index} className="card-hover animate-float">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold text-github-primary mb-2">{value.title}</h4>
              <p className="text-gray-700">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PhilosophySection;
