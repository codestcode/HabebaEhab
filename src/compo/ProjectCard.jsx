import React, { useState } from 'react';
import {motion} from "framer-motion"

const Project = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [showAll, setShowAll] = useState(false); // 

  const projects = {
    'Web Apps': [
      {
        id: 1,
        title: 'ScynfOcus-Smart Productivity Dashboard',
        description: 'Productivity hub designed to keep your study habits, expenses, mood, and health in perfect sync.',
        image: 'src/assets/syn.png',
        link: 'https://github.com/codestcode/sycnfocus',
   tool1: 'React.js',
                tool2: 'Tailwind css',
        tool3: 'AI-powered',      },
      {
        id: 2,
        title: 'MealMoment',
        description: 'React-based web app powered by AI that takes your ingredients and suggests delicious recipes! Whether you’re cooking with leftovers or planning a meal.',
        image: 'src/assets/Pink Black Gradient Motivational Desktop Wallpaper .png',
        link: 'https://codestcode.github.io/mealmoment/',
   tool1: 'React.js',
                tool2: 'AI-powered',
        tool3: 'Css',      },
      {
        id: 3,
        title: 'Portfolio',
        description: ' Designed a visually appealing and responsive portfolio card with animated transitions, leveraging Tailwind CSS for styling and Framer Motion for engaging UI effects.',
        image: 'src/assets/portooo.png',
        link: '#home',
   tool1: 'React.js',
                tool2: 'Tailwind Css',
        tool3: 'Framer Motion',      },
    ],
    'Future Websites': [
      {
        id: 4,
        title: 'Financial Management Dashboard ',
        description: 'A website application that provides a comprehensive overview of financial data, including income, expenses, and budget tracking.',
        image: 'src/assets/AetherHeba Financial Dashboard Overview.png',
        link: 'https://www.google.com/',
   tool1: 'React.js',
                tool2: 'Tailwind css',
        tool3: 'Node.js',      },
    ],
    'Certificatetions': [
      {
        id: 5,
        title: 'ICPC Participation',
        description: 'Particetd ICPC problem Solving With my team ,Gained problem solving trainings , strong Algorithms Background and Data strucutres',
        image: 'src/assets/icpc.jpg',
        link: 'https://www.google.com/',
        tool1: 'Problem Solving',
                tool2: 'Algorithms',
        tool3: 'Data Structures',

      },
      {
        id: 6,
        title: 'React Course',
        description: 'Completed a hands-on React course covering components, props, state, hooks, and real-world project building',
        image: 'src/assets/react.jpg',
        link: 'https://www.google.com/',
   tool1: 'React.JS',
                tool2: 'Hooks',
        tool3: 'props' ,   },
      {
        id: 7,
        title: 'Advanced React Course',
        description: 'Enhanced my React skills by learning advanced patterns, lazy loading, memoization, and efficient state management with Redux and Context API',
        image: 'src/assets/adv react.jpg',
        link: 'https://www.google.com/',
          tool1: 'patterns',
                tool2: 'Context API',
        tool3: 'React Router'
      },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowAll(false); 
  };


//* This function decides which projects to show based on the active tab and the "Show More" toggle
  //*If "All" tab is active, collect ALL project arrays and merge them into one using .flat()
  //*Otherwise, get only the projects for the selected tab (e"Web Apps")
  const getDisplayedProjects = () => {
    const allProjects =
      activeTab === 'All'
        ? Object.values(projects).flat() //*[project1, project2, project3, ...]
        : projects[activeTab] || [];  //*specific category or empty array if not found ( || [];)

    // Limit to 3 items unless "Show More" is active

     //*If we're on the "All" tab AND "Show More" has NOT been clicked:
  //* return only the first 3 projects using slice(0, 3)
  //*Otherwise:
  //*return the full list of projects 

    return activeTab === 'All' && !showAll
    
      ? allProjects.slice(0, 3) //*only first 3 projects
      : allProjects;  //*full list
  };

  return (
    <section
      id="projects"
      className="w-full min-h-[510px] flex items-center justify-center px-8 mt-16"
    >
      <div className="max-w-[1280px] w-full"
      
      >
        <h2 className=" font-SpaceGrotesk   text-center 
    text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] mb-16
    font-SpaceGrotesk animate-pulse">
          My Projects
        </h2>

        {/* Tab Nav */}
        <nav className="mx-auto p-4 flex justify-center items-center font-SpaceGrotesk bg-white/5 border border-white/10 rounded-full w-fit ">
          <div className="flex space-x-4 ">
            {['All', 'Web Apps', 'Future Websites', 'Certificatetions'].map(
              (tab) => (
                <button
                  key={tab}
                  className={`text-white px-4 py-2 rounded-full hover:cursor-pointer ${
                    activeTab === tab ? 'bg-purple-800' : ''
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </nav>

        {/* Project Cards */}
        <div className="p-4 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
            {getDisplayedProjects().map((project) => (
            <div
              key={project.id}
              className="w-[380px] h-auto 
bg-gradient-to-br from-[#0f172a] to-[#1a1a2e]
border border-cyan-300/20 
rounded-2xl 
shadow-[0_8px_30px_rgba(72,236,255,0.2)] 
hover:shadow-[0_12px_40px_rgba(72,236,255,0.4)] 
hover:scale-[1.04] transition duration-300 ease-in-out 
backdrop-blur-md text-white flex flex-col overflow-hidden gap-2"
            >
              {/* //* Project Image and link to github */}
              <a href={`${project.link}`} target="_blank" >
                <img
                  src={project.image}
                  className="w-full h-[250px] object-cover rounded-t-2xl"
                  alt={`${project.title} Preview`}
                />
              </a>
              <div className="p-2 mt-2 ">
                <h3 className="font-semibold font-SpaceGrotesk text-[25px] text-gray-300 text-center">
                  {project.title}
                </h3>

                <div className="mt-5 flex gap-2 m-5 text-center justify-center">
                  <span className="prospans ">{project.tool1}</span>
                  <span className="prospans2 ">{project.tool2}</span>
                  <span className="prospans3">{project.tool3}</span>
                </div>

                <p className="text-sm text-gray-300 p-4 font-SpaceGrotesk ">
                  {project.description}
                </p>
              </div>
            </div>
            ))}
          </div>

          {/* Show More / Show Less */}
          {activeTab === 'All' && (
            <div className="flex justify-center mt-6">
              <motion.button

                onClick={() => setShowAll(!showAll)}

initial={{ rotate: 0 }}
animate={{rotate:350 }}
                className=" cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10   before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[10px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 mt-5 font-SpaceGrotesk"
              >
                {showAll ? 'Show Less' : 'View all projects'}
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;

