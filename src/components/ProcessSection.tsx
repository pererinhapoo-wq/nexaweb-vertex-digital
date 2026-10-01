import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="processo" className="py-24 bg-[#05070c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            Metodologia & Execução
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Da ideia ao produto.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Uma esteira de engenharia previsível, transparente e focada em entregas contínuas de
            alto valor para sua organização.
          </p>
        </div>

        {/* Step Navigation Bar / Progress Line */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-white/[0.08] border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]'
                }`}
              >
                <div
                  className={`font-mono text-xs font-semibold ${
                    isActive ? 'text-emerald-400' : 'text-neutral-400'
                  }`}
                >
                  {step.number}
                </div>
                <div
                  className={`font-display text-sm font-bold mt-1 ${
                    isActive ? 'text-white' : 'text-neutral-300'
                  }`}
                >
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep Dive Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-[1px]">
          <div className="rounded-2xl bg-[#090d18] p-8 sm:p-10 border border-white/[0.05]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Number, Title and Summary */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-md">
                  <span>ETAPA {activeStep.number} DE 05</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {activeStep.number} — {activeStep.title}
                </h3>

                <p className="text-base text-neutral-200 font-medium leading-relaxed">
                  {activeStep.summary}
                </p>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {activeStep.details}
                </p>

                {/* Progress control buttons */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    type="button"
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-lg border border-white/10 text-neutral-300 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Anterior
                  </button>
                  <button
                    type="button"
                    disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                    onClick={() =>
                      setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))
                    }
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <span>Próxima etapa</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Right Column: Deliverables Box */}
              <div className="lg:col-span-5 bg-black/40 rounded-xl p-6 border border-white/[0.08] space-y-4">
                <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  Entregáveis Desta Fase
                </div>
                <div className="space-y-3">
                  {activeStep.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/[0.06] text-[11px] text-neutral-400">
                  Validação com marcos quinzenais de entrega e documentação contínua.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
