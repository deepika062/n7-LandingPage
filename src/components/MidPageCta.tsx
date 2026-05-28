export default function MidPageCta() {
  return (
    <section className="w-full bg-[#000D12] py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Floating Dark Container Card */}
        <div className="w-full bg-[#001015] border border-white/10 rounded-[24px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden text-left">
          
          {/* Subtle background gradient splash inside the container */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Left Text Block */}
          <div className="space-y-3 max-w-xl">
            <h2 className="text-[28px] md:text-[36px] font-bold leading-[125%] text-[#E9F4F9]">
              Take the full advantage of <br className="hidden sm:inline" /> going paperless now.
            </h2>
            <p className="text-[15px] text-[#E9F4F9]/60">
              Join thousands of international enterprises scaling resource distribution pipelines.
            </p>
          </div>

          {/* Right Action Interactive Block */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full sm:w-[280px] h-[50px] bg-[#000D12] border border-white/10 rounded-[10px] px-4 text-sm text-[#E9F4F9] placeholder-[#E9F4F9]/30 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button 
              className="w-full sm:w-auto px-8 h-[50px] rounded-[10px] text-sm font-semibold text-white tracking-wide transition-transform active:scale-[0.98] whitespace-nowrap"
              style={{
                background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)'
              }}
            >
              REQUEST DEMO
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}