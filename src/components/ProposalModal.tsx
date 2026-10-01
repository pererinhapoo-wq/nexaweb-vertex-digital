import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { ProposalFormState } from '../types';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState<ProposalFormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: preselectedService || 'Desenvolvimento Web',
    budgetRange: 'R$ 50.000 — R$ 100.000',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ProposalFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [protocol, setProtocol] = useState('');

  if (!isOpen) return null;

  const projectTypes = [
    'Desenvolvimento Web',
    'Aplicações Corporativas',
    'E-commerce & Catálogo',
    'Automação de Workflows',
    'Experiências Digitais',
    'Consultoria Tecnológica',
    'Outro Desafio Digital',
  ];

  const budgetRanges = [
    'R$ 25.000 — R$ 50.000',
    'R$ 50.000 — R$ 100.000',
    'R$ 100.000 — R$ 250.000',
    'Acima de R$ 250.000',
    'A definir conforme escopo',
  ];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ProposalFormState, string>> = {};
    if (!formData.name.trim()) errs.name = 'Informe seu nome';
    if (!formData.company.trim()) errs.company = 'Informe sua empresa';
    if (!formData.email.trim()) {
      errs.email = 'Informe seu e-mail';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'E-mail corporativo inválido';
    }
    if (!formData.phone.trim()) errs.phone = 'Informe seu telefone';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Descreva seu projeto com ao menos 10 caracteres';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setProtocol(`VTX-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-[#090d18] border border-white/[0.1] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-5 animate-in fade-in duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-2xl font-bold text-white">
                Proposta Solicitada com Sucesso!
              </h3>
              <p className="text-xs text-neutral-300">
                Registramos seu briefing sob o protocolo oficial:
              </p>
            </div>

            <div className="p-3 bg-black/50 border border-white/10 rounded-lg inline-block">
              <span className="font-mono text-base font-bold text-emerald-400">{protocol}</span>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              Nossa equipe técnica revisará os parâmetros de {formData.projectType} e entrará em
              contato pelo canal fornecido.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
            >
              Concluir
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                VERTEX DIGITAL · Proposta Comercial
              </div>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                Solicitar Proposta Técnica
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Compartilhe o panorama do seu projeto para recebermos um direcionamento
                personalizado.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-black/40 border border-white/[0.1] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                    placeholder="Seu nome"
                  />
                  {errors.name && <p className="text-[10px] text-red-400 mt-0.5">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-black/40 border border-white/[0.1] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                    placeholder="Empresa"
                  />
                  {errors.company && (
                    <p className="text-[10px] text-red-400 mt-0.5">{errors.company}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    E-mail corporativo *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-black/40 border border-white/[0.1] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                    placeholder="contato@empresa.com"
                  />
                  {errors.email && (
                    <p className="text-[10px] text-red-400 mt-0.5">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Telefone com DDD *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-black/40 border border-white/[0.1] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500"
                    placeholder="(11) 90000-0000"
                  />
                  {errors.phone && (
                    <p className="text-[10px] text-red-400 mt-0.5">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Tipo de projeto
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-black/40 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-neutral-900">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Faixa de investimento
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-black/40 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-emerald-500"
                  >
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-neutral-900">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Descreva seu projeto ou desafio técnico *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/[0.1] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 resize-none"
                  placeholder="Quais sistemas ou interfaces você precisa desenvolver?"
                />
                {errors.message && (
                  <p className="text-[10px] text-red-400 mt-0.5">{errors.message}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-100 rounded-lg transition-all duration-150 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registrando...</span>
                  ) : (
                    <>
                      <span>Enviar solicitação de proposta</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-2 border-t border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  <span>Retorno técnico em até 24h</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  <span>Tratamento confidencial</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
