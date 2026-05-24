"use client";

import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";

const WA_NUMBER = "5513996153677";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Me chamo *${form.name}*.\n\nTelefone: ${form.phone}\n\n${form.message}`;
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">
            Fale conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 orange-line-center">
            Entre em Contato
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mt-6">
            Solicite seu orçamento gratuito. Nossa equipe responde rápido!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <div className="space-y-5">
            {[
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "(13) 99615-3677",
                href: `https://wa.me/${WA_NUMBER}?text=Olá!%20Gostaria%20de%20um%20orçamento.`,
                color: "text-green-400",
                bg: "bg-green-400/10",
              },
              {
                icon: Phone,
                label: "Telefone",
                value: "(13) 99615-3677",
                href: "tel:+5513996153677",
                color: "text-orange-400",
                bg: "bg-orange-400/10",
              },
              {
                icon: MapPin,
                label: "Área de atendimento",
                value: "Baixada Santista e Região",
                href: null,
                color: "text-orange-400",
                bg: "bg-orange-400/10",
              },
              {
                icon: Clock,
                label: "Horário de atendimento",
                value: "Seg–Sex: 8h às 18h | Sáb: 8h às 13h",
                href: null,
                color: "text-orange-400",
                bg: "bg-orange-400/10",
              },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <div
                  key={item.label}
                  className="flex items-center gap-5 bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-orange-500/30 transition-colors"
                >
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center shrink-0`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-medium mb-1">
                      {item.label}
                    </div>
                    <div className={`font-semibold ${item.color}`}>
                      {item.value}
                    </div>
                  </div>
                </div>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            {/* Big WhatsApp CTA */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Olá!%20Gostaria%20de%20um%20orçamento%20gratuito.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-400 text-white py-4 rounded-2xl font-bold text-lg transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp Agora
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-5"
          >
            <h3 className="text-white font-bold text-xl mb-2">
              Enviar mensagem via WhatsApp
            </h3>
            <p className="text-gray-500 text-sm">
              Preencha abaixo e clique em enviar — abrirá o WhatsApp com a
              mensagem pronta.
            </p>

            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Seu nome *
              </label>
              <input
                required
                type="text"
                placeholder="Ex: João Silva"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 focus:border-orange-500 text-white placeholder-gray-600 rounded-xl px-4 py-3 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                placeholder="(13) 9xxxx-xxxx"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 focus:border-orange-500 text-white placeholder-gray-600 rounded-xl px-4 py-3 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Como podemos ajudar? *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Ex: Preciso de recarga de extintores para minha empresa..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 focus:border-orange-500 text-white placeholder-gray-600 rounded-xl px-4 py-3 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-3 w-full bg-orange-500 hover:bg-orange-400 text-white py-4 rounded-xl font-bold text-base transition-colors"
            >
              {sent ? (
                "Redirecionando para WhatsApp... ✓"
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar pelo WhatsApp
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
