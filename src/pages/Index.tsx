
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
  // Personal information - customized with your data
  const personalInfo = {
    name: "Daniel Santos",
    title: "Specialist in 🔎 Root Cause Analysis • ☁️ Cloud Infrastructure • 🔐 Security Automation",
    description: "Building resilient systems, detecting vulnerabilities, and solving complex problems at their source before they escalate.",
    portfolioUrl: "https://your-portfolio.com", // Replace with your actual portfolio URL
    emailAddress: "daniel.santos@example.com", // Replace with your actual email
    experience: "5 years",
    specialty: "Problem-Solving is my Superpower",
    linkedIn: "https://linkedin.com/in/daniel-santos", // Replace with your actual LinkedIn URL
    github: "https://github.com/daniel-santos", // Replace with your actual GitHub URL
    githubUsername: "daniel-santos" // Replace with your actual GitHub username
  };

  // Achievements
  const achievements = [
    "Migrated entire AWS infrastructure to GCP in under 24 hours with App Engine implementation",
    "Orchestrated GCP infrastructure migration from Brazil to USA with improved architecture using VPNs and Kubernetes",
    "Developed an application to migrate and recover a 20TB database, splitting into 5 scalable nodes",
    "Implemented Terraform with Terragrunt and Helm charts for Infrastructure as Code",
    "Led security initiatives aligned with ISO 27001, LGPD compliance, and pentest validations"
  ];

  // Skills
  const skills = [
    {
      category: "Cloud Infrastructure (3+ years on GCP)",
      items: ["App Engine", "Cloud Functions", "VPC", "Kubernetes", "Helm", "Terraform", "Terragrunt"]
    },
    {
      category: "Security",
      items: ["ISO 27001", "LGPD", "Pentesting", "Vulnerability scanning", "Scorecards", "Threat Detection"]
    },
    {
      category: "Automation",
      items: ["Error detection", "Monitoring pipelines", "Self-healing systems", "Data sync", "Database migration"]
    },
    {
      category: "Languages & Development",
      items: ["Python", "Bash/Shell", "TypeScript/JavaScript", "Go", "PHP", "API Development"]
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "Database optimization", "Data migration"]
    },
    {
      category: "Leadership",
      items: ["Tech Lead", "SRE", "Root cause analysis", "Fast learning"]
    }
  ];

  // Certifications
  const certifications = [
    { name: "Google Cloud Certified – Associate Cloud Engineer" },
    { name: "ISO 27001 Security Foundation" },
    { name: "DevSecOps Essentials - Gabriel Pato Course" },
    { name: "Pentest & Ethical Hacking Fundamentals" },
    { name: "LGPD Compliance Training" },
    { name: "Advanced Cloud Infrastructure (GCP)" }
  ];

  // Skill Categories for the interactive skill section
  const skillCategories = [
    {
      category: "Cloud Infrastructure",
      skills: [
        { name: "GCP", level: 95 },
        { name: "AWS", level: 75 },
        { name: "Kubernetes", level: 85 },
        { name: "Terraform", level: 90 },
        { name: "Helm", level: 85 }
      ]
    },
    {
      category: "Automation",
      skills: [
        { name: "Python", level: 90 },
        { name: "Bash/Shell", level: 92 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "Monitoring", level: 88 },
        { name: "Data Sync", level: 90 }
      ]
    },
    {
      category: "Security",
      skills: [
        { name: "ISO 27001", level: 80 },
        { name: "LGPD", level: 85 },
        { name: "Penetration Testing", level: 75 },
        { name: "Vulnerability Detection", level: 82 },
        { name: "Security Automation", level: 88 }
      ]
    },
    {
      category: "Development",
      skills: [
        { name: "API Development", level: 88 },
        { name: "Go", level: 75 },
        { name: "TypeScript/JavaScript", level: 85 },
        { name: "PHP", level: 80 },
        { name: "Database Management", level: 92 }
      ]
    },
    {
      category: "Problem Solving",
      skills: [
        { name: "Root Cause Analysis", level: 98 },
        { name: "Quick Solution Design", level: 95 },
        { name: "System Debugging", level: 90 },
        { name: "Performance Optimization", level: 85 },
        { name: "Incident Response", level: 92 }
      ]
    }
  ];

  // Featured Projects
  const projects = [
    {
      title: "GCP Migration Express",
      description: "Migrated entire infrastructure from AWS to GCP in 24 hours, implementing App Engine and Cloud Functions architecture",
      technologies: ["GCP", "AWS", "App Engine", "Cloud Functions", "Python", "Bash"],
      link: "https://github.com/daniel-santos/gcp-migration-express"
    },
    {
      title: "InfraArch",
      description: "Redesigned and migrated GCP infrastructure from Brazil to US with improved architecture using VPNs and Kubernetes",
      technologies: ["Kubernetes", "Helm", "VPC", "Terraform", "Terragrunt", "GCP"],
      link: "https://github.com/daniel-santos/infraarch"
    },
    {
      title: "DB Splitter",
      description: "Application to migrate and recover a 20TB database by splitting into 5 scalable nodes with automatic syncing",
      technologies: ["Python", "MySQL", "MongoDB", "Docker", "Data Migration"],
      link: "https://github.com/daniel-santos/db-splitter"
    },
    {
      title: "SecureScore",
      description: "Security scorecard and automated vulnerability detection system with ISO 27001 and LGPD compliance checks",
      technologies: ["TypeScript", "Go", "Security", "ISO 27001", "LGPD"],
      link: "https://github.com/daniel-santos/securescore"
    },
    {
      title: "AutoMonitor",
      description: "Proactive monitoring system to detect anomalies, errors and security vulnerabilities with self-healing capabilities",
      technologies: ["Python", "Prometheus", "Grafana", "Machine Learning", "Bash"],
      link: "https://github.com/daniel-santos/automonitor"
    },
    {
      title: "PentestOrchestrator",
      description: "Tool to orchestrate, monitor and analyze results from third-party penetration tests across applications",
      technologies: ["Go", "Security", "Pentesting", "API Integration", "Reporting"],
      link: "https://github.com/daniel-santos/pentestorchestrator"
    }
  ];

  // Philosophy section
  const philosophyData = {
    quote: "Problems are puzzles waiting to be solved. The key is finding the root cause, not just treating symptoms.",
    philosophy: "🔍 I approach every challenge with a detective's mindset - investigating thoroughly before proposing sustainable solutions.",
    values: [
      {
        title: "Root Cause Analysis",
        description: "I dig deep to find the real source of problems instead of applying band-aid fixes."
      },
      {
        title: "Automation First",
        description: "If a task needs to be done more than once, it deserves to be automated for efficiency and consistency."
      },
      {
        title: "Proactive Security",
        description: "I believe in detecting and addressing vulnerabilities before they become incidents."
      },
      {
        title: "Continuous Learning",
        description: "Technology evolves constantly, and I make it a priority to evolve with it."
      },
      {
        title: "Resilient Systems",
        description: "I design infrastructure that can withstand failures and recover gracefully when they occur."
      },
      {
        title: "Versatile Problem Solving",
        description: "My adaptability allows me to propose effective solutions across different technical domains."
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
          calendlyLink="https://calendly.com/daniel-santos/30min"
        />
      </div>
    </div>
  );
};

export default Index;
