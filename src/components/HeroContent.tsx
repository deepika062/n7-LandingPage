export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-6 max-w-xl text-left">
      
      {/* Title block */}
      <div className="space-y-4">
        <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[64px] font-bold leading-[115%] tracking-tight text-[#E9F4F9]">
          The new foundation <br /> of modern banking
        </h1>
        
        <p className="text-[15px] sm:text-[16px] font-normal leading-[140%] text-[#E9F4F9]/80 max-w-md">
          We drive innovation and growth, provide seamless customer experience and operational excellence
        </p>
      </div>

      {/* Action Buttons group */}
      <div className="flex flex-row flex-wrap gap-4 pt-2">
        
        {/* REQUEST DEMO */}
        <button 
          className="px-8 h-[50px] rounded-[10px] text-sm font-semibold text-white tracking-wide shadow-md transition-transform active:scale-[0.98]"
          style={{
            background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)'
          }}
        >
          REQUEST DEMO
        </button>

        {/* CONTACT US - Fixed border color and solid text fill */}
        <button className="px-8 h-[50px] rounded-[10px] border border-[#E9F4F9]/40 bg-transparent text-[#E9F4F9] text-sm font-semibold tracking-wide transition-all hover:border-[#E9F4F9] hover:bg-white/5 active:scale-[0.98]">
          CONTACT US
        </button>
        
      </div>
    </div>
  );
}