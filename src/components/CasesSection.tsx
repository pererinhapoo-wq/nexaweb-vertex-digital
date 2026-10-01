import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, Check, X } from 'lucide-react';
import { CASES } from '../data/content';
import { CaseStudy } from '../types';

export const CasesSection: React.FC = () => {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  return (
    <section id="cases" className="py-24 bg-[#05070c] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              Portfólio & Engenharia
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Projetos que conectam tecnologia e resultados.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
              Estruturas de software desenhadas para resolver desafios reais de conectividade,
              escalabilidade e eficiência operacional.
            </p>
          </div>

          {/* Explicit Discreet Demonstrative Notice */}
          <div className="text-xs text-neutral-400 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3.5 py-2 shrink-0 md:max-w-xs leading-tight">
            <span className="font-semibold text-neutral-300">Nota técnica:</span> Projetos
            conceituais demonstrativos desenvolvidos para representação de capacidade técnica e
            visual.
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASES.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-[1px] transition-all duration-300 hover:from-cyan-500/40 hover:to-emerald-500/20"
            >
              <div className="h-full rounded-2xl bg-[#080c16] overflow-hidden flex flex-col justify-between">
                {/* Visual Image Container with Hover Zoom */}
                <div className="relative aspect-video w-full overflow-hidden bg-black/60">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image path has issue
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c16] via-[#080c16]/40 to-transparent" />

                  {/* Category & Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-xs font-mono tracking-wide text-neutral-200 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                      {item.category}
                    </span>
                  </div>

                  {/* Impact Highlight Floating Tag */}
                  <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 text-right">
                    <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
                      {item.metricsLabel}
                    </div>
                    <div className="text-xs font-bold font-mono text-emerald-400">
                      {item.metricsValue}
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() => setActiveCase(item)}
                        className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-neutral-300 hover:text-white transition-colors cursor-pointer"
                        title="Ver especificações"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Architecture Tech Pills */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                      <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      {item.architecture.map((tech, idx) => (
                        <span key={tech} className="inline-flex items-center gap-1.5">
                          <span className="text-neutral-300 font-mono text-[11px]">{tech}</span>
                          {idx < item.architecture.length - 1 && (
                            <span className="text-neutral-600">·</span>
                          )}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-neutral-400 italic">
                        Estudo conceitual demonstrativo
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveCase(item)}
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        Ver arquitetura →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Details Modal */}
      {activeCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0a0e1a] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveCase(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                  {activeCase.category} · Exemplo Conceitual
                </span>
                <h3 className="font-display text-3xl font-bold text-white mt-1">
                  {activeCase.name}
                </h3>
                <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                  {activeCase.summary}
                </p>
              </div>

              {/* Case Image */}
              <div className="rounded-xl overflow-hidden aspect-video border border-white/10">
                <img
                  src={activeCase.image}
                  alt={activeCase.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Highlights & Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-xs text-neutral-400">{activeCase.metricsLabel}</div>
                  <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">
                    {activeCase.metricsValue}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-xs text-neutral-400">Arquitetura de Referência</div>
                  <div className="text-sm font-mono text-neutral-200 mt-1">
                    {activeCase.architecture.join(' · ')}
                  </div>
                </div>
              </div>

              {/* Technical Highlights */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  Destaques da Solução
                </div>
                <div className="space-y-2">
                  {activeCase.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>VERTEX DIGITAL · Capacidade Técnica</span>
                <button
                  type="button"
                  onClick={() => setActiveCase(null)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white font-medium rounded-lg transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
