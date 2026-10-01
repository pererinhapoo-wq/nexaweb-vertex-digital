import React, { useState } from 'react';
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Workflow,
  Sparkles,
  Compass,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SOLUTIONS } from '../data/content';
import { Solution } from '../types';

interface SolutionsSectionProps {
  onSelectSolutionForProposal: (solutionTitle: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolutionForProposal,
}) => {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'applications':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'ecommerce':
        return <ShoppingCart className="w-5 h-5 text-teal-400" />;
      case 'automation':
        return <Workflow className="w-5 h-5 text-emerald-400" />;
      case 'digital-experiences':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'tech-consulting':
        return <Compass className="w-5 h-5 text-teal-400" />;
      default:
        return <Globe className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="solucoes" className="py-24 bg-[#070910] border-t border-white/[0.06] relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            Capacidades & Engenharia
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Soluções digitais para novos desafios.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Estruturamos produtos escaláveis e plataformas eficientes que transformam processos
            complexos em experiências tecnológicas fluidas e orientadas a resultados.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((solution) => (
            <div
              key={solution.id}
              className="group relative rounded-xl bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-[1px] transition-all duration-300 hover:from-emerald-500/40 hover:to-cyan-500/20"
            >
              <div className="h-full rounded-xl bg-[#090d16] p-7 flex flex-col justify-between transition-colors group-hover:bg-[#0b101c]">
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
                      {getIcon(solution.id)}
                    </div>
                    <span className="font-mono text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
                      {solution.techFocus.split('·')[0].trim()}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-bold text-neutral-100 group-hover:text-white transition-colors mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.05]">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-400 truncate max-w-[180px]">
                    {solution.deliverables}
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectSolutionForProposal(solution.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 hover:underline cursor-pointer"
                  >
                    <span>Proposta</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
