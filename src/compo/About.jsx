import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'D:/habeba/habeba/new work of DOM/tailwindtrain/src/untils/motion.ts';
import Timeline from './TimeLine';

export default function About() {
  const journeyRef = useRef(null); // Create ref for the journey section
  const { initial, animate } = useScrollAnimation(journeyRef); // Use the animation hook

  return (
    <section
      id="about"
      className="w-full min-h-[510px] text-white flex items-center justify-center px-8"
    >
      <div className="max-w-[1280px] w-full">
        
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] mb-16
        font-SpaceGrotesk animate-pulse
        ">
          About Me
        </h2>

        {/* the about me */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[15px] md:gap-x-[66px] justify-center items-center  font-SpaceGrotesk  ">
          <motion.div
            ref={journeyRef} // Attach ref
            initial={initial} // Apply initial animation state
            animate={animate} // Apply animation controls
            className="box-border w-full md:w-[592px] h-auto md:h-[490px] p-8 rounded-2xl bg-gradient-to-br from-[#0f172a2c] via-[#421c5d2a] to-[#7e1fa01b]  border border-[#6b21a8] max-w-3xl mx-auto
            shadow-[0_0_20px_rgba(128,0,255,0.4)]
            text-slate-300 text-base leading-relaxed
            "
          >
            <h2 className="text-cyan-300 text-3xl font-bold mb-4
             animate-pulse
            ">My Journey</h2>
            <p className="about-prag">I'm a passionate React Front-end Developer and a current trainee at DEPI, always striving to turn ideas into interactive and responsive web experiences. With a strong focus on the MERN Stack, I enjoy building scalable and user-friendly applications from concept to deployment.</p>

            <p className="about-prag">I’m constantly exploring new technologies, improving my UI/UX sense, and contributing to both technical and soft-skill growth. My goal is to become a well-rounded developer capable of building impactful digital products that users love.</p> 
            <div className="mt-6 flex flex-wrap gap-4  ">    
              <span className="aboutspans1">Raact.Js Dev</span>
              <span className="aboutspans2 ">Front-end Dev</span>
              <span className="aboutspans3 ">AI Exploring</span>
              <span className="aboutspans3 ">Software Engneering </span>
              <span className="aboutspans5 ">Creaitve modern Web Designer</span>
            </div>
          </motion.div>

          <Timeline/>
        </div> 
        {/* end of About me */}
      </div>
    </section>
  );
}