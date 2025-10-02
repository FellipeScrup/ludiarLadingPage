import Image from "next/image";

const features = [
  {
    title: "Personagens curiosos",
    description:
      "Avatares em 3D fazem perguntas sobre o livro, incentivando a leitura ativa e a compreensão de texto.",
  },
  {
    title: "Português divertido",
    description:
      "Jogos linguísticos e desafios gramaticais adaptados à idade das crianças, com feedback imediato.",
  },
  {
    title: "Relatórios para educadores",
    description:
      "Painel com progresso de leitura, respostas e interesse de cada estudante para apoiar planejamento pedagógico.",
  },
];

const steps = [
  {
    number: "1",
    title: "Aponte o celular",
    description:
      "O app reconhece a capa e as páginas do livro e libera a experiência aumentada em segundos.",
  },
  {
    number: "2",
    title: "Interaja com o Ludi",
    description:
      "O personagem surge no ambiente e guia a criança com perguntas e missões relacionadas ao conteúdo.",
  },
  {
    number: "3",
    title: "Aprenda brincando",
    description:
      "Cada resposta desbloqueia novas animações, jogos e recompensas que reforçam o aprendizado de português.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#e6edff,_#f7f8ff_60%)]">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width=\\'1920\\' height=\\'1080\\' viewBox=\\'0 0 1920 1080\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cdefs%3E%3ClinearGradient id=\\'g\\' x1=\\'0\\' y1=\\'0\\' x2=\\'1\\' y2=\\'1\\'%3E%3Cstop stop-color=\\'%234b33b4\\' stop-opacity=\\'0.25\\'/%3E%3Cstop offset=\\'1\\' stop-color=\\'%232f75ff\\' stop-opacity=\\'0.15\\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\\'1920\\' height=\\'1080\\' fill=\\'url(%23g)\\'/%3E%3Ccircle cx=\\'220\\' cy=\\'210\\' r=\\'110\\' fill=\\'url(%23g)\\'/%3E%3Ccircle cx=\\'1720\\' cy=\\'140\\' r=\\'160\\' fill=\\'url(%23g)\\'/%3E%3Ccircle cx=\\'960\\' cy=\\'940\\' r=\\'200\\' fill=\\'url(%23g)\\'/%3E%3C/svg%3E')]" aria-hidden />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-20 sm:px-10 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="mx-auto flex w-fit items-center gap-3 rounded-full bg-white/80 px-4 py-2 shadow-lg shadow-blue-500/20 backdrop-blur">
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-blue-700">
                Realidade aumentada educativa
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              LudiAr transforma livros em aventuras interativas para crianças curiosas.
            </h1>
            <p className="text-lg text-slate-600 sm:text-xl">
              Basta apontar o celular para o livro e um personagem ganha vida com perguntas, missões e jogos sobre português, incentivando leitura ativa e diversão.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
              <a
                href="#demo"
                className="w-full rounded-full bg-blue-600 px-8 py-3 text-center text-base font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:translate-y-0.5 hover:bg-blue-500 sm:w-auto"
              >
                Solicitar demonstração
              </a>
              <a
                href="#como-funciona"
                className="w-full rounded-full border border-blue-600 bg-white px-8 py-3 text-center text-base font-semibold text-blue-600 transition hover:border-blue-500 hover:text-blue-500 sm:w-auto"
              >
                Ver como funciona
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 lg:justify-start">
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="relative w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl shadow-blue-500/20">
              <div className="absolute -left-6 -top-6 hidden h-12 w-12 rounded-full bg-blue-100 lg:block" aria-hidden />
              <div className="absolute -right-8 bottom-8 hidden h-16 w-16 rounded-full bg-orange-100 lg:block" aria-hidden />
              <div className="relative flex flex-col items-center gap-6">
                <Image
                  src="/IMG_6209.png"
                  alt="Ícone do LudiAr"
                  width={160}
                  height={160}
                  priority
                />
                <div className="space-y-3 text-center">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Conheça o Ludi
                  </h2>
                  <p className="text-base text-slate-600">
                    Personagem-guia que conversa com as crianças e transforma cada página em uma missão de aprendizado.
                  </p>
                </div>
                <div className="w-full rounded-2xl border border-blue-100 bg-blue-50 p-4 text-left text-sm text-blue-700">
                  &quot;Que tal descobrir quem é o herói desta história? Me conte o que você entendeu até agora!&quot;
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 sm:px-10">
        <section className="rounded-3xl bg-white/80 p-10 shadow-xl shadow-blue-500/10 backdrop-blur" id="demo">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Um laboratório de leitura com tecnologia imersiva.
              </h2>
              <p className="text-lg text-slate-600">
                LudiAr conecta livros físicos ao mundo digital. A câmera do dispositivo identifica páginas e ativa animações, perguntas e atividades que ajudam a fixar vocabulário, gramática e interpretação de texto.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm shadow-blue-500/10"
                  >
                    <h3 className="text-lg font-semibold text-blue-700">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-100 via-white to-blue-50 p-8 shadow-lg shadow-blue-500/20">
                <div className="flex flex-col gap-4 text-sm text-blue-700">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-semibold text-blue-600 shadow">A</span>
                    <div>
                      <p className="font-semibold">LudiAr</p>
                      <p className="text-xs text-blue-500">Assistente de leitura</p>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/90 p-4 shadow">
                    <p>Qual personagem mais chamou sua atenção até agora? Conte um detalhe sobre ele.</p>
                  </div>
                  <div className="rounded-2xl bg-white/40 p-4">
                    <p>Ótimo! Você percebeu como a autora descreve as emoções dele?</p>
                  </div>
                  <div className="rounded-2xl bg-white/90 p-4 shadow">
                    <p>Agora vamos brincar: encontre um adjetivo na página e escreva uma frase com ele!</p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-12 h-32 w-32 rounded-full bg-blue-200/60 blur-3xl" aria-hidden />
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Como funciona na sala de aula
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Em três passos simples, educadores criam experiências personalizadas que conectam leitura, tecnologia e protagonismo infantil.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg shadow-blue-500/10 backdrop-blur"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-semibold text-blue-700">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-10 text-white lg:grid-cols-[1.2fr_0.8fr]" id="contato">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Pronto para levar a realidade aumentada à sua escola?
            </h2>
            <p className="text-lg text-blue-100">
              Estamos selecionando escolas e editoras parceiras para o programa beta. Receba uma apresentação completa e explore o conteúdo piloto de língua portuguesa.
            </p>
            <ul className="space-y-3 text-sm text-blue-100/90">
              <li>• Kit com livros compatíveis e marcadores de AR</li>
              <li>• Treinamento para educadores e bibliotecários</li>
              <li>• Acesso ao painel de acompanhamento de turmas</li>
              <li>• Suporte pedagógico e técnico dedicado</li>
            </ul>
          </div>
          <form className="flex flex-col gap-4 rounded-2xl bg-white/15 p-6 backdrop-blur">
            <label className="text-sm font-medium text-blue-50" htmlFor="nome">
              Nome completo
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Maria Silva"
              className="rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-100 focus:border-white focus:outline-none"
            />
            <label className="text-sm font-medium text-blue-50" htmlFor="email">
              E-mail institucional
            </label>
            <input
              id="email"
              type="email"
              placeholder="contato@escola.com"
              className="rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-100 focus:border-white focus:outline-none"
            />
            <label className="text-sm font-medium text-blue-50" htmlFor="segmento">
              Segmento
            </label>
            <select
              id="segmento"
              className="rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Escolha uma opção
              </option>
              <option value="fund1">Ensino Fundamental I</option>
              <option value="fund2">Ensino Fundamental II</option>
              <option value="editora">Editora</option>
              <option value="outro">Outro</option>
            </select>
            <button
              type="submit"
              className="mt-4 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 hover:text-blue-800"
            >
              Quero conversar com a equipe
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-blue-100 bg-white/70 py-10 text-sm text-slate-500">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:px-10 sm:text-left">
          <div className="flex items-center gap-3 text-slate-600">
            <Image src="/IMG_6209.png" alt="LudiAr" width={48} height={48} />
            <div>
              <p className="font-semibold text-slate-700">LudiAr</p>
              <p>Aprendizagem com realidade aumentada para leitores do ensino fundamental.</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <a className="hover:text-blue-600" href="#demo">
              Sobre o produto
            </a>
            <a className="hover:text-blue-600" href="#como-funciona">
              Como funciona
            </a>
            <a className="hover:text-blue-600" href="#contato">
              Contato
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} LudiAr. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
