import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import useSound from 'use-sound';

interface OpeningPageProps {
  onOpen: () => void;
}

export function OpeningPage({ onOpen }: OpeningPageProps) {
  const [playSound] = useSound('url("song.mp3")');

  const handleOpen = () => {
    playSound();
    onOpen();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-cover bg-center bg-no-repeat flex items-center justify-center z-50"
      style={{
        backgroundImage: 'url("img/hero.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-eerie-black/40 backdrop-blur-sm" />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-center p-8 bg-antiflash-white/90 backdrop-blur-md rounded-lg shadow-2xl max-w-lg mx-4"
      >
        <Heart className="w-12 h-12 mx-auto mb-6 text-onyx animate-pulse" />
        <h1 className="font-script text-5xl mb-6 text-jet">
          Tatis & Chávez
        </h1>
        <p className="font-serif text-xl mb-8 text-dim-gray">
          Nos complace invitarte a celebrar nuestra boda
        </p>
        <button
          onClick={handleOpen}
          className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-antiflash-white bg-onyx rounded-full overflow-hidden transition-all duration-300 ease-out hover:bg-jet focus:outline-none focus:ring-2 focus:ring-dim-gray focus:ring-offset-2"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-elegant opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
          <span className="relative">
            Abrir Invitación
          </span>
        </button>
        <p className="mt-4 text-sm text-dim-gray">
          * No Niños
        </p>
      </motion.div>
    </motion.div>
  );
}