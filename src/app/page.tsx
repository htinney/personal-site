"use client";
import React, { useCallback, useState, useEffect } from 'react';
import { Github, Linkedin, Palette, Twitter, LucideIcon } from 'lucide-react';

interface ColorOrbProps {
  color: string;
  animationClass: string;
  translate: string;
}

const ColorOrb: React.FC<ColorOrbProps> = ({ color, animationClass, translate }) => (
  <div
    className={`absolute w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] ${color} ${animationClass} mix-blend-screen ${translate}`}
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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-black">
      <div className="flex-grow-[2]"></div>
      <div className="relative flex-shrink-0 group">
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] mx-auto flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110 md:scale-120">
          <ColorOrb
            color="bg-[#FF0000]"
            animationClass="animate-[rotate_20s_linear_infinite,morph_10s_ease-in-out_infinite_alternate]"
            translate="-translate-x-[30px] -translate-y-[30px] md:-translate-x-[50px] md:-translate-y-[50px] lg:-translate-x-[75px] lg:-translate-y-[75px]"
          />
          <ColorOrb
            color="bg-[#00FF00]"
            animationClass="animate-[rotate_25s_linear_infinite_reverse,morph_15s_ease-in-out_infinite_alternate]"
            translate="translate-x-[30px] -translate-y-[30px] md:translate-x-[50px] md:-translate-y-[50px] lg:translate-x-[75px] lg:-translate-y-[75px]"
          />
          <ColorOrb
            color="bg-[#0000FF]"
            animationClass="animate-[rotate_22s_linear_infinite,morph_12s_ease-in-out_infinite_alternate]"
            translate="translate-y-[30px] md:translate-y-[50px] lg:translate-y-[75px]"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-black text-xl md:text-3xl lg:text-4xl font-bold mix-blend-difference mb-4 text-nowrap">
            Hunter Tinney
          </h1>
          <div className={`flex justify-center space-x-4 mt-4 transition-opacity duration-300 ease-in-out ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            <IconLink Icon={Linkedin} href="https://linkedin.com/in/huntertinney" label="Linkedin" />
            <IconLink Icon={Palette} href="https://palette.tools" label="Palette" />
            <IconLink Icon={Github} href="https://github.com/htinney" label="github" />
            <IconLink Icon={Twitter} href="https://x.com/hunter_in_irl" label="Twitter" />
          </div>
        </div>
      </div>
      <div className="flex-grow-[4]"></div>
    </main>
  );
};

export default Home;
