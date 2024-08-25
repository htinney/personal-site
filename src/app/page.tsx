"use client";

import React, { useState } from 'react';

const ColorOrb = ({ color, animationClass, translate, onMouseEnter, onMouseLeave }: { color: string, animationClass: string, translate: string, onMouseEnter: () => void, onMouseLeave: () => void }) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`absolute w-[350px] h-[350px] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] ${color} ${animationClass} mix-blend-screen ${translate}`}
  ></div>
);

const Home = () => {
  const [isHovered, setIsHovered] = useState({ orb1: false, orb2: false, orb3: false });

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24 bg-black overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center"
      >
        <div
          className={`relative w-[800px] h-[800px] flex items-center justify-center transition-transform duration-300 ease-in-out ${Object.values(isHovered).some(Boolean) ? 'scale-[120%]' : ''}`}
        >
          <ColorOrb
            onMouseEnter={() => setIsHovered(prev => ({ ...prev, orb1: true }))}
            onMouseLeave={() => setIsHovered(prev => ({ ...prev, orb1: false }))}
            color="bg-[#FF0000]"
            animationClass="animate-[rotate_20s_linear_infinite,morph_10s_ease-in-out_infinite_alternate]"
            translate="translate-x-[-75px] translate-y-[-75px]"
          />
          <ColorOrb
            onMouseEnter={() => setIsHovered(prev => ({ ...prev, orb2: true }))}
            onMouseLeave={() => setIsHovered(prev => ({ ...prev, orb2: false }))}
            color="bg-[#00FF00]"
            animationClass="animate-[rotate_25s_linear_infinite_reverse,morph_15s_ease-in-out_infinite_alternate]"
            translate="translate-x-[75px] translate-y-[-75px]"
          />
          <ColorOrb
            onMouseEnter={() => setIsHovered(prev => ({ ...prev, orb3: true }))}
            onMouseLeave={() => setIsHovered(prev => ({ ...prev, orb3: false }))}
            color="bg-[#0000FF]"
            animationClass="animate-[rotate_22s_linear_infinite,morph_12s_ease-in-out_infinite_alternate]"
            translate="translate-y-[75px]"
          />
        </div>
      </div>
      <div className="relative z-10 text-white text-4xl font-bold mix-blend-difference pointer-events-none">
        Hunter Tinney
      </div>
    </main>
  );
};

export default Home;
