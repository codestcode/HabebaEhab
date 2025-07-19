import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from 'D:/habeba/habeba/new work of DOM/tailwindtrain/src/untils/motion.ts';

function Cards(props) {
  const cardRef = useRef(null); // Create ref for the card
  const { initial, animate } = useScrollAnimation(cardRef); // Use the animation hook

  return (
    <motion.a
      ref={cardRef} // Attach ref
      initial={initial} // Apply initial animation state
      animate={animate} // Apply animation controls
      href="#"
      className="relative w-full max-w-[300px] h-[230px] transform hover:scale-105 transition duration-300 
                 bg-blue-300/10 backdrop-blur-md p-4 rounded-lg 
                 border border-cyan-400/20 shadow-[0_0_20px_rgba(255,255,255,0.2)] "
    >
      <div
        className={`absolute bottom-0 left-0 ${props.line} h-[4px] bg-gradient-to-r from-[#6a00ff] to-[#22d3ee] rounded-b-[90px]`}
      />

      <div className="p-2 flex flex-col justify-between h-full ">
        <div className="flex justify-between items-center">
          <img
            src={props.svg}
            style={{
              width: '40px',
              height: '40px'
            }}
            className="!w-[40px] !h-[40px]"
          />
          <div className="bg-[#6a00ff7b] rounded-full h-8 p-5 flex items-center text-white font-semibold text-lg font-SpaceGrotesk">
            {props.pers}
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="text-[26px] font-bold  font-SpaceGrotesk absolute bottom-29">{props.numberoftotal}</div>
          <div className="mt-1 text-base text-gray-600 font-SpaceGrotesk">{props.nameofitem}</div>
        </div>
      </div>
    </motion.a>
  );
}

export default Cards;