export default function LightSection() {
  return (
    <section className="w-full bg-[#F4F7FA] text-[#000D12] py-24 border-y border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 space-y-32">
        
        {/* ROW 1: Content Left, Phone Mockup Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Area (Spans 5 columns) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Mobile App Experience
            </span>
            <h2 className="text-[32px] md:text-[44px] font-bold leading-[115%] tracking-tight text-slate-900">
              Digital banking cut out for the future
            </h2>
            <p className="text-[16px] text-slate-600 leading-[150%]">
              Carry your entire asset portfolio inside your pocket safely. Run fast cross-border transactional executions directly from our lightweight responsive client interface.
            </p>
            <div className="pt-2">
              <button className="px-6 h-[46px] bg-[#0052ff] hover:bg-blue-600 rounded-[10px] text-sm font-semibold text-white transition-all active:scale-[0.98]">
                Get App Access
              </button>
            </div>
          </div>

          {/* Right Phone Block Area (Spans 7 columns) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
            {/* White Phone Body Frame */}
            <div className="w-[280px] h-[560px] rounded-[40px] bg-white border-[8px] border-slate-900 shadow-2xl flex items-center justify-center font-mono text-xs text-slate-400 p-4">
              [ Phone Card View 1 Image ]
            </div>
          </div>
        </div>


        {/* ROW 2: Phone Mockup Left, Metrics Checklist Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Phone Block Area (Spans 7 columns) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start w-full order-last lg:order-first">
            {/* White Phone Body Frame */}
            <div className="w-[280px] h-[560px] rounded-[40px] bg-white border-[8px] border-slate-900 shadow-2xl flex items-center justify-center font-mono text-xs text-slate-400 p-4">
              [ Phone Analytics View 2 Image ]
            </div>
          </div>

          {/* Right Content Area (Spans 5 columns) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="text-[32px] md:text-[44px] font-bold leading-[115%] tracking-tight text-slate-900">
              Keep constant control over asset flow lines
            </h2>
            <p className="text-[16px] text-slate-600 leading-[150%]">
              Configure tailored pushed data notifications directly onto your device screen so your treasury operations stay completely optimized.
            </p>

            {/* Checklist Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {["Biometric Gateway Verification", "Instant Payment Settling", "Low-Fee Currency Conversion", "24/7 Automated Desk Support"].map((text, index) => (
                <div key={index} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">
                    ✓
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}