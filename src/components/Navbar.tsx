import { useState } from "react";
import chevronIcon from "../assets/1.png"; // Utilizing your provided 1.png chevron asset

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<"solutions" | "resources" | null>(null);

  const toggleDropdown = (menu: "solutions" | "resources") => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <div className="w-full flex justify-center pt-4 md:pt-6 lg:pt-[31px] pb-3 md:pb-4 lg:pb-[20px] relative z-50 select-none px-4">
      {/* Floating Island Capsule Container */}
      <nav 
        className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-2xl relative bg-[#2F2F2FB2] w-full sm:max-w-fit"
        style={{
          borderRadius: '12px',
          padding: '9px 10px 9px 24px',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
        }}
      >
        {/* Brand Mark Typography */}
        <div className="text-base md:text-lg lg:text-[16px] font-bold text-[#E9F4F9] tracking-tight whitespace-nowrap">
          N7
        </div>

        {/* Center Links Layout Group with Interactive Dropdowns */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 lg:gap-[36px] text-xs md:text-sm lg:text-[12px] font-semibold tracking-wider text-[#E9F4F9]/80 w-full sm:w-auto">
          
          {/* SOLUTIONS DROPDOWN LINK */}
          <div className="relative w-full sm:w-auto">
            <button 
              onClick={() => toggleDropdown("solutions")}
              className="flex items-center gap-1.5 hover:text-white transition-colors uppercase focus:outline-none w-full sm:w-auto justify-center sm:justify-start"
            >
              <span>Solutions</span>
              <img 
                src={chevronIcon} 
                alt="" 
                className={`w-2.5 h-2.5 object-contain transition-transform duration-200 ${
                  activeDropdown === "solutions" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {activeDropdown === "solutions" && (
              <div className="absolute top-[34px] left-1/2 -translate-x-1/2 w-48 bg-[#1F1F1F]/95 border border-white/10 backdrop-blur-md rounded-lg p-2 shadow-xl flex flex-col gap-1 z-50 animate-fadeIn">
                <a href="#banking" className="px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-all">Modern Banking</a>
                <a href="#security" className="px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-all">Crypto Vaults</a>
                <a href="#api" className="px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-all">Developer Core API</a>
              </div>
            )}
          </div>

          {/* RESOURCES DROPDOWN LINK */}
          <div className="relative w-full sm:w-auto">
            <button 
              onClick={() => toggleDropdown("resources")}
              className="flex items-center gap-1.5 hover:text-white transition-colors uppercase focus:outline-none w-full sm:w-auto justify-center sm:justify-start"
            >
              <span>Resources</span>
              <img 
                src={chevronIcon} 
                alt="" 
                className={`w-2.5 h-2.5 object-contain transition-transform duration-200 ${
                  activeDropdown === "resources" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {activeDropdown === "resources" && (
              <div className="absolute top-[34px] left-1/2 -translate-x-1/2 w-48 bg-[#1F1F1F]/95 border border-white/10 backdrop-blur-md rounded-lg p-2 shadow-xl flex flex-col gap-1 z-50 animate-fadeIn">
                <a href="#docs" className="px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-all">API Documentation</a>
                <a href="#case" className="px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-all">Case Studies</a>
                <a href="#blog" className="px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-all">Insight Blog</a>
              </div>
            )}
          </div>

          {/* ABOUT US LINK (Static) */}
          <span className="hover:text-white cursor-pointer transition-colors uppercase">
            ABOUT US
          </span>
        </div>

        {/* REFACTORED CONVERSION ACTION */}
        <button 
          className="flex items-center justify-center transition-opacity hover:opacity-90 active:scale-[0.98] transition-transform px-6 md:px-8 py-2 md:py-3 rounded-lg w-full sm:w-auto"
          style={{
            backgroundColor: '#2F2F2F',
            color: '#E9F4F9',
            fontFamily: 'Chivo Mono Medium, monospace, sans-serif',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '130%',
            textTransform: 'uppercase',
            letterSpacing: '0%',
            border: '1px solid #E9F4F9',
          }}
        >
          REQUEST DEMO
        </button>
      </nav>
    </div>
  );
}