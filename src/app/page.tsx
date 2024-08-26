"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Palette, Twitter, LucideIcon } from 'lucide-react';

interface ColorOrbProps {
  color: string;
  animationClass: string;
}

const ColorOrb: React.FC<ColorOrbProps> = ({ color, animationClass }) => (
  <div
    className={`absolute inset-0 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] ${color} ${animationClass} mix-blend-screen`}
  ></div>
);

interface IconLinkProps {
  Icon: LucideIcon;
  href: string;
  label: string;
}

const IconLink: React.FC<IconLinkProps> = ({ Icon, href, label }) => (
  <a
    href={href}
    aria-label={label}
    className="text-black mix-blend-difference transition-transform hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={30} />
  </a>
);

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="relative flex min-h-screen bg-black overflow-hidden">
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`absolute inset-0 transition-transform duration-300 ease-in-out ${isHovered ? 'scale-110' : ''}`}>
          <ColorOrb
            color="bg-[#FF0000]"
            animationClass="animate-[rotate_20s_linear_infinite,morph_10s_ease-in-out_infinite_alternate]"
          />
          <ColorOrb
            color="bg-[#00FF00]"
            animationClass="animate-[rotate_25s_linear_infinite_reverse,morph_15s_ease-in-out_infinite_alternate]"
          />
          <ColorOrb
            color="bg-[#0000FF]"
            animationClass="animate-[rotate_22s_linear_infinite,morph_12s_ease-in-out_infinite_alternate]"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-black text-xl md:text-3xl lg:text-4xl font-bold mix-blend-difference mb-4 whitespace-nowrap">
            Hunter Tinney
          </h1>
          <div className={`flex justify-center space-x-4 mt-4 transition-opacity duration-300 ease-in-out ${isMobile || isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <IconLink Icon={Linkedin} href="https://linkedin.com/in/huntertinney" label="Linkedin" />
            <IconLink Icon={Palette} href="https://palette.tools" label="Palette" />
            <IconLink Icon={Github} href="https://github.com/htinney" label="github" />
            <IconLink Icon={Twitter} href="https://x.com/hunter_in_irl" label="Twitter" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
