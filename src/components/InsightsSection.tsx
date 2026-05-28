import React from 'react';
// Assuming the icon graphic is available as a local asset
import featureGraphic from '../assets/CaseStudies.png'; // Replace with the actual path to your graphic

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-[#0A161D] rounded-2xl p-6 border border-white/5 flex flex-col ${className}`}>
    {children}
  </div>
);

export default function InsightsSection() {
  return (
    <section className="bg-[#050B0F] w-full py-20">
      <div className="max-w-[1400px] mx-auto px-20 grid grid-cols-12 gap-12">
        
        {/* LEFT SIDE: Heading & Button preserved */}
        <div className="col-span-4 flex flex-col gap-12">
          <h2 className="text-white text-5xl font-bold leading-tight">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <button className="px-8 py-3 border border-white text-white text-base w-fit hover:bg-white hover:text-[#050B0F] transition-all">
            INSIGHTS
          </button>
        </div>

        {/* RIGHT SIDE: Integrated layout */}
        <div className="col-span-8 flex flex-col gap-6">
          
          {/* Featured Card with integrated image */}
          <Card className="flex flex-row items-center gap-8">
            <div className="w-[280px] h-[220px] bg-[#001D33] rounded-xl flex items-center justify-center shrink-0">
              <img src={featureGraphic} alt="Fintech Icon" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#0094FF] text-xs tracking-widest uppercase">Getting Started</span>
              <h3 className="text-white text-2xl">How to transition from a traditional to a digital bank</h3>
              <div className="text-[#8FA3AD] text-xs">David Grohl • 17/08/24</div>
              <button className="mt-4 border border-white/10 py-3 text-white text-xs w-full hover:bg-white/5">READ MORE</button>
            </div>
          </Card>

          {/* Bottom Grid: 2 Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <span className="text-[#0094FF] text-xs tracking-widest uppercase">Getting Started</span>
              <h3 className="text-white text-xl mt-2">How to transition from a traditional to a digital bank</h3>
              <div className="text-[#8FA3AD] text-xs mt-2">David Grohl • 17/08/24</div>
              <button className="mt-6 border border-white/10 py-3 text-white text-xs w-full hover:bg-white/5">READ MORE</button>
            </Card>
            <Card>
              <span className="text-[#0094FF] text-xs tracking-widest uppercase">Getting Started</span>
              <h3 className="text-white text-xl mt-2">How to transition from a traditional to a digital bank</h3>
              <div className="text-[#8FA3AD] text-xs mt-2">David Grohl • 17/08/24</div>
              <button className="mt-6 border border-white/10 py-3 text-white text-xs w-full hover:bg-white/5">READ MORE</button>
            </Card>
          </div>

          {/* Footer Link */}
          <div className="text-[#0094FF] text-right font-medium cursor-pointer text-base mt-2">
            READ ALL INSIGHTS →
          </div>
        </div>
      </div>
    </section>
  );
}