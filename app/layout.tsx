import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LBFire | Proteção Contra Incêndio na Baixada Santista",
  description:
    "Especialistas em extintores, projetos PPCI, sistemas hidráulicos, treinamentos de brigada e laudos na Baixada Santista. Atendimento rápido e profissional.",
  keywords: "extintor, combate incêndio, PPCI, AVCB, brigada, baixada santista, santos, são vicente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
