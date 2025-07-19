import { motion } from "framer-motion";
import { slideInFromLeft , slideInFromTop , slideInFromRight } from "D:/habeba/habeba/new work of DOM/tailwindtrain/src/untils/motion.ts";

export default function Hero() {
  return (
    <div
      className="max-w-[1280px] w-full flex flex-col md:flex-row items-center justify-between gap-16 mt-[140px]"
    >
      {/* Left content */}
      <motion.div
        className="flex flex-col gap-8"
        variants={slideInFromLeft(0.6)}
        initial="hidden"
        animate="visible"
      >
        <h1 className="font-SpaceGrotesk font-bold text-xl md:text-5xl leading-tight">
          I'm <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] mb-16
    font-SpaceGrotesk animate-pulse">Habeba</span> ,<br />Crafting Tomorrow’s Web Today.
        </h1>

        <p className="font-SpaceGrotesk text-gray-300 text-2xl max-w-2xl leading-[34px]">
          Frontend developer specialized in creating immersive digital experiences with cutting-edge technologies.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-6">
          <a
            href="#projects"
            className="px-8 py-4 text-xl text-cyan-300 rounded hover:bg-cyan-300  flex items-center  hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all duration-300 hover:text-black"
          >
            Explore Projects
            <img
              src="src/assets/Frame.svg"
              alt="arrow"
              className="w-[20px] h-[20px] inline-block ml-3"
            />
          </a>

          <a
            href="public/Habeba Cv 2.pdf"
            download
            className="px-8 py-4 text-xl border border-fuchsia-500 text-fuchsia-500 rounded hover:bg-fuchsia-500 hover:text-[#0a1929] transition inline-flex items-center shadow-[0_0_25px_rgba(255,0,255,0.6)]"
          >
            Download Resume
            <img
              src="src/assets/download.svg"
              alt="download sign"
              className="w-[20px] h-[20px] ml-3"
            />
          </a>
        </div>
      </motion.div>

      {/* Line */}
      <div>
        <img src="src/assets/Line 1.svg" alt="line" className="w-[1.6px]" />
      </div>

      {/* Right avatar */}
      <motion.div
      
       variants={slideInFromRight(0.6)}
        initial="hidden"
        animate="visible"
      >
        
        <img
        
          src="src/assets/undraw_developer-activity_4zqd.svg"
          alt="avatar"
          className="w-[260px] md:w-[600px] object-contain 
"
        />
      </motion.div>
    </div>
  );
}
