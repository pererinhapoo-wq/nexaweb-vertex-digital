import React, { useState } from 'react';
import {
  Code2,
  Server,
  Cloud,
  Network,
  Database,
  Workflow,
  Link2,
} from 'lucide-react';
import { TECH_CATEGORIES } from '../data/content';

export const TechSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(TECH_CATEGORIES[0].id);

  const activeCategory =
    TECH_CATEGORIES.find((cat) => cat.id === activeCategoryId) || TECH_CATEGORIES[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 className="w-4 h-4" />;
      case 'backend':
        return <Server className="w-4 h-4" />;
      case 'cloud':
        return <Cloud className="w-4 h-4" />;
      case 'apis':
        return <Network className="w-4 h-4" />;
      case 'database':
        return <Database className="w-4 h-4" />;
      case 'automation-tech':
        return <Workflow className="w-4 h-4" />;
      case 'integrations':
        return <Link2 className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="tecnologia" className="py-24 bg-[#070912] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
            Stack & Ferramentas
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Tecnologia por trás das experiências.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Utilizamos ferramentas modernas de engenharia com foco em desempenho, segurança e
            manutenibilidade contínua.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-white/[0.08] mb-10">
          {TECH_CATEGORIES.map((cat) => {
            const isSelected = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryId(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white text-neutral-900 shadow-md font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <span>{getCategoryIcon(cat.id)}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description & Cards */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div>
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <span>{activeCategory.name}</span>
              </h3>
              <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
                {activeCategory.description}
              </p>
            </div>
            <span className="font-mono text-xs text-neutral-500 shrink-0">
              {activeCategory.technologies.length} tecnologias de referência
            </span>
          </div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCategory.technologies.map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl bg-[#090e1a] p-6 border border-white/[0.06] hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display text-lg font-bold text-neutral-100">
                    {tech.name}
                  </h4>
                  <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-800/30">
                    Aplicações
                  </span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  {tech.description}
                </p>
                <div className="pt-3 border-t border-white/[0.05] text-xs text-neutral-400 flex items-center gap-2">
                  <span className="font-semibold text-neutral-300">Foco operacional:</span>
                  <span>{tech.useCase}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explicit Compliance Note */}
        <div className="mt-12 text-center text-[11px] text-neutral-400">
          Referencial técnico de arquitetura e engenharia de software utilizado para direcionamento
          de projetos. Não representa vínculos ou certificações corporativas exclusivas.
        </div>
      </div>
    </section>
  );
};
