import heroImg from "../assets/Pexels Photo by Andrea Piacquadio.png";
import balanceCard from "../assets/Frame 116.png";   
import activityCard from "../assets/Frame 115.png";  
import glowRing from "../assets/Ellipse 1.png"; 

export default function HeroGraphic() {
  return (
    // Fluid responsive wrapper that matches your layout system perfectly
    <div className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-[550px] flex items-center justify-center select-none py-12 lg:py-0 px-4 md:px-6">
      
      {/* 1. BACKGROUND GLOW IMAGE - Centered using absolute percentages */}
      <img 
        src={glowRing}
        alt=""
        className="absolute pointer-events-none z-0 opacity-50 mix-blend-screen max-w-none w-64 h-64 md:w-80 md:h-80 lg:w-[398.87px] lg:h-[398.87px]"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(100px)',
          background: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)',
          borderRadius: '50%'
        }}
      />

      {/* 2. CORE BASE MAIN IMAGE */}
      <div className="relative z-10 w-48 h-40 md:w-72 md:h-60 lg:w-[362px] lg:h-[300px] rounded-lg md:rounded-xl lg:rounded-[24px] overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] bg-[#001015]">
        <img 
          src={heroImg} 
          alt="Main Portfolio Interface Background" 
          className="w-full h-full object-cover object-top block"
        />
      </div>

      {/* 3. OVERLAP CARD 1: ACCOUNT TOTAL BALANCE (TOP RIGHT) */}
      <div 
        className="absolute z-20 border border-white/20 overflow-hidden rounded-lg md:rounded-[12px] w-40 h-32 md:w-48 md:h-40 lg:w-[199px] lg:h-[168px]"
        style={{
          top: '-10px', 
          right: '0px',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0px 0px 27.57px 8.92px rgba(0, 0, 0, 0.25)'
        }}
      >
        <img 
          src={balanceCard} 
          alt="Balance Metrics" 
          className="w-full h-full object-cover block" 
        />
      </div>

      {/* 4. OVERLAP CARD 2: RECENT TRANSACTION ACTIVITY */}
      <div 
        className="absolute z-20 border border-white/20 overflow-hidden rounded-lg md:rounded-[12px] w-48 h-24 md:w-56 md:h-28 lg:w-[254px] lg:h-[117px]"
        style={{
          bottom: '40px',  
          left: '-50px',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0px 0px 27.57px 8.92px rgba(0, 0, 0, 0.25)'
        }}
      >
        <img 
          src={activityCard} 
          alt="Activity Stream" 
          className="w-full h-full object-cover block" 
        />
      </div>

    </div>
  );
}