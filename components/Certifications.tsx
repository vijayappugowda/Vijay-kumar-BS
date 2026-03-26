import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "Python Developer Internship",
    issuer: "Saiket Systems",
    year: "2024",
    skills: ["Python", "REST APIs", "BeautifulSoup", "Data Processing", "Automation"],
  },
  {
    title: "Excel & Power BI",
    issuer: "Professional Course",
    year: "2020 – 2021",
    skills: ["Excel Advanced", "Power BI", "Data Visualization", "Dashboard Design"],
  },
  {
    title: "Java & C++ Programming",
    issuer: "Professional Course",
    year: "2020 – 2021",
    skills: ["Java", "C++", "OOP", "Data Structures"],
  },
  {
    title: "Software Testing",
    issuer: "Professional Course",
    year: "2020 – 2021",
    skills: ["Manual Testing", "Test Cases", "Bug Tracking", "QA"],
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cert-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%"
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Make cards visible immediately
    const cards = document.querySelectorAll(".cert-card");
    cards.forEach(card => {
      (card as HTMLElement).style.opacity = "1";
    });
  }, []);

  return (
    <section ref={sectionRef} id="certifications" style={{ backgroundColor: '#0a0a0a', color: '#e1e1e1', padding: '12vh 0' }} className="section-padding">
      <div className="container">
        <div className="mb-16 md:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full">Certifications & Courses</span>
          <h2 className="mt-8 text-5xl md:text-7xl font-bold">Credentials</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
          {certifications.map((cert, i) => (
            <div key={i} className="cert-card group border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/25 transition-all duration-500 relative overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.1)' }}>
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex justify-between items-start mb-5">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:translate-x-1 transition-transform duration-300">{cert.title}</h3>
                  <p className="text-sm text-gray-500 font-mono">{cert.issuer}</p>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 border border-white/15 rounded-full text-gray-400 whitespace-nowrap ml-4">
                  {cert.year}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, j) => (
                  <span key={j} className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 bg-white/5 rounded-full text-gray-400 group-hover:text-gray-300 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
