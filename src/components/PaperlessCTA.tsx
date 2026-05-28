export default function PaperlessCTA() {
  return (
    <section className="w-full bg-[#000D12] py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20">
      <div 
        className="relative mx-auto overflow-hidden min-h-[300px] md:min-h-[350px] lg:min-h-[427px]"
        style={{
          width: '100%',
          maxWidth: '1279px',
          borderRadius: '27px',
          background: 'linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)',
          // borderImage is usually handled via CSS classes or raw CSS, 
          // keeping as style object per your original implementation
          border: '1px solid transparent',
          borderImageSource: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
          borderImageSlice: 1
        }}
      >
        <div 
          className="absolute pointer-events-none select-none"
          style={{
            top: '-160.72px',
            left: '223.56px',
            width: '1141px',
            height: '687px',
            textAlign: 'right',
            zIndex: 0
          }}
        >
          <span 
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 500,
              fontSize: '572.63px',
              lineHeight: '120%',
              color: 'transparent',
              WebkitTextStroke: '1.59px #00B4FD',
              opacity: 0.2
            }}
          >
            CB7
          </span>
        </div>

        <div className="relative z-10 px-6 md:px-8 lg:px-16 py-8 md:py-10 lg:py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between h-full gap-6 md:gap-8 lg:gap-12">
          <div className="w-full lg:w-auto max-w-full md:max-w-none lg:max-w-[520px]">
            <h2
              className="text-[#E9F4F9] mb-3 md:mb-4 lg:mb-5 text-2xl md:text-3xl lg:text-5xl font-bold leading-tight"
              style={{
                fontFamily: "Archivo, sans-serif",
                fontWeight: 400,
                letterSpacing: "-1%",
              }}
            >
              Take the full advantage of going paper-less now.
            </h2>
            <p className="text-sm md:text-base lg:text-[16px] text-[#8FA3AD] leading-[1.6] max-w-full lg:max-w-[470px]">
              CB7 helps your financial institution improve the client experience, 
              automate and optimize procedures, simplify banking operations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full lg:w-auto lg:flex-shrink-0">
            <button className="px-6 md:px-8 py-2.5 md:py-3.5 rounded-[12px] border border-white/20 text-[#E9F4F9] text-sm md:text-[14px] font-semibold hover:bg-white/5 transition-all w-full sm:w-auto">
              CONTACT US
            </button>
            <button className="px-6 md:px-8 py-2.5 md:py-3.5 rounded-[10px] bg-[#0057FF] text-[#E9F4F9] text-sm md:text-[11px] tracking-[0.12em] font-medium hover:bg-[#004BD6] transition-all w-full sm:w-auto">
              REQUEST DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}