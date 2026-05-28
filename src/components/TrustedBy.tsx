// 1. IMPORT YOUR LOGO ASSETS
import shellLogo from "../assets/shells.svg";
import smartFinderLogo from "../assets/smartfinder.svg";
import zoomerrLogo from "../assets/Zommer.svg";
import artVenueLogo from "../assets/artvenue.svg";
import kontrastrLogo from "../assets/kontrastr.svg";
import wavesLogo from "../assets/wavesmarthon.svg";

export default function TrustedBy() {
  const brands = [
    { src: shellLogo, alt: "SHELLS", displayText: "SHELLS", width: "17.47px", height: "18.39px" },
    { src: smartFinderLogo, alt: "SmartFinder", displayText: "SmartFinder", width: "19.06px", height: "18.39px" },
    { src: zoomerrLogo, alt: "Zoomerr", displayText: "Zoomerr", width: "19.06px", height: "18.39px" },
    { src: artVenueLogo, alt: "ArtVenue", displayText: "ArtVenue", width: "17.47px", height: "18.39px" },
    { src: kontrastrLogo, alt: "kontrastr", displayText: "kontrastr", width: "19.06px", height: "18.39px" },
    { src: wavesLogo, alt: "WAVESMARATHON", displayText: "WAVESMARATHON", width: "17.47px", height: "18.39px" }
  ];

  return (
    <div className="w-full pt-12 border-t border-white/5 space-y-4">
      {/* Heading Group */}
      <h3 className="text-[16px] font-medium text-[#E9F4F9]/70 capitalize tracking-normal select-none">
        Trusted By:
      </h3>

      {/* Logos & Text Container Group */}
      <div className="flex flex-wrap items-center gap-x-10 gap-y-6 opacity-90">
        {brands.map((brand, index) => (
          <div 
            key={index} 
            /* RESTORED: Existing text colors and hover functionality completely untouched */
            className="flex items-center gap-2 text-[14px] sm:text-[16px] font-bold tracking-wider text-slate-500 hover:text-slate-300 transition-colors cursor-default select-none font-mono"
          >
            {/* Logo Graphic Mark - Color changed to Orange (#E17654) via shadow mask filtering */}
            <img 
              src={brand.src} 
              alt={`${brand.alt} Icon`} 
              style={{
                width: brand.width,
                height: brand.height,
                /* This shifts the logo image graphic color directly to your premium orange target */
                filter: 'drop-shadow(0px 0px 0px #E17654)'
              }}
              className="object-contain block" 
            />
            
            {/* Existing Text Label Functionality Restored */}
            <span>{brand.displayText.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}