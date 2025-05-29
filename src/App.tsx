import { useState } from "react";

type MissionKey = "MISSION_001" | "MISSION_002" | "MISSION_003";

export default function App() {
  const [activeMission, setActiveMission] = useState<MissionKey>("MISSION_001");

  const missions = {
    MISSION_001: {
      title: "SaaS Go-to-Market",
      summary:
        "Built a GTM engine for a B2B SaaS startup that scaled to $2M ARR in 9 months.",
      outcome: "🚀 Launched product-market fit strategy | 📈 Secured Series A",
    },
    MISSION_002: {
      title: "Enterprise Brand Revamp",
      summary:
        "Restructured brand architecture and messaging for a legacy tech firm entering the cloud era.",
      outcome: "🎯 Positioned as market disruptor | 💼 Won Fortune 500 clients",
    },
    MISSION_003: {
      title: "Investor-Ready Positioning",
      summary:
        "Transformed early-stage healthtech into investor darling with scalable positioning.",
      outcome: "💼 Raised $8M Seed round | 🧠 Became category leader",
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleGetBriefed = () => {
    // In a real implementation, this would open a contact form or redirect to scheduling
    alert('Contact form would open here. In production, integrate with your preferred scheduling/contact solution.');
  };

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400%] h-[400%] bg-blue-500 opacity-5 blur-3xl animate-pulse-slow"></div>
        <div className="z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none font-monument">
            We don't consult. <br />
            We command growth.
          </h1>
          <button 
            className="mt-10 px-8 py-4 bg-blue-500 hover:bg-blue-400 text-black font-bold rounded-md transition-transform transform hover:scale-105 shadow-lg glow-blue"
            onClick={() => scrollToSection('contact')}
          >
            Start the Mission
          </button>
        </div>
      </section>

      {/* Mission Protocol */}
      <section id="protocol" className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 border-l-4 pl-4 border-blue-500">
            Mission Protocol
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "Intel Audit",
              "Strategy Architecture",
              "Execution & Launch",
              "Scale & Optimize",
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-black font-bold text-xl absolute -left-6 -top-2">
                  {index + 1}
                </div>
                <div className="p-6 border-l-2 border-gray-700 pl-12">
                  <h3 className="text-xl font-bold">{step}</h3>
                  <p className="text-gray-400 mt-2">
                    Tactical phase ensuring precision before launch.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">CMO-as-a-Service</h2>
          <p className="text-xl text-gray-300 mb-6">
            Fractional leadership. Full strategic ownership.
          </p>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start space-x-3">
              <span className="inline-block w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></span>
              <span>On-demand CMO expertise without full-time cost.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="inline-block w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></span>
              <span>Operational mindset — we execute what we design.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="inline-block w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></span>
              <span>Plug into your team. Drive results like internal leadership.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Missions */}
      <section id="missions" className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 border-l-4 pl-4 border-blue-500">
            Missions We've Run
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              onClick={() => setActiveMission("MISSION_001")}
              className={`cursor-pointer p-6 rounded-lg border ${
                activeMission === "MISSION_001"
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-800 hover:border-blue-500"
              } transition-all`}
            >
              <h3 className="text-lg font-bold text-blue-500">MISSION_001</h3>
              <p className="text-white mt-1">SaaS Go-to-Market</p>
            </div>
            <div
              onClick={() => setActiveMission("MISSION_002")}
              className={`cursor-pointer p-6 rounded-lg border ${
                activeMission === "MISSION_002"
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-800 hover:border-blue-500"
              } transition-all`}
            >
              <h3 className="text-lg font-bold text-blue-500">MISSION_002</h3>
              <p className="text-white mt-1">Enterprise Brand Revamp</p>
            </div>
            <div
              onClick={() => setActiveMission("MISSION_003")}
              className={`cursor-pointer p-6 rounded-lg border ${
                activeMission === "MISSION_003"
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-800 hover:border-blue-500"
              } transition-all`}
            >
              <h3 className="text-lg font-bold text-blue-500">MISSION_003</h3>
              <p className="text-white mt-1">Investor-Ready Positioning</p>
            </div>
          </div>
          <div className="mt-12 p-8 bg-gray-900 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-white">
              {missions[activeMission].title}
            </h3>
            <p className="text-gray-400 mt-2">
              {missions[activeMission].summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {missions[activeMission].outcome.split(" | ").map(
                (item, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-black border border-gray-700 px-3 py-1 rounded-full text-gray-400"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="manifesto" className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">The Fireminds Manifesto</h2>
          <p className="text-xl text-gray-300">
            Brands don't scale on guesswork. They scale on clarity, ownership,
            and fearless execution.
          </p>
          <p className="mt-6 text-gray-400">
            We operate like an elite growth unit. Not consultants. Not vendors.
            Commanders of growth. You own the mission. We deliver it.
          </p>
        </div>
      </section>

      {/* The Command Unit */}
      <section id="team" className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 border-l-4 pl-4 border-blue-500">
            The Command Unit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="w-16 h-16 bg-gray-700 rounded-full mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-bold text-lg">Strategic Operator</h3>
              <p className="text-gray-400 mt-2">
                Ex-founder turned operational CMO. Owns execution.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="w-16 h-16 bg-gray-700 rounded-full mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-bold text-lg">CMO Agent</h3>
              <p className="text-gray-400 mt-2">
                Fractional CMO driving brand strategy and market entry.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="w-16 h-16 bg-gray-700 rounded-full mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-bold text-lg">Growth Analyst</h3>
              <p className="text-gray-400 mt-2">
                Data-driven operator building growth loops and metrics clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Your mission starts here.</h2>
          <p className="text-gray-400 mb-8">
            Get a free strategic briefing to see if we're the right partner for
            your growth goals.
          </p>
          <button 
            className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-black font-bold rounded-md transition-transform transform hover:scale-105 shadow-lg glow-blue"
            onClick={handleGetBriefed}
          >
            Get Briefed
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 bg-black text-gray-600 text-sm border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="font-bold text-white">Fireminds</div>
          <div className="mt-4 md:mt-0">
            © {new Date().getFullYear()} Fireminds. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}