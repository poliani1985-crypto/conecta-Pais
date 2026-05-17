import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Home,
  Users,
  School,
  FileText,
  ClipboardList,
  BookOpen,
  MessageCircle,
  Sparkles,
  Flower2,
  Star,
  PartyPopper,
  CheckCircle,
  XCircle,
  Archive,
  HelpCircle,
  CalendarHeart,
  Send,
  Smile,
  Baby,
  Paintbrush,
  Video,
  Image as ImageIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ConectaPaisColorido() {
  const [tela, setTela] = useState("inicio");
  const [grupo, setGrupo] = useState(null);
  const [questionarioInicialCompleto, setQuestionarioInicialCompleto] = useState(false);
  const [questionarioFinalCompleto, setQuestionarioFinalCompleto] = useState(false);
  const [enqueteCompleta, setEnqueteCompleta] = useState(false);
  const [duvida, setDuvida] = useState("");

  const dadosGrupo = useMemo(() => {
    if (grupo === "equipe") {
      return {
        titulo: "Equipe Pedagógica",
        icone: School,
        cor: "from-sky-500 to-violet-500",
        codigo: "2 primeiras letras do seu nome + 2 dígitos da sua idade. Exemplo: Maria, 40 anos = MA40.",
        tcle: "Você está sendo convidado(a) a participar da pesquisa de forma livre e voluntária. A participação da equipe pedagógica envolve colaborar com o desenvolvimento do ConectaPais, acompanhar as etapas da pesquisa, responder ao questionário inicial e ao questionário final e contribuir com orientações pedagógicas relacionadas aos conteúdos e às interações das famílias. A pesquisa terá duração aproximada de 70 dias, com atualização semanal dos conteúdos. Sua identidade será preservada e você poderá desistir a qualquer momento, sem prejuízo profissional ou institucional.",
      };
    }
    return {
      titulo: "Pais, mães ou responsáveis",
      icone: Users,
      cor: "from-pink-500 to-orange-400",
      codigo: "2 primeiras letras do nome da criança + 2 dígitos da idade da criança. Exemplo: Maria, 4 anos = MA04.",
      tcle: "Você está sendo convidado(a) a participar da pesquisa de forma livre e voluntária. A participação das famílias acontecerá por meio do acesso ao ConectaPais, onde serão disponibilizados conteúdos informativos em linguagem simples, imagens, vídeos curtos e espaço para dúvidas sobre a Educação Infantil e o trabalho pedagógico do CMEI. A pesquisa terá duração aproximada de 70 dias, com atualização semanal dos conteúdos. Sua identidade será preservada e você poderá desistir a qualquer momento, sem prejuízo para você, para sua criança ou para sua relação com a instituição.",
    };
  }, [grupo]);

  const selecionarGrupo = (tipo) => {
    setGrupo(tipo);
    setTela("tcle");
  };

  const voltarInicio = () => {
    setTela("inicio");
    setGrupo(null);
    setQuestionarioInicialCompleto(false);
    setQuestionarioFinalCompleto(false);
    setEnqueteCompleta(false);
  };

  const conteudosSemana = [
    {
      titulo: "O brincar também ensina",
      tipo: "Texto + imagem",
      icone: Baby,
      descricao: "Um conteúdo simples mostrando como as brincadeiras ajudam no desenvolvimento da criança.",
    },
    {
      titulo: "Cuidar e educar caminham juntos",
      tipo: "Texto curto",
      icone: Heart,
      descricao: "Explicação sobre a importância do cuidado, do afeto e da intencionalidade pedagógica.",
    },
    {
      titulo: "A rotina do CMEI tem aprendizagem",
      tipo: "Vídeo curto",
      icone: Video,
      descricao: "Um vídeo explicando como os momentos da rotina também fazem parte do trabalho educativo.",
    },
    {
      titulo: "Como a família pode participar?",
      tipo: "Orientação prática",
      icone: Users,
      descricao: "Sugestões simples para fortalecer a parceria entre família e escola no dia a dia.",
    },
    {
      titulo: "Registro da semana",
      tipo: "Imagem informativa",
      icone: ImageIcon,
      descricao: "Espaço para colocar fotos, desenhos, recados ou registros pedagógicos autorizados.",
    },
  ];

  const conteudosAnteriores = [
    "Semana 1: Conhecendo o ConectaPais",
    "Semana 2: O papel da Educação Infantil",
    "Semana 3: Família e escola juntas",
    "Semana 4: Aprendizagens no cotidiano",
  ];

  function FundoDecorativo() {
    return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-70">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-200 rounded-full blur-3xl" />
        <div className="absolute top-20 left-10 text-6xl animate-bounce">🌻</div>
        <div className="absolute top-40 right-20 text-5xl">☁️</div>
        <div className="absolute bottom-40 left-20 text-6xl">🎨</div>
        <div className="absolute bottom-20 right-32 text-6xl">🧸</div>
        <div className="absolute top-1/2 left-1/2 text-5xl">🌈</div>
        <div className="absolute top-32 -right-16 w-80 h-80 bg-pink-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-sky-200 rounded-full blur-3xl" />
      </div>
    );
  }

  function Topo() {
    return (
      <header className="relative z-10 bg-white/80 backdrop-blur-xl border-b border-white/70 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <button onClick={voltarInicio} className="flex items-center gap-3 text-left">
            <div className="bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-400 text-white p-3 rounded-3xl shadow-lg">
              <Heart size={26} fill="white" />
            </div>
            <div>
              <h1 className="font-black text-xl text-slate-800">ConectaPais</h1>
              <p className="text-xs text-slate-500">Laços Educativos entre Família e Escola</p>
            </div>
          </button>

          <div className="flex flex-wrap gap-2 text-xs md:text-sm">
            <span className="px-3 py-2 rounded-full bg-yellow-100 text-yellow-800 font-semibold flex items-center gap-1"><Star size={14} /> Produto educacional</span>
            <span className="px-3 py-2 rounded-full bg-pink-100 text-pink-700 font-semibold flex items-center gap-1"><CalendarHeart size={14} /> 70 dias</span>
            <span className="px-3 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold flex items-center gap-1"><Sparkles size={14} /> Conteúdos semanais</span>
          </div>
        </div>
      </header>
    );
  }

  function Inicio() {
    return (
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-14">
        <section className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white shadow-md border border-yellow-100 px-4 py-2 rounded-full text-orange-600 font-bold">
              <Flower2 size={20} /> Bem-vindo(a) ao nosso espaço de aproximação
            </div>
            <div className="flex gap-3 mb-4 text-4xl md:text-5xl">
              <span>🖍️</span>
              <span>📚</span>
              <span>🌈</span>
              <span>🧩</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-800 leading-tight">
              ConectaPais: <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400">família e escola mais perto</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Este site é o produto educacional da pesquisa de mestrado e foi criado especialmente para aproximar as famílias do CMEI João Paulo II do trabalho pedagógico desenvolvido na Educação Infantil.
            </p>
            <Card className="rounded-[2rem] border-0 shadow-xl bg-white/90">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-black text-slate-800 flex items-center gap-2"><Heart className="text-pink-500" /> Agradecimento inicial</h3>
                <p className="text-slate-700 leading-relaxed">
                  Agradeço de coração por você estar aqui. Sua participação é muito importante para esta pesquisa e para pensarmos, juntos, caminhos que fortaleçam a relação entre família e escola.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="absolute -top-8 -right-2 bg-yellow-300 text-yellow-900 font-black px-5 py-3 rounded-full rotate-6 shadow-lg">Escolha seu acesso!</div>
            <Card className="rounded-[2.5rem] border-0 shadow-2xl bg-white p-3">
              <CardContent className="p-5 md:p-8 space-y-5">
                <div className="grid gap-4">
                  <button onClick={() => selecionarGrupo("pais")} className="group text-left rounded-[2rem] bg-gradient-to-br from-pink-500 to-orange-400 p-6 text-white shadow-xl hover:scale-[1.02] transition">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-4"><Users size={32} /></div>
                        <h3 className="text-2xl font-black">Pais, mães ou responsáveis</h3>
                        <p className="text-white/90 mt-2">Clique aqui para ler o TCLE das famílias e iniciar sua participação.</p>
                      </div>
                      <Sparkles className="group-hover:rotate-12 transition" size={34} />
                    </div>
                  </button>

                  <button onClick={() => selecionarGrupo("equipe")} className="group text-left rounded-[2rem] bg-gradient-to-br from-sky-500 to-violet-500 p-6 text-white shadow-xl hover:scale-[1.02] transition">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-4"><School size={32} /></div>
                        <h3 className="text-2xl font-black">Equipe pedagógica</h3>
                        <p className="text-white/90 mt-2">Clique aqui para ler o TCLE da equipe e colaborar com a pesquisa.</p>
                      </div>
                      <Paintbrush className="group-hover:rotate-12 transition" size={34} />
                    </div>
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
    );
  }

  function Tcle() {
    const Icone = dadosGrupo.icone;
    return (
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-10">
        <Card className="rounded-[2rem] border-0 shadow-2xl overflow-hidden bg-white">
          <div className={`bg-gradient-to-r ${dadosGrupo.cor} p-8 text-white`}>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-4 rounded-3xl"><Icone size={34} /></div>
              <div>
                <h2 className="text-3xl font-black">TCLE - {dadosGrupo.titulo}</h2>
                <p className="text-white/90">Leia com atenção antes de continuar.</p>
              </div>
            </div>
          </div>
          <CardContent className="p-6 md:p-8 space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-3xl bg-yellow-50 p-4 border border-yellow-100">
                <FileText className="text-yellow-600 mb-2" />
                <p className="font-bold text-slate-800">Participação voluntária</p>
                <p className="text-sm text-slate-600">Você pode desistir em qualquer etapa.</p>
              </div>
              <div className="rounded-3xl bg-pink-50 p-4 border border-pink-100">
                <HelpCircle className="text-pink-600 mb-2" />
                <p className="font-bold text-slate-800">Liberdade para responder</p>
                <p className="text-sm text-slate-600">Você pode deixar perguntas sem resposta.</p>
              </div>
              <div className="rounded-3xl bg-sky-50 p-4 border border-sky-100">
                <CheckCircle className="text-sky-600 mb-2" />
                <p className="font-bold text-slate-800">Sigilo garantido</p>
                <p className="text-sm text-slate-600">As respostas serão tratadas por código.</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-50 p-5 md:p-6 border text-slate-700 leading-relaxed space-y-4">
              <p>{dadosGrupo.tcle}</p>
              <p><strong>Código de identificação:</strong> {dadosGrupo.codigo}</p>
              <p><strong>Importante:</strong> o texto completo do TCLE poderá ser colocado neste espaço, mantendo todos os dados do pesquisador, da pesquisadora assistente, da instituição, riscos, benefícios, contatos e informações do Comitê de Ética.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={() => setTela("questionarioInicial")} className="rounded-2xl py-6 px-8 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-base font-bold">
                <CheckCircle className="mr-2" /> Aceito participar
              </Button>
              <Button onClick={() => setTela("naoAceito")} variant="outline" className="rounded-2xl py-6 px-8 text-base font-bold border-red-200 text-red-600 hover:bg-red-50">
                <XCircle className="mr-2" /> Não aceito participar
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }

  function NaoAceito() {
    return (
      <main className="relative z-10 max-w-3xl mx-auto px-4 py-16 text-center">
        <Card className="rounded-[2rem] border-0 shadow-2xl bg-white">
          <CardContent className="p-10 space-y-5">
            <div className="mx-auto w-20 h-20 rounded-full bg-red-100 flex items-center justify-center"><XCircle className="text-red-500" size={42} /></div>
            <h2 className="text-3xl font-black text-slate-800">Participação encerrada</h2>
            <p className="text-slate-700 leading-relaxed">
              Agradecemos por acessar o ConectaPais. Como você optou por não participar da pesquisa, sua participação será encerrada neste momento. Essa escolha é respeitada e não trará nenhum prejuízo.
            </p>
            <Button onClick={voltarInicio} className="rounded-2xl">Voltar ao início</Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  function QuestionarioInicial() {
    const perguntasPais = [
      "Por qual motivo principal você matriculou seu filho(a) no CMEI?",
      "Na sua opinião, qual é a principal função do CMEI?",
      "Você acredita que seu filho(a) aprende no CMEI?",
      "Você sente que conhece o trabalho realizado pelos professores no CMEI?",
      "Como você avalia a comunicação entre sua família e o CMEI?",
    ];
    const perguntasEquipe = [
      "Como você avalia atualmente a participação das famílias na rotina escolar do CMEI?",
      "Na sua opinião, as famílias compreendem a função pedagógica da Educação Infantil?",
      "Como você avalia a comunicação entre escola e famílias?",
      "Você considera importante aproximar mais as famílias do trabalho pedagógico?",
      "Você acredita que recursos digitais podem ajudar na aproximação com as famílias?",
    ];
    const perguntas = grupo === "equipe" ? perguntasEquipe : perguntasPais;

    return (
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-10">
        <Card className="rounded-[2rem] border-0 shadow-2xl bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 p-8 text-white">
            <h2 className="text-3xl font-black flex items-center gap-2"><ClipboardList /> Questionário inicial</h2>
            <p className="text-white/90 mt-2">Responda com tranquilidade. Não existem respostas certas ou erradas.</p>
          </div>
          <CardContent className="p-6 md:p-8 space-y-6">
            <div className="rounded-3xl bg-yellow-50 p-5 border border-yellow-100">
              <label className="font-bold text-slate-800">Código do participante</label>
              <p className="text-sm text-slate-600 mb-3">{dadosGrupo.codigo}</p>
              <input className="w-full rounded-2xl border p-3 outline-none focus:ring-2 focus:ring-yellow-300" placeholder="Digite seu código aqui" />
            </div>

            {perguntas.map((pergunta, index) => (
              <div key={pergunta} className="rounded-3xl border p-5 bg-white shadow-sm space-y-3">
                <p className="font-bold text-slate-800">{index + 1}. {pergunta}</p>
                <div className="grid sm:grid-cols-2 gap-2 text-sm">
                  {["Concordo / Sim", "Em parte", "Discordo / Não", "Prefiro não responder"].map((opcao) => (
                    <label key={opcao} className="flex items-center gap-2 rounded-2xl bg-slate-50 p-3 cursor-pointer hover:bg-pink-50">
                      <input type="radio" name={`q${index}`} /> {opcao}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-3xl border p-5 bg-slate-50 space-y-3">
              <p className="font-bold text-slate-800">Escreva uma opinião, sugestão ou comentário.</p>
              <textarea className="w-full min-h-28 rounded-2xl border p-3 outline-none focus:ring-2 focus:ring-pink-300" placeholder="Escreva aqui..." />
              <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" /> Prefiro não responder</label>
            </div>

            <Button onClick={() => { setQuestionarioInicialCompleto(true); setTela("principal"); }} className="rounded-2xl py-6 px-8 bg-gradient-to-r from-pink-500 to-orange-400 font-bold text-base">
              Enviar questionário e acessar conteúdos <Send className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  function Principal() {
    return (
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          <aside className="space-y-4">
            <Card className="rounded-[2rem] border-0 shadow-xl bg-white overflow-hidden">
              <div className="bg-gradient-to-r from-violet-500 to-sky-500 p-5 text-white">
                <h3 className="font-black flex items-center gap-2"><Archive /> Conteúdos anteriores</h3>
              </div>
              <CardContent className="p-4 space-y-2">
                {conteudosAnteriores.map((item) => (
                  <button key={item} className="w-full text-left rounded-2xl p-3 bg-slate-50 hover:bg-sky-50 text-sm text-slate-700">{item}</button>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-0 shadow-xl bg-gradient-to-br from-yellow-300 to-orange-300 text-orange-950">
              <CardContent className="p-5 space-y-2">
                <Sparkles />
                <h3 className="font-black text-lg">Atualização semanal</h3>
                <p className="text-sm">Durante 70 dias, este espaço receberá novos conteúdos para leitura, vídeo ou visualização.</p>
              </CardContent>
            </Card>
          </aside>

          <section className="space-y-6">
            <div className="rounded-[2rem] bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 p-6 md:p-8 text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black flex items-center gap-2"><BookOpen /> Página principal</h2>
              <p className="mt-2 text-white/95 text-lg">Aqui você encontrará os conteúdos do ConectaPais para acompanhar, aprender e participar.</p>
            </div>

            <div className="flex flex-wrap gap-3 mb-2">
              <div className="px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-bold">🌼 Educação Infantil</div>
              <div className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-bold">🎨 Aprender brincando</div>
              <div className="px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-bold">💛 Família e escola</div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {conteudosSemana.map((conteudo) => {
                const Icone = conteudo.icone;
                return (
                  <Card key={conteudo.titulo} className="rounded-[2rem] border-0 shadow-xl bg-white hover:-translate-y-1 transition overflow-hidden">
                    <div className="h-3 bg-gradient-to-r from-pink-400 via-yellow-300 to-sky-400" />
                    <CardContent className="p-6 space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center text-pink-600"><Icone size={30} /></div>
                      <div>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-100 text-sky-700">{conteudo.tipo}</span>
                        <h3 className="font-black text-xl text-slate-800 mt-3">{conteudo.titulo}</h3>
                        <p className="text-sm text-slate-600 mt-2">{conteudo.descricao}</p>
                      </div>
                      <Button variant="outline" className="rounded-2xl w-full border-pink-200 hover:bg-pink-50">Abrir conteúdo</Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="rounded-[2rem] border-0 shadow-2xl bg-white overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-6 text-white">
                <h3 className="text-2xl font-black flex items-center gap-2"><MessageCircle /> Espaço para tirar dúvidas 💬</h3>
                <p className="text-white/90">Escreva sua dúvida, comentário ou sugestão sobre os conteúdos.</p>
              </div>
              <CardContent className="p-6 space-y-4">
                <textarea value={duvida} onChange={(e) => setDuvida(e.target.value)} className="w-full min-h-36 rounded-3xl border p-4 outline-none focus:ring-2 focus:ring-green-300" placeholder="Digite sua dúvida aqui..." />
                <Button className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 font-bold"><Send className="mr-2" /> Enviar dúvida</Button>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button onClick={() => setTela("retaFinal")} className="rounded-2xl py-6 px-8 bg-gradient-to-r from-violet-500 to-pink-500 font-bold">
                Simular final dos 70 dias <PartyPopper className="ml-2" />
              </Button>
            </div>
          </section>
        </div>
      </main>
    );
  }

  function RetaFinal() {
    return (
      <main className="relative z-10 max-w-4xl mx-auto px-4 py-14 text-center">
        <Card className="rounded-[2rem] border-0 shadow-2xl bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400 p-10 text-white">
            <PartyPopper size={56} className="mx-auto mb-4" />
            <h2 className="text-4xl font-black">Estamos na reta final!</h2>
            <p className="text-white/95 mt-3 text-lg">Para concluir sua participação, precisamos que você responda o questionário final.</p>
            <div className="flex justify-center gap-3 mt-5 text-4xl">
              <span>🎉</span>
              <span>🌟</span>
              <span>💖</span>
            </div>
          </div>
          <CardContent className="p-8 space-y-5">
            <p className="text-slate-700 leading-relaxed">
              Sua resposta ajudará a compreender se o ConectaPais contribuiu para aproximar família e escola e para ampliar o olhar sobre a Educação Infantil.
            </p>
            <Button onClick={() => setTela("questionarioFinal")} className="rounded-2xl py-6 px-8 bg-gradient-to-r from-pink-500 to-orange-400 font-bold">Responder questionário final</Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  function QuestionarioFinal() {
    return (
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-10">
        <Card className="rounded-[2rem] border-0 shadow-2xl bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-violet-500 to-pink-500 p-8 text-white">
            <h2 className="text-3xl font-black flex items-center gap-2"><ClipboardList /> Questionário final</h2>
            <p className="text-white/90 mt-2">Conte como foi sua experiência com o ConectaPais.</p>
          </div>
          <CardContent className="p-6 md:p-8 space-y-5">
            <div className="rounded-3xl bg-violet-50 p-5 border border-violet-100">
              <label className="font-bold text-slate-800">Código do participante</label>
              <input className="w-full mt-2 rounded-2xl border p-3 outline-none focus:ring-2 focus:ring-violet-300" placeholder="Digite o mesmo código usado no início" />
            </div>
            {["Os conteúdos ajudaram a compreender melhor a Educação Infantil?", "A comunicação entre família e escola melhorou?", "Você passou a conhecer melhor o trabalho pedagógico?", "Você gostaria que ações como essa continuassem no CMEI?"].map((pergunta, index) => (
              <div key={pergunta} className="rounded-3xl border p-5 bg-white shadow-sm space-y-3">
                <p className="font-bold text-slate-800">{index + 1}. {pergunta}</p>
                <div className="grid sm:grid-cols-2 gap-2 text-sm">
                  {["Sim, muito", "Em parte", "Não percebi mudança", "Prefiro não responder"].map((opcao) => (
                    <label key={opcao} className="flex items-center gap-2 rounded-2xl bg-slate-50 p-3 cursor-pointer hover:bg-violet-50">
                      <input type="radio" name={`final${index}`} /> {opcao}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-3xl border p-5 bg-slate-50 space-y-3">
              <p className="font-bold text-slate-800">Deixe sua opinião final sobre o ConectaPais.</p>
              <textarea className="w-full min-h-28 rounded-2xl border p-3 outline-none focus:ring-2 focus:ring-violet-300" placeholder="Escreva aqui..." />
            </div>
            <Button onClick={() => { setQuestionarioFinalCompleto(true); setTela("enquete"); }} className="rounded-2xl py-6 px-8 bg-gradient-to-r from-violet-500 to-pink-500 font-bold">Enviar e responder enquete</Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  function Enquete() {
    return (
      <main className="relative z-10 max-w-4xl mx-auto px-4 py-10">
        <Card className="rounded-[2rem] border-0 shadow-2xl bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-sky-500 to-emerald-500 p-8 text-white">
            <h2 className="text-3xl font-black flex items-center gap-2"><CalendarHeart /> Enquete final</h2>
            <p className="text-white/90 mt-2">Queremos saber se você tem interesse em participar de um último encontro presencial.</p>
          </div>
          <CardContent className="p-6 md:p-8 space-y-5">
            <div className="rounded-3xl border p-5 bg-sky-50 space-y-3">
              <p className="font-bold text-slate-800">Você tem interesse em participar de um encontro presencial final sobre o ConectaPais?</p>
              {["Sim, tenho interesse", "Talvez", "Não tenho interesse no momento", "Prefiro não responder"].map((opcao) => (
                <label key={opcao} className="flex items-center gap-2 rounded-2xl bg-white p-3 cursor-pointer hover:bg-sky-100"><input type="radio" name="encontro" /> {opcao}</label>
              ))}
            </div>
            <div className="rounded-3xl border p-5 bg-emerald-50 space-y-3">
              <p className="font-bold text-slate-800">O que mais motivaria sua participação?</p>
              {["Conhecer os resultados da pesquisa", "Tirar dúvidas e conversar", "Compartilhar minha opinião", "Prefiro não responder"].map((opcao) => (
                <label key={opcao} className="flex items-center gap-2 rounded-2xl bg-white p-3 cursor-pointer hover:bg-emerald-100"><input type="radio" name="motivacao" /> {opcao}</label>
              ))}
            </div>
            <textarea className="w-full min-h-28 rounded-3xl border p-4 outline-none focus:ring-2 focus:ring-sky-300" placeholder="Deseja deixar alguma sugestão para esse encontro?" />
            <Button onClick={() => { setEnqueteCompleta(true); setTela("agradecimentoFinal"); }} className="rounded-2xl py-6 px-8 bg-gradient-to-r from-sky-500 to-emerald-500 font-bold">Finalizar participação</Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  function AgradecimentoFinal() {
    return (
      <main className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        <Card className="rounded-[2.5rem] border-0 shadow-2xl bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-violet-500 p-10 text-white">
            <Smile size={64} className="mx-auto mb-4" />
            <h2 className="text-4xl font-black">Muito obrigada pela sua participação!</h2>
          </div>
          <CardContent className="p-8 space-y-5">
            <p className="text-slate-700 text-lg leading-relaxed">
              Sua colaboração foi muito importante para o desenvolvimento desta pesquisa e para o uso do ConectaPais como material informativo de aproximação entre família e escola.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Sem a participação das famílias e da equipe pedagógica, este estudo não seria possível. Agradeço de coração por caminhar comigo nesta etapa.
            </p>
            <Button onClick={voltarInicio} className="rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 font-bold">Voltar ao início</Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-sky-50 text-slate-800">
      <FundoDecorativo />
      <Topo />
      {tela === "inicio" && <Inicio />}
      {tela === "tcle" && <Tcle />}
      {tela === "naoAceito" && <NaoAceito />}
      {tela === "questionarioInicial" && <QuestionarioInicial />}
      {tela === "principal" && <Principal />}
      {tela === "retaFinal" && <RetaFinal />}
      {tela === "questionarioFinal" && <QuestionarioFinal />}
      {tela === "enquete" && <Enquete />}
      {tela === "agradecimentoFinal" && <AgradecimentoFinal />}
      <footer className="relative z-10 mt-10 border-t border-white/70 bg-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-slate-600 flex flex-col md:flex-row gap-2 md:justify-between">
          <p className="font-semibold">ConectaPais: Laços Educativos entre Família e Escola</p>
          <p>Produto educacional vinculado à pesquisa de mestrado.</p>
        </div>
      </footer>
    </div>
  );
}
