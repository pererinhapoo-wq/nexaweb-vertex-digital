import React from 'react';
import { METRICS } from '../data/content';

export const MetricsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#070a12] border-y border-white/[0.06] relative overflow-hidden">
      {/* Background Subtle Tech Gradient */}
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
          {METRICS.map((metric, index) => (
            <div
              key={metric.id}
              className={`flex flex-col justify-between ${
                index > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''
              }`}
            >
              <div>
                <div className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight tabular-nums">
                  <span className="bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                    {metric.value}
                  </span>
                </div>
                <div className="text-sm font-semibold text-emerald-400 mt-2">
                  {metric.label}
                </div>
              </div>
              <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                {metric.context}
              </p>
            </div>
          ))}
        </div>

        {/* Explicit Discreet Demonstrative Notice */}
        <div className="mt-12 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-[11px] text-neutral-400 tracking-wide">
            Indicadores demonstrativos elaborados exclusivamente para composição visual e
            apresentação de layout.
          </p>
        </div>
      </div>
    </section>
  );
};
