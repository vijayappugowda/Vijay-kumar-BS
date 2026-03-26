import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  cat: string;
  year: string;
  desc: string;
  img: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cybersecurity Dashboard",
    cat: "Python • Security",
    year: "2025",
    desc: "Python-based dashboard integrating OWASP ZAP API for real-time XSS & SQL Injection detection with interactive data visualization.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "University Website",
    cat: "Full Stack • Next.js",
    year: "2026",
    desc: "Full-stack university platform built with Next.js, Node.js, and PostgreSQL featuring RESTful APIs, authentication, and modern UI/UX.",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Employee Attrition ML",
    cat: "Machine Learning",
    year: "2024",
    desc: "ML prediction model using Logistic Regression & Random Forest with MySQL, featuring an interactive analytics dashboard.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Jarvis Voice Assistant",
    cat: "Python • AI",
    year: "2024",
    desc: "Python-based voice assistant with speech recognition, API integrations, and an interactive GUI for hands-free task automation.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group cursor-pointer">
      <div className="work-card-inner relative overflow-hidden aspect-[16/10] rounded-lg mb-4">
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500"></div>
        {/* Description overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5">
          <p className="text-sm text-gray-200 leading-relaxed font-light">
            {project.desc}
          </p>
        </div>
        {/* Year badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[10px] font-mono uppercase tracking-wider">
          {project.year}
        </div>
      </div>
      <div className="flex justify-between items-end border-b border-white/15 pb-3">
        <div>
          <h3 className="text-xl md:text-2xl font-heading font-bold mb-1">{project.title}</h3>
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{project.cat}</span>
        </div>
      </div>
    </div>
  );
};

export default function WorkGallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card reveals
      gsap.utils.toArray('.work-card-inner').forEach((card: any) => {
        gsap.fromTo(card, 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 60%",
              scrub: 1
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative bg-[#050505] text-white py-16 md:py-20 overflow-hidden">
      <div className="container">
        <div className="mb-12 md:mb-16 flex flex-col items-center text-center">
           <h2 className="text-[10vw] md:text-[8vw] leading-[0.85] font-heading font-black mix-blend-exclusion z-10">
             SELECTED
           </h2>
           <h2 className="text-[10vw] md:text-[8vw] leading-[0.85] font-heading font-black text-transparent stroke-text z-10 -mt-2 md:-mt-6">
             PROJECTS
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}