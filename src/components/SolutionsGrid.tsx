import coreBankingIcon from "../assets/coreBanking.svg";
import digitalBankingIcon from "../assets/DigitalBankking.svg";
import openBankingIcon from "../assets/openBanking.svg";
import loanOriginationIcon from "../assets/Loan.svg";
import loanManagementIcon from "../assets/loanManagement.svg";

interface SolutionItem {
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

export default function SolutionsGrid() {
  const solutions: SolutionItem[] = [
    {
      icon: coreBankingIcon,
      title: "Core Banking CB7",
      description: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance."
    },
    {
      icon: digitalBankingIcon,
      title: "Digital Banking N7",
      description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients"
    },
    {
      icon: openBankingIcon,
      title: "Open Banking",
      description: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring."
    },
    {
      icon: loanOriginationIcon,
      title: "Loan Origination System",
      description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
      badge: "NBFC"
    },
    {
      icon: loanManagementIcon,
      title: "Loan Management System",
      description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
      badge: "NBFC"
    },
  ];

  return (
    /* The layout uses md:grid-cols-2. 
      The gap matches the Figma Dev Mode container gap of 76px layout.
    */
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[76px] gap-y-16 w-full max-w-[614px] lg:ml-auto">
      {solutions.map((item, index) => (
        <div 
          key={index} 
          /* Bound card to exactly 344px wide to match Figma dimensions */
          className="group flex flex-col justify-between w-full max-w-[344px] mx-auto md:mx-0 min-h-[280px]"
        >
          <div className="space-y-4">
            {/* Icon Alignment */}
            <div className="flex items-center justify-between w-full h-10">
              <img 
                src={item.icon} 
                alt="" 
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              {item.badge && (
                <span className="text-[11px] font-bold tracking-widest text-[#E9F4F9]/50 uppercase font-mono mr-1">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Typography items */}
            <h3 className="text-[20px] font-medium tracking-tight text-white/95 pt-2">
              {item.title}
            </h3>
            
            <p className="text-[14px] leading-[1.65] text-[#A0B3BC] font-normal tracking-wide">
              {item.description}
            </p>
          </div>

          {/* Action links */}
          <div className="pt-6">
            <a 
              href="#learn-more" 
              className="inline-flex items-center text-[12px] font-bold tracking-wider text-[#00B4FD] hover:text-[#26c6ff] uppercase transition-colors duration-200 gap-2"
            >
              Learn More 
              <span className="text-[14px] leading-none transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}