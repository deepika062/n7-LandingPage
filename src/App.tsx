import Navbar from "./components/Navbar";
import HeroContent from "./components/HeroContent";
import HeroGraphic from "./components/HeroGraphic";
import TrustedBy from "./components/TrustedBy";
import SolutionsSection from "./components/SolutionsSection";
import CoreBankingOverview from "./components/CoreBankingOverview";
import CoreBankingDetail from "./components/CoreBankingDetail";
import PaperlessCTA from "./components/PaperlessCTA";
import BankingBanner from "./components/BankingBanner";
import DigitalBanking from "./components/DigitalBankingSection";
import InsightsSection from "./components/InsightsSection";
import CaseStudies from "./components/CaseStudies";
import PaperlessCTA2 from "./components/PaperlessCTA2";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#000D12] text-[#E9F4F9] font-sans relative overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* 1. HERO SECTION */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-6 pb-12 flex flex-col justify-between min-h-screen">
        <Navbar />
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-12">
          <div className="lg:col-span-6 z-10">
            <HeroContent />
          </div>
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <HeroGraphic />
          </div>
        </main>
        <TrustedBy />
      </div>
      {/* 2. TAILOR-MADE PRODUCT MATRIX GRID SECTION */}
      <SolutionsSection />
      <CoreBankingOverview />
      {/* 3. CORE BANKING FEATURE SPECIFICATION DETAIL VIEW */}
      <CoreBankingDetail />
      {/* 4. PAPERLESS CTA SECTION (As per Frame 82.jpg) */}
      <PaperlessCTA />
      <BankingBanner />{" "}
            <DigitalBanking />
            <InsightsSection />
            

            <CaseStudies />
          <PaperlessCTA2 />
  
    
      
      <Footer />
    </div>
  );
}
