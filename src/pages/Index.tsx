
import React from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import AboutSection from '@/components/AboutSection';
import CertificationsSection from '@/components/CertificationsSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import StatsSection from '@/components/StatsSection';
import PhilosophySection from '@/components/PhilosophySection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  // Personal information - replace with your own
  const personalInfo = {
    name: "Your Name",
    title: "Specialist in 🔎 Root Cause Analysis • ☁️ Cloud Infrastructure • 🔐 Security Automation",
    description: "Building resilient systems, automating intelligent detection, and solving complex problems before they escalate.",
    portfolioUrl: "https://your-site.com",
    emailAddress: "you@example.com",
    experience: "5 years",
    specialty: "Problem-Solving is my Superpower",
    linkedIn: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
    githubUsername: "yourusername"
  };

  // Achievements
  const achievements = [
    "I've migrated entire infrastructures across continents in under 24 hours",
    "Automated recovery of databases over 20TB",
    "Led security initiatives aligned with ISO 27001, LGPD, and pentest validations"
  ];

  // Skills
  const skills = [
    {
      category: "Cloud Engineering (3+ years on GCP)",
      items: ["AppEngine", "Cloud Functions", "VPC", "GKE", "Helm", "Terraform"]
    },
    {
      category: "Security",
      items: ["Threat detection", "Scorecards", "Vulnerability scanning", "Data protection (LGPD)", "Pentesting"]
    },
    {
      category: "Automation",
      items: ["Monitoring pipelines", "Self-healing systems", "Data sync", "Backup automation"]
    },
    {
      category: "Languages",
      items: ["Python", "Bash", "TypeScript/JavaScript", "Go", "PHP"]
    },
    {
      category: "Leadership",
      items: ["Tech Lead", "SRE", "Security teams"]
    }
  ];

  // Certifications
  const certifications = [
    { name: "Google Cloud Certified – Associate Cloud Engineer" },
    { name: "ISO 27001 Security Foundation" },
    { name: "DevSecOps Essentials" },
    { name: "Advanced Python Automation" },
    { name: "Pentest & Ethical Hacking Fundamentals" },
    { name: "LGPD Compliance Training" }
  ];

  // Skill Categories for the interactive skill section
  const skillCategories = [
    {
      category: "Cloud Infra",
      skills: [
        { name: "GCP", level: 90 },
        { name: "AWS", level: 75 },
        { name: "Kubernetes", level: 85 },
        { name: "Terraform", level: 80 }
      ]
    },
    {
      category: "Automation",
      skills: [
        { name: "Python", level: 95 },
        { name: "Bash", level: 90 },
        { name: "GitHub Actions", level: 85 },
        { name: "CI/CD", level: 88 }
      ]
    },
    {
      category: "Security",
      skills: [
        { name: "ISO 27001", level: 80 },
        { name: "LGPD", level: 85 },
        { name: "Pentest", level: 75 },
        { name: "OWASP ZAP", level: 70 }
      ]
    },
    {
      category: "Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Go", level: 65 },
        { name: "PHP", level: 85 },
        { name: "TypeScript", level: 90 }
      ]
    }
  ];

  // Featured Projects
  const projects = [
    {
      title: "CloudShift 24h",
      description: "Migrated entire infra from AWS to GCP in 24h, re-architected to microservices",
      technologies: ["GCP", "AWS", "Terraform", "Kubernetes"],
      link: "https://github.com/yourusername/cloudshift"
    },
    {
      title: "InfraSplit",
      description: "Split and automated the replication of a 20TB monolithic DB into 5 scalable nodes",
      technologies: ["MySQL", "Python", "Docker", "CI/CD"],
      link: "https://github.com/yourusername/infrasplit"
    },
    {
      title: "AutoSentinel",
      description: "Built proactive monitoring system to detect anomalies, errors and misconfigs",
      technologies: ["Go", "Prometheus", "Grafana", "Machine Learning"],
      link: "https://github.com/yourusername/autosentinel"
    },
    {
      title: "SecurityPulse",
      description: "Developed scorecard-based automated security audit for GitHub and APIs",
      technologies: ["TypeScript", "Node.js", "GitHub Actions", "REST APIs"],
      link: "https://github.com/yourusername/securitypulse"
    }
  ];

  // Philosophy section
  const philosophyData = {
    quote: "Systems fail. What matters is how fast and how well you recover and improve.",
    philosophy: "🔎 I believe every failure is feedback — and every crash is an opportunity for innovation.",
    values: [
      {
        title: "Resilience First",
        description: "Build systems that survive the unexpected and recover gracefully from failure."
      },
      {
        title: "Security by Design",
        description: "Prevention is cheaper than incident response. Security belongs in every stage."
      },
      {
        title: "Automate Everything",
        description: "Repetition is waste — automate the predictable to focus on solving new problems."
      },
      {
        title: "Think in Root Causes",
        description: "Don't patch symptoms. Identify and solve the source of problems."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-10 px-4">
        <ProfileHeader 
          name={personalInfo.name}
          title={personalInfo.title}
          description={personalInfo.description}
          portfolioUrl={personalInfo.portfolioUrl}
          emailAddress={personalInfo.emailAddress}
        />
        
        <AboutSection 
          experience={personalInfo.experience}
          specialty={personalInfo.specialty}
          achievements={achievements}
          skills={skills}
        />
        
        <CertificationsSection certifications={certifications} />
        
        <SkillsSection skillCategories={skillCategories} />
        
        <ProjectsSection projects={projects} />
        
        <StatsSection username={personalInfo.githubUsername} />
        
        <PhilosophySection 
          quote={philosophyData.quote}
          philosophy={philosophyData.philosophy}
          values={philosophyData.values}
        />
        
        <ContactSection 
          email={personalInfo.emailAddress}
          linkedIn={personalInfo.linkedIn}
          github={personalInfo.github}
          portfolio={personalInfo.portfolioUrl}
          calendlyLink="https://cal.com/you"
        />
      </div>
    </div>
  );
};

export default Index;
