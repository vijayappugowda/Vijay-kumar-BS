import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Infinite Horizontal Scroll
    const ctx = gsap.context(() => {
      gsap.to(".marquee-inner", {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "linear",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const items = [
    { text: "Software Engineer", stroke: false },
    { text: "UI/UX Designer", stroke: true },
    { text: "Data Analyst", stroke: false },
    { text: "ML Engineer", stroke: true },
    { text: "Prompt Engineer", stroke: false },
    { text: "Web Developer", stroke: true },
  ];

  return (
    <div ref={marqueeRef} className="py-10 md:py-16 overflow-hidden bg-[#f4f4f4] text-[#111] border-y border-gray-300">
      <div className="marquee-inner flex whitespace-nowrap w-fit">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-4">
            {items.map((item, j) => (
              <React.Fragment key={j}>
                <span className={`text-[6vw] md:text-[5vw] font-heading font-bold uppercase leading-none ${item.stroke ? 'text-transparent stroke-text hover:text-[#111] transition-colors duration-500 cursor-default' : ''}`}>
                  {item.text}
                </span>
                <span className="w-3 h-3 rounded-full bg-[#111] flex-shrink-0"></span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}