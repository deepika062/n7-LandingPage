import coreBankingOverviewImage from "../assets/Mask group.png"; 

export default function CoreBankingOverview() {
  return (
    <section className="w-full bg-[#000B0E] py-24 pl-6 md:pl-12 lg:pl-20 pr-0 relative overflow-hidden border-b border-white/5">
      
     

      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_auto] gap-12 lg:gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN: Main Typography Headings & Call to Actions */}
        <div className="w-full flex justify-start pr-6 lg:pr-0">
          <div className="w-full max-w-[540px] space-y-8">
            <div className="space-y-6">
              <h1 className="text-[36px] sm:text-[44px] lg:text-[48px] font-normal leading-[1.15] text-[#E9F4F9] tracking-tight">
                A complete cloud-based core banking.
              </h1>
              <p className="text-[16px] leading-[1.6] text-[#A0B3BC] max-w-[400px]">
                Faster time to market with our cloud-based core banking services
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="flex items-center justify-center bg-gradient-to-r from-[#0091FF] to-[#004BFF] hover:from-[#00A3FF] hover:to-[#1A5CFF] text-[#E9F4F9] w-[180px] h-[46px] rounded-[8px] text-[12px] uppercase tracking-wider font-semibold shadow-lg shadow-blue-500/10 transition-all duration-200 active:scale-[0.98]">
                Request Demo
              </button>
              
              
            </div>
            <div>
                <a 
                href="#learn-more" 
                className="inline-flex items-center text-[12px] font-bold tracking-wider text-[#00B4FD] hover:text-[#26c6ff] uppercase transition-colors duration-200 gap-2 h-[46px] mt-[-20px]"
              >
                Learn More 
                <span className="text-[14px] leading-none">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Graphic Visual breaking out to the right with fixed anchor stand */}
        <div className="w-full flex justify-end select-none">
          <div className="relative w-full max-w-[560px] md:max-w-[620px] lg:max-w-[720px] pb-5">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-transparent blur-3xl rounded-full" />
            
            {/* The main device screenshot mockup */}
            <img 
              src={coreBankingOverviewImage} 
              alt="Core Banking Platform Showcase Overview" 
              className="w-full h-auto object-contain block relative z-10"
            />
            
            {/* FIXED LAPTOP STAND: Anchored explicitly to the bottom edge of the image layout container */}
            <div 
              className="w-full h-[32px] mt-2 border-[1.5px] border-[#00B4FD] rounded-b-[16px]" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}