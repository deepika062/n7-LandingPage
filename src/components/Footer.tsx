import React from 'react';
import n7Logo from '../assets/Mask group (2).png'; // Ensure this path is correct

export default function Footer() {
  return (
    <footer className="w-full bg-[#000D12] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
          
          {/* Column 1: N7 Logo Image */}
          <div className="flex items-start">
            <img 
              src={n7Logo} 
              alt="N7 Logo" 
              className="w-full max-w-[200px] object-contain"
            />
          </div>

          {/* Column 2: Locations */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-semibold mb-2">London</h4>
              <p className="text-xs md:text-sm text-[#8FA3AD] leading-relaxed">
                Linktia Infosystems Ltd – CB7,<br/>26 Main Road Sundridge,TN14 6EP,<br/>England, United Kingdom.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Dubai</h4>
              <p className="text-xs md:text-sm text-[#8FA3AD] leading-relaxed">
                Linktia Infosystems Ltd –<br/>CB7,Jumeirah Business, Center 5<br/>Cluster W, Jumeirah Lakes Towers,<br/>Dubai, United Arab Emirates
              </p>
            </div>
          </div>

          {/* Column 3: Solutions */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Solutions</h4>
            <ul className="space-y-3 text-xs md:text-sm">
              {['Core Banking CB7', 'Digital Banking N7', 'Open Banking', 'Loan Origination System', 'Loan Management System', 'Digital Transformation'].map((link, idx) => (
                <li key={idx} className="text-[#8FA3AD] hover:text-[#0094FF] transition-colors cursor-pointer flex items-center justify-between">
                  {link}
                  <span className="text-[#0094FF]">→</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: N7 Banking */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">N7 Banking</h4>
            <ul className="space-y-3 text-xs md:text-sm">
              {['About Us', 'Solutions', 'Contact', 'Company', 'Careers', 'Insights', 'Core Team', 'Brand Center'].map((link, idx) => (
                <li key={idx} className="text-[#8FA3AD] hover:text-[#0094FF] transition-colors cursor-pointer flex items-center justify-between">
                  {link}
                  <span className="text-[#0094FF]">→</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Socials & Third Location */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-semibold mb-3">Our Socials</h4>
              <ul className="space-y-3 text-xs md:text-sm">
                {['LinkedIn', 'X'].map((link, idx) => (
                  <li key={idx} className="text-[#8FA3AD] hover:text-[#0094FF] transition-colors cursor-pointer flex items-center justify-between">
                    {link}
                    <span className="text-[#0094FF]">→</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">London</h4>
              <p className="text-xs md:text-sm text-[#8FA3AD] leading-relaxed">
                Linktia Infosystems Ltd –<br/>CB7,Nirmal, Anand Nagar,<br/>Suncity Road, Pune,<br/>Maharashtra, 411041, India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 md:pt-12 border-t border-white/5">
          <p className="text-xs md:text-sm text-[#8FA3AD] text-center md:text-left">
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2008 in England and Wales | Number of Incorporation 13100992]
          </p>
        </div>
      </div>
    </footer>
  );
}