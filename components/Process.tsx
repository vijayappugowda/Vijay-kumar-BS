import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    num: "01",
    title: "Web Developer Intern",
    company: "S-VYASA Deemed-to-be University",
    period: "2026 – Present, Bengaluru",
    points: [
      "Worked as a Web Developer & UI/UX Designer Intern, building responsive, user-centric web interfaces.",
      "Developed a multi-language supported website, improving accessibility, usability, and user engagement across diverse audiences.",
      "Enhanced user experience through intuitive design, optimized navigation, and modern UI principles."
    ]
  },
  {
    num: "02",
    title: "Python Developer Intern",
    company: "Saiket Systems",
    period: "April 2024, Bengaluru",
    points: [
      "Developed and deployed Python-based backend applications, focusing on automation, data processing, and REST API integration.",
      "Implemented web scraping using BeautifulSoup to extract and process structured data efficiently.",
      "Built file-handling and text-processing pipelines for streamlined data analysis workflows.",
      "Integrated external APIs for real-time data retrieval (e.g., currency conversion) ensuring accurate outputs.",
      "Optimized and debugged code across multiple modules, improving performance, reliability, and maintainability."
    ]
  }
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="section-padding bg-[#e1e1e1] text-[#050505]">
      <div className="container">
        <div className="flex flex-col md:flex-row mb-24 justify-between items-end">
          <h2 className="text-[10vw] md:text-[8vw] leading-[0.8] tracking-tighter process-title">
            WORK<br/>EXPERIENCE
          </h2>
          <p className="max-w-md text-lg mt-8 md:mt-0 font-medium">
            Professional internships building real-world applications and digital experiences.
          </p>
        </div>

        <div className="border-t border-black">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="border-b border-black cursor-pointer group"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="py-8 md:py-12 flex justify-between items-center pr-4">
                <div className="flex items-baseline gap-8 md:gap-16">
                  <span className="font-mono text-sm md:text-base opacity-50">({exp.num})</span>
                  <div>
                    <h3 className="text-3xl md:text-6xl font-normal group-hover:translate-x-4 transition-transform duration-500 font-serif-italic">
                      {exp.title}
                    </h3>
                    <span className="text-sm md:text-base font-mono text-gray-500 mt-1 block">{exp.company} — {exp.period}</span>
                  </div>
                </div>
                <div className="relative w-6 h-6">
                  <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                    {openIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                  </div>
                </div>
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-700 ease-out-expo ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="pb-12 md:pl-[120px] max-w-3xl">
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-lg md:text-xl leading-relaxed font-light flex gap-3">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}