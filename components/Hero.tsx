"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden fire-gradient"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-700/5 rounded-full blur-2xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          Baixada Santista e Região
        </div>

        {/* Headline */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Proteção Contra{" "}
          <span className="text-orange-500 relative">
            Incêndio
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-orange-500/40 rounded-full" />
          </span>{" "}
          <br className="hidden sm:block" />
          que Você Pode Confiar
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Extintores, projetos PPCI, sistemas hidráulicos, treinamentos de
          brigada e laudos técnicos. Atendemos empresas e condomínios com
          agilidade e segurança.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="https://wa.me/5513996153677?text=Olá!%20Gostaria%20de%20um%20orçamento%20gratuito."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 orange-glow hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Orçamento Grátis
          </a>
          <a
            href="tel:+5513996153677"
            className="flex items-center gap-3 border-2 border-white/20 hover:border-orange-500/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:bg-white/5"
          >
            <Phone className="w-5 h-5" />
            (13) 99615-3677
          </a>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-6 max-w-lg mx-auto transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { value: "500+", label: "Clientes" },
            { value: "10+", label: "Anos" },
            { value: "100%", label: "Conformidade" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-orange-400">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-orange-400 transition-colors animate-bounce"
        aria-label="Ver serviços"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
