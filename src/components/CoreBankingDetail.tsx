import coreBankingDashboard from "../assets/Mask group (1).png";
import FeatureCheckItem from "./FeatureCheckItem";

export default function CoreBankingDetail() {
  return (
    // Removed all side padding on section to ensure it can hit the edge
    <section className="w-full bg-[#000B0E] py-24 border-b border-white/5 overflow-hidden">
      {/* Container: Remove max-w to let the left column hit the browser edge */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center relative z-10">
        {/* LEFT COLUMN: Image aligned to left side */}
        {/* LEFT COLUMN */}
        <div className="w-full flex justify-start select-none">
          <div className="relative w-full max-w-[430px] md:max-w-[500px] lg:max-w-[560px] pb-4">
            {/* Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/5 to-transparent blur-2xl rounded-full" />

            {/* Image */}
            <img
              src={coreBankingDashboard}
              alt="Core Banking Dashboard"
              className="w-full h-auto object-contain relative z-10"
            />

            {/* Bottom Stand */}
            <div className="w-full h-[24px] mt-2 border border-[#00B4FD] rounded-b-[14px]" />
          </div>
        </div>

        {/* RIGHT COLUMN: Checklist with padding to create the gap */}
        <div className="w-full px-6 md:px-12 lg:pr-20">
          <h2 className="text-[27px] font-[400] leading-[1.3] text-[#E9F4F9] tracking-normal mb-8">
            {" "}
            Run a more efficient, flexible, and digitally connected corebanking
            system
          </h2>

          <p className="text-[16px] font-[400] text-[#E9F4F9]/90 mb-6">
            What you will get:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5 font-[100]">
            <div className="space-y-4">
              <FeatureCheckItem>Customer-On Boarding</FeatureCheckItem>
              <FeatureCheckItem>
                Managing deposits and withdrawals
              </FeatureCheckItem>
              <FeatureCheckItem>Transaction management</FeatureCheckItem>
              <FeatureCheckItem>Interest Calculation</FeatureCheckItem>
              <FeatureCheckItem>
                Payments processing (cash, cheques, mandates, NEFT, RTGS etc)
              </FeatureCheckItem>
            </div>
            <div className="space-y-4">
              <FeatureCheckItem>CRM Activities</FeatureCheckItem>
              <FeatureCheckItem>
                Configuring New Banking Products
              </FeatureCheckItem>
              <FeatureCheckItem>
                Loan disbursal and Loan management
              </FeatureCheckItem>
              <FeatureCheckItem>
                Establishing criteria for minimum balances, interest rates,
                number of withdrawals allowed and so on.{" "}
              </FeatureCheckItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
