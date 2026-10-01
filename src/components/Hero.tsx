import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Layers, Cpu, ShieldCheck, Terminal } from 'lucide-react';
import { BRAND } from '../data/content';

interface HeroProps {
  onOpenProposal: () => void;
  onExploreSolutions: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProposal, onExploreSolutions }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle interactive tech canvas with glowing geometric nodes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Nodes setup
    const nodeCount = Math.min(36, Math.floor(width / 35));
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.15;
            ctx.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and move nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.fillStyle = 'rgba(167, 243, 208, 0.45)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="inicio"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#05070c] bg-tech-grid"
    >
      {/* Background Interactive Canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Ambient Gradient Glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.6) 0%, rgba(6, 182, 212, 0.3) 50%, transparent 80%)',
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-10 w-[500px] h-[400px] rounded-full opacity-15 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Subtle Brand Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Engenharia & Soluções Digitais Corporativas</span>
            </div>

            {/* Required Hero Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              {BRAND.slogan}
            </h1>

            {/* Required Hero Text */}
            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl text-balance">
              {BRAND.description}
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-xl">
              {BRAND.heroSecondary}
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onExploreSolutions}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-900 bg-white hover:bg-neutral-100 rounded-lg transition-all duration-200 shadow-md hover:shadow-emerald-500/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Conheça nossas soluções</span>
                <ArrowRight className="w-4 h-4 text-neutral-800" />
              </button>

              <button
                type="button"
                onClick={onOpenProposal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-200 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.12] hover:border-white/[0.2] rounded-lg transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Solicitar proposta</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Quiet Architectural Markers */}
            <div className="pt-6 border-t border-white/[0.07] grid grid-cols-3 gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Alta Disponibilidade</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Código Moderno</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Escalabilidade Real</span>
              </div>
            </div>
          </div>

          {/* Futuristic Visual Terminal & Architecture Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.12] to-white/[0.02] p-[1px] shadow-2xl shadow-black/80">
                <div className="rounded-2xl bg-[#090d16]/95 backdrop-blur-xl p-6 border border-white/[0.05]">
                  {/* Console Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-mono text-[11px] text-neutral-400">
                        vertex.runtime.env
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>PRONTO</span>
                    </div>
                  </div>

                  {/* Architecture Diagram Nodes */}
                  <div className="py-5 space-y-4 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Terminal className="w-4 h-4 text-emerald-400" />
                        <div>
                          <div className="text-neutral-200 font-medium text-[11px]">Plataforma & Core Engine</div>
                          <div className="text-[10px] text-neutral-400">Microsserviços de Alta Concorrência</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-semibold tabular-nums">0.12ms</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                        <div className="text-[10px] text-neutral-400">Conectividade</div>
                        <div className="text-neutral-100 font-semibold text-xs mt-0.5">REST · GraphQL</div>
                        <div className="mt-2 text-[9px] text-emerald-400/90">Contratos Imutáveis</div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                        <div className="text-[10px] text-neutral-400">Dados & Caching</div>
                        <div className="text-neutral-100 font-semibold text-xs mt-0.5">PostgreSQL + Redis</div>
                        <div className="mt-2 text-[9px] text-cyan-400/90">Transacional ACID</div>
                      </div>
                    </div>

                    {/* Operational Telemetry Simulation */}
                    <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06] space-y-2">
                      <div className="flex justify-between text-[11px] text-neutral-300">
                        <span>Fluxo de Execução</span>
                        <span className="text-emerald-400 tabular-nums">99.99% estabilidade</span>
                      </div>
                      <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 h-full w-[94%]" />
                      </div>
                      <div className="flex justify-between text-[10px] text-neutral-400 pt-1">
                        <span>Arquitetura orientada a eventos</span>
                        <span>Multi-região</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Footer Note */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400">
                    <span>Estrutura Corporativa</span>
                    <span className="text-neutral-300 font-medium">VERTEX DIGITAL</span>
                  </div>
                </div>
              </div>

              {/* Decorative Geometric Corner Marker */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-emerald-500/40 rounded-br-xl pointer-events-none" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-cyan-500/30 rounded-tl-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
