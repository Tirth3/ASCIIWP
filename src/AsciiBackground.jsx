import { Typewriter } from 'react-simple-typewriter';
import asciiImage from './assets/img.txt?raw';

export default function AsciiBackground() {
  return (
    <pre className="absolute w-full flex justify-center text-center inset-0 z-0 text-green-900 text-[8px] sm:text-xs leading-[8px] sm:leading-[10px] whitespace-pre-wrap overflow-hidden px-4 pointer-events-none font-mono">
      <Typewriter
        words={[asciiImage]}
        typeSpeed={0}
        cursor={true}
        cursorStyle="█"
        loop={true}
      />
    </pre>
  );
}
