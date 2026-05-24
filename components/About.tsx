import { ShieldCheck, Zap, Award, HeartHandshake } from "lucide-react";

const differentials = [
  {
    icon: ShieldCheck,
    title: "Conformidade Total",
    description:
      "Todos os serviços executados conforme normas ABNT, NR-23 e exigências do Corpo de Bombeiros do Estado de SP.",
  },
  {
    icon: Zap,
    title: "Atendimento Rápido",
    description:
      "Resposta ágil e equipe técnica pronta para atender sua demanda com urgência e eficiência.",
  },
  {
    icon: Award,
    title: "Equipe Certificada",
    description:
      "Técnicos qualificados e certificados, com treinamento contínuo e domínio das normas vigentes.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Pós-Venda",
    description:
      "Acompanhamento contínuo, controle de vencimentos e lembretes de manutenção preventiva.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-block text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">
              Quem somos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 orange-line">
              A LBFire
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed mt-8">
              <p>
                Somos uma empresa especializada em proteção contra incêndio,
                atuando na{" "}
                <span className="text-white font-semibold">Baixada Santista</span>{" "}
                há mais de uma década. Nascemos com o compromisso de oferecer
                soluções completas e acessíveis para empresas, condomínios e
                indústrias da região.
              </p>
              <p>
                Do extintor ao projeto completo de PPCI, passando por
                treinamentos e laudos técnicos — nossa equipe cuida de{" "}
                <span className="text-orange-400 font-semibold">
                  tudo que envolve a segurança contra incêndio
                </span>{" "}
                do seu negócio.
              </p>
              <p>
                Trabalhamos com transparência, agilidade e total conformidade
                com as exigências do Corpo de Bombeiros de São Paulo, garantindo
                que sua empresa esteja sempre regularizada e protegida.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-800">
              {[
                { value: "500+", label: "Clientes atendidos" },
                { value: "10+", label: "Anos de mercado" },
                { value: "15+", label: "Cidades atendidas" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-orange-400">
                    {s.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: differentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentials.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-orange-500/30 transition-colors group"
                >
                  <div className="w-10 h-10 bg-orange-500/10 group-hover:bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{d.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {d.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
