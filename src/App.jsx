import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import AsciiBackground from './AsciiBackground';

const reasons = [
  {
    art: ' ..---..\n  /        \\ \n |         |\n :         ;\n  \\  \\~/  /\n   `, Y , \n  |_|_|\n  |===|\n  |===|\n   \\_/',
    text: 'You light up every room you walk into.\nIt feels warmer when you’re around.'
  },
  {
    art: '  (\\_/)\n ( •_•)\n / >🌹\nYou deserve all the flowers in the world',
    text: 'You’re effortlessly graceful and kind.\nEven on tough days, your presence is calming.'
  },
  {
    art: '  |\\---/|\n  | o_o |\n   \\_^_/\nCute kitty says hi!',
    text: 'Your laugh makes my day.\nIt’s the kind of joy that stays with me.'
  },
  {
    art: '     @@@   @@@\n   @@@@@@@@@@@@@\n  @@@@@@@@@@@@@@@\n   @@@@@@@@@@@@@\n     @@@@@@@@@\n       @@@@@\n         @',
    text: 'You make my heart race in the best way.\nYou’ve become my favorite part of every day.'
  },
  {
    art: '    .-\"\"\"-.\n   / .===. \\ \n   \\ 6 6 / /\n   ( \"_\" )\n  .-`--- -.\n /         \\',
    text: 'Your eyes hold galaxies of kindness.\nI lose track of time when I look into them.'
  },
  {
    art: '  ____\n / ___|___  _ __ ___\n| |   / _ \\|  __/ _ \\ \n| |__| (_) | | |  __/\n \\____\\___/|_|  \\___|',
    text: 'You inspire me to be better.\nYour determination is truly admirable.'
  },
  {
    art: '    (\"\"\"\")\n   ( o   o )\n   (  =^=  )\n   (        )\n   (         )\n   (          ))))))))',
    text: 'You’re cuter than any cat GIF.\nSeriously, you have no idea.'
  },
  {
    art: '     .-\"\"\"-.\n    / .===. \\ \n    \\  o o  /\n    (   _\"_ )\n    \\ \\___/ /\n     `----- ',
    text: 'Your calm voice is my safe place.\nI could listen to you for hours.'
  },
  {
    art: '   _____\n  /     \\ \n | () () |\n  \\  ^  /\n   |||||\n   |||||',
    text: 'You’re strong and resilient.\nEven storms seem to pass when you smile.'
  }
];

const AsciiCard = ({ art, text }) => (
  <motion.div
    className="bg-gray-900 text-green-300 p-4 rounded-2xl shadow-xl font-mono mb-6 w-full max-w-md text-center mx-auto"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.pre
      className="text-sm sm:text-base leading-tight whitespace-pre-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Typewriter
        words={[art]}
        cursor
        cursorStyle="_"
        typeSpeed={10}
        delaySpeed={1000}
      />
    </motion.pre>
    <motion.p
      className="mt-4 text-white text-sm sm:text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <Typewriter
        words={[text]}
        cursor
        cursorStyle="_"
        typeSpeed={25}
        delaySpeed={1000}
      />
    </motion.p>
  </motion.div>
);

export default function App() {
  const [visible, setVisible] = useState(1);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10 relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <AsciiBackground />
      </div>
      <div className="w-full max-w-2xl flex flex-col items-center justify-center mx-auto text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-400 mb-8">Reasons Why You're Amazing</h1>
        <div className="w-full flex flex-col items-center">
          {reasons.slice(0, visible).map((r, idx) => (
            <AsciiCard key={idx} art={r.art} text={r.text} />
          ))}
          {visible < reasons.length && (
            <button
              onClick={() => setVisible(visible + 1)}
              className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-500 transition-all"
            >
              Show Me Another Reason 💖
            </button>
          )}
          {visible === reasons.length && (
            <p className="mt-6 text-green-400">That's not all, but it's a good start 😊</p>
          )}
        </div>
      </div>
    </div>
  );
}
