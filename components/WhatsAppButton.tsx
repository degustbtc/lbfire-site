"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href="https://wa.me/5513996153677?text=Olá!%20Gostaria%20de%20um%20orçamento%20gratuito."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale pelo WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white rounded-full shadow-2xl transition-all duration-500 whatsapp-pulse ${
        visible
          ? "opacity-100 translate-y-0 px-5 py-3"
          : "opacity-0 translate-y-8 px-3 py-3"
      }`}
    >
      <MessageCircle className="w-6 h-6 shrink-0" />
      <span
        className={`text-sm font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 ${
          visible ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        Fale conosco!
      </span>
    </a>
  );
}
