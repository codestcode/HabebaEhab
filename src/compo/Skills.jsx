import Cards from "./Cards";

export default function Skills() {
  return (
    <section
  id="about"
  className="w-full min-h-[510px] text-white flex items-center justify-center px-8"
>
  <div className="max-w-[1280px] w-full">
    
    {/* Heading */}
    <h2 className="  font-SpaceGrotesk   text-center 
    text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] mb-16
    font-SpaceGrotesk animate-pulse
    ">
      Skills
    </h2>
<div className="grid gap-4 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
{/* 
      
        <div className="bg-black p-3 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
          <p>Proficient in ES6+ features, asynchronous programming, and DOM manipulation.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">React</h3>
          <p>Experienced in building dynamic user interfaces with React, including hooks and context API.</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-teal-500 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Node.js</h3>
          <p>Skilled in building RESTful APIs and server-side applications using Node.js and Express.</p>
        </div>
      </div> */}

       <Cards
                      width="w-full" 
                     svg="src/assets/react.svg"
                      pers="93 %"
                                          numberoftotal="React"
                    line=" w-[98%]"
                      nameofitem="Advanced state management, custom hooks, and performance optimization."
                    />
                    <Cards
                      width="w-full" 
                                          svg="src/assets/js.svg"
line=" w-[60%]"
                      pers="80 %"
                      numberoftotal="Node.Js"
                      nameofitem="RESTful APIs, GraphQL, and serverless architecture."
                    />
                    <Cards
                      width="w-full" 
                                           svg="src/assets/javas.svg"
line=" w-[90%]"
                      pers="93 %"
                      numberoftotal="JavaScript"
                      nameofitem="ES6+, TypeScript, functional programming patterns."
                    />
                    <Cards
                      width="w-full" 
                                           svg="src/assets/css3-plain.svg"
line=" w-[70%]"
                      pers="93 %"
                      numberoftotal="CSS 3"
                      nameofitem="Responsive layouts, animations, and clean design powered by advanced CSS technique."
                    />
                       <Cards
                      width="w-full" 
                                           svg="src/assets/figma.svg"
line=" w-[90%]"
                      pers="85 %"
                      numberoftotal="Figma"
                      nameofitem="Figma, Adobe XD, user journey mapping, and prototyping."
                    />
                       <Cards
                      width="w-full" 
                                           svg="src/assets/icons8-tailwind-css.svg"
line=" w-[70%]"
                      pers="90 %"
                      numberoftotal="Tailwind Css"
                      nameofitem="Skilled in crafting responsive, accessible designs with Tailwind’s utility-first system"
                    />
                       <Cards
                      width="w-full" 
                                           svg="src/assets/git-plain.svg"
line=" w-[80%]"
                      pers="88 %"
                      numberoftotal="GIT / GIThub"
                      nameofitem="Version control, branching strategies and pull requests"
                    />
                     <Cards
                      width="w-full" 
                                           svg="src/assets/cplusplus-plain.svg"
line=" w-[80%]"
                      pers="90 %"
                      numberoftotal="C++"
                      nameofitem="Object-oriented, efficient, and fast. C++ algorithms and system-level development."
                    />
                  </div>
      </div>
    </section>
  );
}