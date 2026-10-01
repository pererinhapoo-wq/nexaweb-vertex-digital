import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CtaSectionProps {
  onOpenProposal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenProposal }) => {
  return (
    <section className="py-24 bg-[#070a12] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-emerald-400">
          <span>Início de Ciclo & Parcerias Estratégicas</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto text-balance leading-tight">
          Pronto para construir o próximo projeto?
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Conte-nos sobre seu desafio e descubra como podemos transformar sua ideia em uma solução
          digital.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenProposal}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-neutral-900 bg-white hover:bg-neutral-100 rounded-xl transition-all duration-200 shadow-xl shadow-black/40 hover:shadow-emerald-500/20 active:scale-[0.98] cursor-pointer"
          >
            <span>Solicitar proposta</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-800" />
          </button>
        </div>

        <p className="text-xs text-neutral-400">
          Atendimento personalizado com análise preliminar de viabilidade e escopo técnico.
        </p>
      </div>
    </section>
  );
};
