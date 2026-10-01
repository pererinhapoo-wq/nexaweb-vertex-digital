import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#070912] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              Validação & Impacto
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Visão de quem confia em nossa engenharia.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
              Exemplos de perspectivas operacionais baseadas em entregas de alta confiabilidade.
            </p>
          </div>

          <div className="text-xs text-neutral-400 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3.5 py-2 shrink-0 md:max-w-xs leading-tight">
            <span className="font-semibold text-neutral-300">Nota técnica:</span> Depoimentos
            demonstrativos concebidos exclusivamente para estruturação e validação visual de layout.
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-[1px] flex flex-col justify-between"
            >
              <div className="h-full rounded-2xl bg-[#090d18] p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-emerald-400/40" />
                  <p className="text-sm text-neutral-200 leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-1">
                  <div className="text-xs font-bold text-white">
                    {test.authorRole}
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    {test.segment}
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400/90 pt-1">
                    Impacto: {test.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
