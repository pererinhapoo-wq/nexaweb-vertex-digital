import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BRAND } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Cases', href: '#cases' },
    { label: 'Tecnologia', href: '#tecnologia' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#04060a] border-t border-white/[0.06] text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Slogan */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-[#070a12] rounded-[7px] flex items-center justify-center">
                  <svg
                    className="w-3.5 h-3.5 text-emerald-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 7 9 13 9-13" />
                    <path d="M12 20 7 10" />
                  </svg>
                </div>
              </div>
              <span className="font-display font-bold tracking-tight text-lg text-white">
                {BRAND.name}
              </span>
            </div>

            <p className="font-display text-sm font-medium text-neutral-300">
              “{BRAND.slogan}”
            </p>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              {BRAND.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Navegação
            </div>
            <ul className="grid grid-cols-2 gap-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-2 flex flex-col items-start md:items-end justify-between">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white border border-white/[0.06] transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Legal & Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div>{BRAND.copyrightNotice}</div>
          <div className="text-center sm:text-right text-[11px] text-neutral-400">
            {BRAND.demoNotice}
          </div>
        </div>
      </div>
    </footer>
  );
};
