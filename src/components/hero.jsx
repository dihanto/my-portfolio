import React, { useEffect, useState } from 'react';
import hero from '../public/img/hero.png';

export default function Hero() {
  const [toRotate] = useState(["Web Developer", "Full-stack Developer", "Tech Enthusiast"]);
  const [txt, setTxt] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(200);
  const period = 1300;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length; 
      let fullTxt = toRotate[i];

      setTxt((prevTxt) => {
        return isDeleting
          ? fullTxt.substring(0, prevTxt.length - 1)
          : fullTxt.substring(0, prevTxt.length + 1);
      });

      if (isDeleting) {
        setTypingSpeed(100); 
      } else {
        setTypingSpeed(200); 
      }

      if (!isDeleting && txt === fullTxt) {
        setTimeout(() => setIsDeleting(true), period); 
      }

      if (isDeleting && txt === '') {
        setIsDeleting(false); 
        setLoopNum(loopNum + 1); 
      }
    };

    const interval = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [txt, isDeleting, loopNum, toRotate, typingSpeed]);

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <main className="flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[100vh] backdrop-blur-md bg-slate-100 dark:bg-[#121212]">
        <div className="space-y-2 text-center md:text-left px-10">
          <p className="text-skay-800 dark:text-sky-200 fade-in-from-left">Hello World, I'm</p>
          <h1 className="text-4xl font-bold md:text-5xl text:slate-800 dark:text-white fadein-up">
            Dihanto
          </h1>
          <div className="py-2">
            <h1
              className="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-sky-500 dark:from-slate-100 dark:to-sky-500 md:text-2xl fadein-up"
            >
              <span className="wrap">{txt}</span>
            </h1>
          </div>
          <p className="text-slate-800 dark:text-white pr-4 fade-in-from-left">
            Welcome to My personal website. <span className="wave">👋🏼</span>
          </p>
          <br />
        </div>
        <div className="flex justify-center md:justify-start fadein-right">
          <img
            alt="avatar"
            fetchpriority="high"
            width="300"
            height="300"
            decoding="async"
            data-nimg="1"
            className="w-10/12 md:h-auto rounded-full border-4 border-sky-400 pict"
            src={hero}
          />
        </div>
      </main>
    </div>
  );
}
