import SolutionsHeader from "./SolutionsHeader";
import SolutionsGrid from "./SolutionsGrid";

export default function SolutionsSection() {
  return (
    <section className="w-full bg-[#000B0E] py-24 px-6 md:px-12 lg:px-20 border-b border-white/5 selection:bg-blue-500 selection:text-white">
      {/* Max-width constraint set to match the overall design framework limits. 
        Changed grid ratio so left takes up less space (max 433px) and right handles the wider matrix grid.
      */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[433px_1fr] gap-12 lg:gap-20 items-start">
        
        {/* PART 1: THE ASYMMETRIC HEADER CALLOUT BLOCK (Takes less width) */}
        <SolutionsHeader />

        {/* PART 2: THE MATRIX PRODUCT GRID MODULE (Takes more width) */}
        <SolutionsGrid />

      </div>
    </section>
  );
}