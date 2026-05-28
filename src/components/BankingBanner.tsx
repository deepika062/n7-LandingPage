
export default function MarqueeBanner() {
  const content = "Say 👋 to the new way of banking";
  const items = [
    { text: "N7", isBrand: true },
    { text: content, isBrand: false },
    { text: "CB7", isBrand: true },
    { text: content, isBrand: false },
  ];

  return (
    <div className="w-full bg-[#F4F7F9] py-2 md:py-3 lg:py-4 overflow-hidden border-b border-gray-200 px-4 md:px-6 lg:px-8">
      {/* Inline Styles for Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-custom {
          display: flex;
          animation: marquee 25s linear infinite;
        }
      `}</style>

      <div className="animate-marquee-custom whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-4 md:mx-6 lg:mx-8 text-sm md:text-base lg:text-[20px] font-medium">
            <span className={`mx-2 md:mx-3 lg:mx-4 ${item.isBrand ? "text-[#0057FF] font-bold" : "text-black"}`}>
              {item.text}
            </span>
            <span className="text-[#0057FF] text-base md:text-lg lg:text-xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}