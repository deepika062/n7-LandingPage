export default function PaperlessCTA2() {
  return (
    <section className="w-full bg-[#000D12] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 md:gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="text-sm md:text-base text-[#8FA3AD] leading-relaxed max-w-lg">
              CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <button className="px-6 md:px-8 py-3 md:py-4 border border-white/30 text-white text-sm md:text-base font-medium hover:border-white/60 transition-all rounded-lg">
              CONTACT US
            </button>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-[#0094FF] text-white text-sm md:text-base font-medium hover:bg-[#0075CC] transition-all rounded-lg">
              REQUEST DEMO
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
