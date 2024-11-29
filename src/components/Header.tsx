import React from 'react';
import { Heart } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export function Header() {
  return (
    <header className="w-full py-8 text-center bg-gradient-to-b from-antiflash-white to-transparent">
      <div className="flex items-center justify-center gap-2 text-onyx">
        <Heart className="w-6 h-6 animate-pulse" />
        <h1 className="font-serif text-4xl md:text-5xl">Tatis & Chávez</h1>
        <Heart className="w-6 h-6 animate-pulse" />
      </div>
      <p className="mt-4 font-light text-dim-gray">Te invitamos a celebrar nuestra boda</p>
      <CountdownTimer />
    </header>
  );
}