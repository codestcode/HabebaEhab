// Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="absolute w-full h-64px py-4 px-8 bg-[#0a192924] text-white top-3 left-0 z-50 ml-9 ">
      <div className="max-w-6xl flex justify-between ">
        {/* logo / name */}
        <span className="pr-6 text-[27px] text-purple-400 w-[189px] h-[36px] font-TechMono font-semibold">
          Habeba <span className='text-[#00FFFF]'>Ehab</span> 
        
        </span>

        {/* the links */}
<ul className="flex gap-20 text-sm font-thin mr-4 pr-[70px] translate-x-60 ">
          <li><a href="#home" className="hover:text-purple-400 font-SpaceGrotesk text-[18px]">Home</a></li>
          <li><a href="#about" className="hover:text-purple-400 font-SpaceGrotesk text-[18px]">About</a></li>
          <li><a href="#skills" className="hover:text-purple-400 font-SpaceGrotesk text-[18px]">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-400 font-SpaceGrotesk text-[18px]">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-400 font-SpaceGrotesk text-[18px]">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

