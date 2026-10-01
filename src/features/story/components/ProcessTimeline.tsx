import React from "react";
import { CRAFTSMANSHIP_STEPS } from "@/services/data/stories.data";
import { CantingIcon } from "@/components/svg";
import { CheckCircle } from "lucide-react";

export const ProcessTimeline: React.FC = () => {
  return (
    <div className="relative border-l-2 border-amber-600/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
      {CRAFTSMANSHIP_STEPS.map((step) => (
        <div key={step.step} className="relative group">
          {/* Step marker / badge */}
          <div className="absolute -left-[35px] sm:-left-[51px] top-0 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-amber-600 bg-amber-950 text-amber-300 font-bold text-xs sm:text-sm shadow-md group-hover:scale-110 transition-transform">
            0{step.step}
          </div>

          <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition-all duration-300 group-hover:border-amber-600/40 group-hover:shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900 flex items-center gap-1.5">
                <CantingIcon className="h-3.5 w-3.5 text-amber-700" />
                {step.javaneseTerm}
              </span>
              <span className="text-xs font-medium text-stone-500">{step.subtitle}</span>
            </div>

            <h3 className="text-lg font-bold text-stone-900 mb-2">{step.title}</h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">{step.description}</p>

            <div className="flex items-center gap-2 rounded-xl bg-amber-50/60 border border-amber-100 px-3.5 py-2 text-xs font-medium text-amber-900">
              <CheckCircle className="h-4 w-4 text-amber-700 shrink-0" />
              <span>{step.highlight}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
