import  { useState } from 'react';
// Import the image file
import caseStudyImage from '../assets/CaseStudies.png'; // Ensure this path is correct and the image is in the specified location

const caseStudies = [
  { id: 1, title: 'How we help brand reach out to more people', company: 'Zoomerr', label: 'GETTING STARTED' },
  { id: 2, title: 'Digital transformation in banking', company: 'FinCorp', label: 'GETTING STARTED' },
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = caseStudies[currentIndex];

  return (
    <section className="w-full bg-[#000D12] py-20">
      <div className="max-w-[1015px] mx-auto">
        {/* Main Heading preserved */}
        <h2 className="text-white text-4xl text-center mb-12">Our Case Studies</h2>

        {/* Main Card: 1015x438 */}
        <div className="w-[1015px] h-[438px] bg-[#0A161D] rounded-2xl p-10 flex items-center gap-12 border border-white/5">
          {/* Replaced IconGrid with the requested image */}
          <div className="w-[300px] h-[300px] bg-[#002B4D] rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
            <img 
              src={caseStudyImage} 
              alt="Case Study Graphic" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Text and Metadata preserved */}
          <div className="flex flex-col gap-4">
            <span className="text-[#0094FF] text-xs tracking-widest uppercase">{current.label}</span>
            <h3 className="text-white text-3xl leading-tight">{current.title}</h3>
            <div className="flex items-center gap-2 text-[#8FA3AD] text-sm">
              <span>⚡</span> <span>{current.company}</span>
            </div>
            <button className="border border-white/10 text-white py-3 w-40 text-sm mt-4 hover:bg-white/5 transition-all">
              READ MORE
            </button>
          </div>
        </div>

        {/* Navigation & View All preserved */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={() => setCurrentIndex(prev => prev === 0 ? caseStudies.length - 1 : prev - 1)} className="text-[#0094FF] text-2xl">←</button>
          <div className="flex gap-2">
            {caseStudies.map((_, i) => <div key={i} className={`h-2 rounded-full ${i === currentIndex ? 'w-8 bg-[#0094FF]' : 'w-2 bg-[#0094FF]/30'}`} />)}
          </div>
          <button onClick={() => setCurrentIndex(prev => (prev + 1) % caseStudies.length)} className="text-[#0094FF] text-2xl">→</button>
          <a href="#" className="text-[#0094FF] text-sm ml-auto">VIEW ALL →</a>
        </div>
      </div>
    </section>
  );
}