import phone1 from "../assets/iPhone-13-Pro-Front (1).png";
import phone2 from "../assets/iPhone 13 Pro.png";
import phone3 from "../assets/iPhone-13-Pro-Front.png";

const FeatureCheckItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0057FF] flex items-center justify-center mt-1">
      <span className="text-white text-[12px] font-bold">✓</span>
    </div>
    <span className="text-[#1A1A1A] font-semibold text-sm">{children}</span>
  </div>
);

const MobileFeature = ({ image, title, desc, features, reverse }: any) => (
  <div
    className={`flex flex-col md:flex-row items-center w-full gap-6 md:gap-8 lg:gap-16 mb-12 md:mb-16 lg:mb-20 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
  >
    <img
      src={image}
      alt="mobile"
      className="w-32 h-64 md:w-48 lg:w-64 object-contain flex-shrink-0"
    />
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="flex flex-col gap-3 md:gap-4">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight">
          {title}
        </h3>
        <p className="text-[#8FA3AD] text-sm md:text-base lg:text-lg leading-relaxed max-w-full md:max-w-md lg:max-w-lg">
          {desc}
        </p>
      </div>
      <div className="flex flex-col gap-2 md:gap-3">
        {features.map((f: string, i: number) => (
          <FeatureCheckItem key={i}>{f}</FeatureCheckItem>
        ))}
      </div>
    </div>
  </div>
);

export default function DigitalBankingSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#F4F7FA] w-full flex justify-center">
      <div className="max-w-[1400px] w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16 lg:mb-20">
          <div className="w-full lg:w-auto lg:max-w-md flex flex-col gap-4 md:gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">
              Digital banking out-of-the-box
            </h2>
            <p className="text-[#8FA3AD] text-sm md:text-base lg:text-lg leading-relaxed">
              N7 helps your financial institution improve the client experience, automate and optimize procedures.
            </p>
            <button className="bg-[#0057FF] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold w-fit hover:bg-[#004BD6] transition-all">
              REQUEST DEMO
            </button>
          </div>
          <div className="flex flex-col w-full lg:flex-1">
            <MobileFeature
              image={phone1}
              reverse={false}
              title="Fully compliant with regulatory requirement"
              desc="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank’s operational-risk protocols and procedures."
              features={[
                "Pre-integrated Security System",
                "Fully Compliant With Regulatory Requirement",
                "Digitally Connected Core",
              ]}
            />
            <MobileFeature
              image={phone2}
              reverse={true}
              title="No legacy IT systems"
              desc="Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance."
              features={[
                "Adaptive & Intelligent API monetization",
                "Ambient User Experience",
                "Cloud-native With lower TCO",
              ]}
            />
            <MobileFeature
              image={phone3}
              reverse={false}
              title="No traditional branches"
              desc="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.’"
              features={[
                "Branchless & Paperless Banking",
                "Digital Transformation Capability",
                "Optimized, Adoptable and Scalable",
              ]}
            />
          </div>
        </div>

        <div className="bg-[#000D12] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 w-full">
          <div className="max-w-full lg:max-w-2xl">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 md:mb-6">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="text-[#8FA3AD] text-sm md:text-base lg:text-lg leading-relaxed">
              N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full lg:w-auto lg:flex-shrink-0">
            <button className="px-6 md:px-8 py-2 md:py-3 rounded-lg border border-white/10 text-white text-sm md:text-base font-semibold hover:bg-white/5 transition-all w-full sm:w-auto">
              CONTACT US
            </button>
            <button className="px-6 md:px-8 py-2 md:py-3 rounded-lg bg-[#0057FF] text-white text-sm md:text-base font-semibold hover:bg-[#004BD6] transition-all w-full sm:w-auto">
              REQUEST DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
