export default function Timeline() {
  return (
    <section id="roadmap" className="relative px-4 py-12">
      <div className="max-w-5xl mx-auto relative">
        {/* line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-cyan-400/30 shadow-[0_0_12px_2px_rgba(0,255,255,0.2)] z-0 rounded-full"></div>

        {/* Timeline cards */}
        <div className="flex flex-col gap-12 relative z-10">

          {/* Card 1*/}
          <div className="relative flex items-start gap-4">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 z-20"></div>
            <div className="relative w-[250px] max-w-sm mx-auto translate-x-[-60%] translate-y-[-40%]">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 absolute -top-4 -left-4 px-3 py-1 text-sm rounded-full text-white shadow-md">
                2023
              </span>
              <div className="mt-3 bg-black/30 backdrop-blur-md border border-cyan-500/20 rounded-xl p-6 shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                <p className="text-slate-300 text-[20px] leading-relaxed">
                  Computer Science Student
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex items-start gap-4">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 z-20"></div>
            <div className="relative w-[250px] max-w-sm mx-auto translate-x-[60%] translate-y-[-40%]">
              <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 absolute -top-4 -left-4 px-3 py-1 text-sm rounded-full text-white shadow-md">
                2022
              </span>
              <div className="mt-3 bg-black/30 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 shadow-[0_0_15px_rgba(192,132,252,0.2)]">
                <p className="text-slate-300 text-[20px] leading-relaxed">
                  Competitive Programmer
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex items-start gap-4">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 z-20"></div>
            <div className="relative w-[250px] max-w-sm mx-auto translate-x-[-60%] translate-y-[-40%]">
              <span className="bg-gradient-to-r from-pink-500 to-red-400 absolute -top-4 -left-4 px-3 py-1 text-sm rounded-full text-white shadow-md">
                2021
              </span>
              <div className="mt-3 bg-black/30 backdrop-blur-md border border-pink-500/20 rounded-xl p-6 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                <p className="text-slate-300 text-[20px] leading-relaxed">
                  ICPC HIMIT Technical Member
                </p>
              </div>
            </div>
          </div>

          {/* Card 4  */}
          <div className="relative flex items-start gap-4">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 z-20"></div>
            <div className="relative w-[250px] max-w-sm mx-auto translate-x-[60%] translate-y-[-40%]">
              <span className="bg-gradient-to-r from-indigo-500 to-blue-400 absolute -top-4 -left-4 px-3 py-1 text-sm rounded-full text-white shadow-md">
                2020
              </span>
              <div className="mt-3 bg-black/30 backdrop-blur-md border border-indigo-500/20 rounded-xl p-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <p className="text-slate-300 text-[20px] leading-relaxed">
                  MERN-Stack Developer
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
