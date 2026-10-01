import React from 'react';
import { TEAM } from '../data/content';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#05070c] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              Estrutura & Engenharia
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Pessoas construindo o próximo.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
              Equipes multidisciplinares focadas em qualidade de entrega, rigor de projeto e
              sustentabilidade de código.
            </p>
          </div>

          <div className="text-xs text-neutral-400 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3.5 py-2 shrink-0 md:max-w-xs leading-tight">
            <span className="font-semibold text-neutral-300">Nota técnica:</span> Perfis
            demonstrativos de equipe com nomes fictícios para apresentação visual do layout.
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="rounded-xl bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-[1px] group"
            >
              <div className="h-full rounded-xl bg-[#080c16] p-6 flex flex-col justify-between group-hover:bg-[#0a0f1c] transition-colors">
                <div>
                  {/* Geometric Monolith Icon Avatar */}
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center font-display font-bold text-lg text-emerald-400 mb-5 group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-colors">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {member.name}
                  </h3>

                  <div className="text-xs font-medium text-emerald-400 mt-1">
                    {member.role}
                  </div>

                  <div className="text-[11px] font-mono text-neutral-400 mt-2">
                    {member.specialty}
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed mt-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.05] text-[10px] font-mono text-neutral-400">
                  VERTEX DIGITAL · Engenharia
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
