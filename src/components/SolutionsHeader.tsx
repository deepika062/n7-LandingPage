export default function SolutionsHeader() {
  return (
    <div className="space-y-8 lg:sticky lg:top-32 select-none w-full max-w-[433px]">
      {/* Typography configurations tuned directly to image_cbdba4.png values */}
      <h2 className="text-[32px] sm:text-[35px] lg:text-[37px] font-normal tracking-[-0.01em] text-[#E9F4F9] leading-[1.2]">
        All of our solutions are tailor-made to your needs
      </h2>
      
      {/* Button exact size calibration from Figma properties */}
      <button className="flex items-center justify-center border border-[#E9F4F9]/30 bg-[#1A262C]/40 hover:bg-[#1E2D35] text-[#E9F4F9] hover:border-[#E9F4F9] w-[161px] h-[38px] rounded-[6px] text-[11px] uppercase tracking-widest font-medium transition-all duration-200 active:scale-[0.98]">
        <span className="w-full text-center block pt-[1px]">
          Request Demo
        </span>
      </button>
    </div>
  );
}