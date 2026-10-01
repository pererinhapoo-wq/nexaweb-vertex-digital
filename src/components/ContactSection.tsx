import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, Clock } from 'lucide-react';
import { ProposalFormState } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState<ProposalFormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: prefilledService || 'Desenvolvimento Web',
    budgetRange: 'R$ 50.000 — R$ 100.000',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ProposalFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [protocol, setProtocol] = useState('');

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
    const newErrors: Partial<Record<keyof ProposalFormState, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'Por favor, informe seu nome completo.';
    if (!formData.company.trim()) newErrors.company = 'Por favor, informe a empresa.';
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, informe um e-mail para contato.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, insira um e-mail corporativo válido.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor, informe seu telefone ou WhatsApp com DDD.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Descreva brevemente os objetivos e necessidades do seu projeto.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Por favor, forneça ao menos 15 caracteres sobre seu projeto.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      const generatedProtocol = `VTX-${new Date().getFullYear()}-${Math.floor(
        100000 + Math.random() * 900000
      )}`;
      setProtocol(generatedProtocol);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectType: 'Desenvolvimento Web',
      budgetRange: 'R$ 50.000 — R$ 100.000',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contato" className="py-24 bg-[#05070c] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              Contato & Solicitação
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              Vamos estruturar sua próxima evolução técnica.
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed">
              Preencha o formulário com os detalhes da sua iniciativa. Nossa equipe de arquitetura
              avalia cada solicitação para elaborar uma proposta técnica compatível com seus
              objetivos de negócio.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Retorno Técnico Ágil</div>
                  <div className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                    Primeira devolutiva com triagem de viabilidade em até 24 horas úteis.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Shield className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Confidencialidade Rigorosa</div>
                  <div className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                    Todas as informações compartilhadas são tratadas com sigilo profissional.
                  </div>
                </div>
              </div>
            </div>

            {/* Quiet Corporate Note */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-neutral-400 leading-relaxed">
              <span className="font-semibold text-neutral-300">Canal Institucional:</span> As
              solicitações de proposta são recebidas e consolidadas através deste formulário
              corporativo direto.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-[1px] shadow-2xl shadow-black/60">
              <div className="rounded-2xl bg-[#080c16] p-6 sm:p-10 border border-white/[0.05]">
                {isSuccess ? (
                  <div className="py-8 text-center space-y-6 animate-in fade-in duration-200">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold text-white">
                        Solicitação enviada com sucesso!
                      </h3>
                      <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                        Agradecemos o contato, <span className="text-white font-medium">{formData.name}</span>.
                        Registramos sua solicitação sob o protocolo institucional abaixo:
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] max-w-xs mx-auto">
                      <div className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
                        Protocolo de Registro
                      </div>
                      <div className="text-lg font-mono font-bold text-emerald-400 mt-0.5">
                        {protocol}
                      </div>
                    </div>

                    <div className="text-xs text-neutral-400 max-w-md mx-auto">
                      Nossos especialistas analisarão os requisitos de{' '}
                      <span className="text-neutral-200 font-medium">{formData.projectType}</span> para a{' '}
                      <span className="text-neutral-200 font-medium">{formData.company}</span>.
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-6 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
                      >
                        Enviar nova solicitação
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Nome */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-medium text-neutral-300 mb-1.5"
                        >
                          Nome <span className="text-emerald-400">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Ex: Roberto Silva"
                          className={`w-full px-4 py-2.5 rounded-lg bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.name
                              ? 'border-red-500/70 focus:ring-red-500'
                              : 'border-white/[0.1] focus:border-emerald-500/70 focus:ring-emerald-500/40'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Empresa */}
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-xs font-medium text-neutral-300 mb-1.5"
                        >
                          Empresa <span className="text-emerald-400">*</span>
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder="Ex: Nexus Corp"
                          className={`w-full px-4 py-2.5 rounded-lg bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.company
                              ? 'border-red-500/70 focus:ring-red-500'
                              : 'border-white/[0.1] focus:border-emerald-500/70 focus:ring-emerald-500/40'
                          }`}
                        />
                        {errors.company && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.company}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* E-mail */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-neutral-300 mb-1.5"
                        >
                          E-mail corporativo <span className="text-emerald-400">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="nome@empresa.com"
                          className={`w-full px-4 py-2.5 rounded-lg bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.email
                              ? 'border-red-500/70 focus:ring-red-500'
                              : 'border-white/[0.1] focus:border-emerald-500/70 focus:ring-emerald-500/40'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Telefone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-medium text-neutral-300 mb-1.5"
                        >
                          Telefone / WhatsApp <span className="text-emerald-400">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="(11) 98765-4321"
                          className={`w-full px-4 py-2.5 rounded-lg bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.phone
                              ? 'border-red-500/70 focus:ring-red-500'
                              : 'border-white/[0.1] focus:border-emerald-500/70 focus:ring-emerald-500/40'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Tipo de projeto */}
                      <div>
                        <label
                          htmlFor="projectType"
                          className="block text-xs font-medium text-neutral-300 mb-1.5"
                        >
                          Tipo de projeto
                        </label>
                        <select
                          id="projectType"
                          value={formData.projectType}
                          onChange={(e) =>
                            setFormData({ ...formData, projectType: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/[0.1] text-sm text-white focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/40"
                        >
                          {projectTypes.map((type) => (
                            <option key={type} value={type} className="bg-neutral-900 text-white">
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Orçamento */}
                      <div>
                        <label
                          htmlFor="budgetRange"
                          className="block text-xs font-medium text-neutral-300 mb-1.5"
                        >
                          Orçamento previsto
                        </label>
                        <select
                          id="budgetRange"
                          value={formData.budgetRange}
                          onChange={(e) =>
                            setFormData({ ...formData, budgetRange: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/[0.1] text-sm text-white focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/40"
                        >
                          {budgetRanges.map((range) => (
                            <option
                              key={range}
                              value={range}
                              className="bg-neutral-900 text-white"
                            >
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Mensagem */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium text-neutral-300 mb-1.5"
                      >
                        Mensagem & Desafio do Negócio <span className="text-emerald-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Descreva o escopo, objetivos da solução ou integrações necessárias..."
                        className={`w-full px-4 py-3 rounded-lg bg-black/40 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all resize-none ${
                          errors.message
                            ? 'border-red-500/70 focus:ring-red-500'
                            : 'border-white/[0.1] focus:border-emerald-500/70 focus:ring-emerald-500/40'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-neutral-900 bg-white hover:bg-neutral-100 rounded-xl transition-all duration-200 shadow-lg shadow-black/50 hover:shadow-emerald-500/20 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processando solicitação...</span>
                      ) : (
                        <>
                          <span>Enviar solicitação</span>
                          <Send className="w-4 h-4 text-neutral-800" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
