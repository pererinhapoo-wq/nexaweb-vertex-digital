import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SolutionsSection } from './components/SolutionsSection';
import { CasesSection } from './components/CasesSection';
import { MetricsSection } from './components/MetricsSection';
import { ProcessSection } from './components/ProcessSection';
import { TechSection } from './components/TechSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';

export default function App() {
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('Desenvolvimento Web');

  const handleOpenProposal = (service?: string) => {
    if (service) {
      setPrefilledService(service);
    }
    setIsProposalModalOpen(true);
  };

  const handleCloseProposal = () => {
    setIsProposalModalOpen(false);
  };

  const handleExploreSolutions = () => {
    const el = document.getElementById('solucoes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSolutionForProposal = (solutionTitle: string) => {
    setPrefilledService(solutionTitle);
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsProposalModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070c] text-neutral-100 selection:bg-emerald-500/25 selection:text-emerald-300">
      {/* 1. Header */}
      <Header onOpenProposal={() => handleOpenProposal()} />

      <main>
        {/* 2. Hero */}
        <Hero
          onOpenProposal={() => handleOpenProposal()}
          onExploreSolutions={handleExploreSolutions}
        />

        {/* 3. Soluções */}
        <SolutionsSection onSelectSolutionForProposal={handleSelectSolutionForProposal} />

        {/* 4. Cases */}
        <CasesSection />

        {/* 5. Métricas */}
        <MetricsSection />

        {/* 6. Processo */}
        <ProcessSection />

        {/* 7. Tecnologias */}
        <TechSection />

        {/* 8. Equipe */}
        <TeamSection />

        {/* 9. Depoimentos */}
        <TestimonialsSection />

        {/* 10. FAQ */}
        <FaqSection />

        {/* 11. CTA */}
        <CtaSection onOpenProposal={() => handleOpenProposal()} />

        {/* 12. Contato */}
        <ContactSection prefilledService={prefilledService} />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Quick Proposal Modal */}
      <ProposalModal
        isOpen={isProposalModalOpen}
        onClose={handleCloseProposal}
        preselectedService={prefilledService}
      />
    </div>
  );
}
