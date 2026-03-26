import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "S-VYASA Deemed-to-be University",
    year: "2024 – Present",
    location: "Bengaluru",
    score: "Pursuing",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Bengaluru Institute of Management Studies",
    year: "2021 – 2024",
    location: "Bengaluru",
    score: "73.11%",
  },
  {
    degree: "Pre-University (PUC)",
    institution: "Government PU College",
    year: "2019 – 2021",
    location: "Bengaluru",
    score: "71%",
  },
  {
    degree: "SSLC (10th)",
    institution: "Government High School",
    year: "2018 – 2019",
    location: "Bengaluru",
    score: "73.92%",
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-card", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="section-padding bg-[#050505] text-[#e1e1e1]">
      <div className="container">
        <div className="mb-24 text-center">
          <span className="text-xs font-mono uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full">Academic Journey</span>
          <h2 className="mt-8 text-5xl md:text-7xl">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <div key={i} className="team-card group cursor-pointer border border-white/10 rounded-2xl p-8 md:p-10 hover:border-white/30 transition-colors duration-500 relative overflow-hidden">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/20 via-white/40 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500">{edu.year}</span>
                <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 border border-white/20 rounded-full text-gray-400">
                  {edu.score}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-serif-italic mb-3 group-hover:translate-x-2 transition-transform duration-500">
                {edu.degree}
              </h3>
              <p className="text-gray-400 text-lg mb-2">{edu.institution}</p>
              <p className="text-gray-600 text-sm font-mono uppercase tracking-widest">{edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}