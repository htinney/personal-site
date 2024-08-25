import React from 'react';

const ColorOrb = ({ color, animationClass, translate }: { color: string, animationClass: string, translate: string }) => (
  <div
    className={`absolute w-[350px] h-[350px] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] ${color} ${animationClass} mix-blend-screen ${translate}`}
  ></div>
);

const Home = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24 bg-black overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[800px] h-[800px] flex items-center justify-center">
          <ColorOrb
            color="bg-red-500 opacity-75"
            animationClass="animate-[rotate_20s_linear_infinite,morph_10s_ease-in-out_infinite_alternate]"
            translate="translate-x-[-75px] translate-y-[-75px]"
          />
          <ColorOrb
            color="bg-blue-500 opacity-75"
            animationClass="animate-[rotate_25s_linear_infinite_reverse,morph_15s_ease-in-out_infinite_alternate]"
            translate="translate-x-[75px] translate-y-[-75px]"
          />
          <ColorOrb
            color="bg-yellow-400 opacity-75"
            animationClass="animate-[rotate_22s_linear_infinite,morph_12s_ease-in-out_infinite_alternate]"
            translate="translate-y-[75px]"
          />
        </div>
      </div>
      <div className="relative z-10 text-black text-4xl font-bold">
        Hunter Tinney
      </div>
    </main>
  );
};

export default Home;
