import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { id: 1, title: 'Frontend', tools: 'HTML, CSS, JavaScript, NextJS, ReactJS' },
  { id: 2, title: 'Backend', tools: 'SQL, PostgreSQL, MongoDB, NodeJS, FastAPI' },
  { id: 3, title: 'Programming', tools: 'Python, Java, R Programming, C, C++' },
  { id: 4, title: 'AI / ML & Data', tools: 'Machine Learning, Data Science, BeautifulSoup, Matplotlib' },
  { id: 5, title: 'Data & Analytics', tools: 'Excel, Power BI' },
  { id: 6, title: 'Design & Tools', tools: 'Figma, Relume, Visily, Miro, GitHub' },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = listRef.current?.children;
      if (items) {
        Array.from(items).forEach((item) => {
          gsap.fromTo(item as HTMLElement, 
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              scrollTrigger: {
                trigger: item as HTMLElement,
                start: "top 95%",
              }
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-padding bg-[#111] text-[#f4f4f4] relative z-10 overflow-hidden">

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <h2 className="text-6xl md:text-8xl font-bold mb-8 md:mb-0">My<br />Skills</h2>
          <p className="max-w-xs text-sm uppercase tracking-wide text-gray-400 pt-4">
            A versatile technical toolkit spanning web development, AI/ML, and design.
          </p>
        </div>

        <ul ref={listRef} className="border-t border-gray-700">
          {skills.map((skill) => (
            <li 
              key={skill.id} 
              className="group border-b border-gray-700 relative overflow-hidden"
            >
              <div className="relative z-10 flex justify-between items-center py-8 md:py-10 px-4 group-hover:px-8 transition-all duration-500">
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors">0{skill.id}</span>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold group-hover:text-white transition-colors group-hover:translate-x-2 duration-500">{skill.title}</h3>
                    <p className="text-sm md:text-base font-mono text-gray-500 mt-2 group-hover:text-gray-300 transition-colors">{skill.tools}</p>
                  </div>
                </div>
              </div>

              {/* Hover background fill */}
              <div className="absolute inset-0 bg-white/5 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}