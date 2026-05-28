import type { ReactNode } from "react";

export default function FeatureCheckItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#007AFF] flex items-center justify-center mt-0.5">
        <span className="text-white text-[12px] font-semibold">✓</span>
      </div>
      <span className="text-[#E9F4F9] text-[16px] leading-[1.3]">{children}</span>
    </div>
  );
}