
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface StatsProps {
  username: string;
}

const StatsSection: React.FC<StatsProps> = ({ username }) => {
  return (
    <div className="my-10 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 border-b border-github-primary pb-2">GitHub Stats & Activity</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true`}
              alt="GitHub Stats"
              className="w-full h-auto"
            />
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`}
              alt="Top Languages"
              className="w-full h-auto"
            />
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true`}
              alt="GitHub Streak Stats"
              className="w-full h-auto"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatsSection;
