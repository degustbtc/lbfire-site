"use client";

import {
  Flame,
  FileText,
  Droplets,
  Users,
  ClipboardCheck,
  TriangleAlert,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Extintores",
    description:
      "Venda, recarga, manutenção e inspeção de extintores de todos os tipos. Laudos e selos de conformidade inclusos.",
    highlight: "Entrega e instalação",
  },
  {
    icon: FileText,
    title: "Projetos PPCI",
    description:
      "Elaboração e aprovação do Plano de Prevenção e Proteção Contra Incêndio junto ao Corpo de Bombeiros.",
    highlight: "Aprovação garantida",
  },
  {
    icon: Droplets,
    title: "Sistemas Hidráulicos",
    description:
      "Projeto, instalação e manutenção de hidrantes, sprinklers e outros sistemas de combate a incêndio.",
    highlight: "Sprinklers e hidrantes",
  },
  {
    icon: Users,
    title: "Brigada de Incêndio",
    description:
      "Treinamento completo de brigadistas conforme NR-23. Simulados, teoria e prática com certificação.",
    highlight: "Certificado NR-23",
  },
  {
    icon: ClipboardCheck,
    title: "Laudos e AVCB",
    description:
      "Assessoria completa para obtenção do Auto de Vistoria do Corpo de Bombeiros (AVCB) e laudos técnicos.",
    highlight: "AVCB e documentação",
  },
  {
    icon: TriangleAlert,
    title: "Sinalização",
    description:
      "Placas de emergência, saídas de incêndio, rotas de fuga e toda a sinalização exigida pelas normas técnicas.",
    highlight: "Normas ABNT",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 orange-line-center">
            Nossos Serviços
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Soluções completas em proteção contra incêndio para sua empresa,
            condomínio ou indústria na Baixada Santista.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card bg-gray-900 border border-gray-800 hover:border-orange-500/40 rounded-2xl p-7 group cursor-default"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-orange-500/10 group-hover:bg-orange-500/20 rounded-xl flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-xs text-orange-500/70 bg-orange-500/10 px-3 py-1 rounded-full font-medium">
                    {service.highlight}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/5513996153677?text=Olá!%20Tenho%20interesse%20em%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors"
                >
                  Solicitar orçamento
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-4">
            Não encontrou o que procura?
          </p>
          <a
            href="https://wa.me/5513996153677?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-200"
          >
            Fale com um especialista
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
