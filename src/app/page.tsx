import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const logoUrl = "https://6ca3c31cd443b8133af7226009438b05.cdn.bubble.io/f1709640028909x373867095233027200/Logo%20Completa%202024%20-%20Oficial.svg";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/">
            <div className="relative w-48 h-12">
              <Image 
                src={logoUrl} 
                alt="Conecta Laudos Logo" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">
            <Link href="#inicio" className="hover:text-brand transition-colors">Início</Link>
            <Link href="#servicos" className="hover:text-brand transition-colors">Serviços</Link>
            <Link href="#beneficios" className="hover:text-brand transition-colors">Benefícios</Link>
            <Link href="#sobre" className="hover:text-brand transition-colors">Sobre</Link>
            <Link href="#contato" className="bg-brand text-white px-6 py-2 rounded-full hover:bg-brand-hover transition-all">Solicitar Orçamento</Link>
          </nav>

          <button className="md:hidden text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="inicio" className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Laudos à Distância com <span className="text-brand">Precisão</span> e <span className="text-brand">Agilidade</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Soluções completas em Medicina Ocupacional e Clínica. Transforme a produtividade da sua empresa com tecnologia e excelência técnica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contato" className="bg-brand text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-hover transition-all text-center">
                  Falar com um Especialista
                </Link>
                <Link href="#servicos" className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-brand hover:text-brand transition-all text-center">
                  Conhecer Serviços
                </Link>
              </div>
            </div>
          </div>
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/5 -skew-x-12 transform translate-x-1/2 hidden lg:block"></div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
              <div className="w-20 h-1.5 bg-brand mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Medicina Ocupacional",
                  desc: "Gestão completa de laudos e exames complementares para empresas de todos os portes.",
                  icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                },
                {
                  title: "Telemedicina e Laudos",
                  desc: "Laudos de ECG, EEG, Espirometria e Acuidade Visual realizados por especialistas remotos.",
                  icon: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                },
                {
                  title: "Assessoria Técnica",
                  desc: "Suporte especializado para clínicas e empresas na implementação de processos ocupacionais.",
                  icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a5.971 5.971 0 0 0-.942 3.197m0 0a6.011 6.011 0 0 1-.036-.667c0-.22.012-.44.037-.656V18.72m0 0a9.094 9.094 0 0 1-3.741-.479 3 3 0 0 1 4.682-2.72M12 11.25a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Zm10.5 1.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-16.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                }
              ].map((service, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                  <div className="w-14 h-14 bg-brand/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand group-hover:text-white transition-colors">
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Por que escolher a Conecta Laudos?</h2>
                <p className="text-lg text-gray-600 mb-8">Nossa plataforma foi desenvolvida para oferecer a máxima eficiência, reduzindo custos e prazos de entrega.</p>
                
                <div className="space-y-6">
                  {[
                    { title: "Rapidez na Entrega", desc: "Laudos entregues em tempo recorde para não parar sua operação." },
                    { title: "Redução de Custos", desc: "Elimine custos fixos com especialistas locais e pague apenas por laudo." },
                    { title: "Excelência Técnica", desc: "Corpo clínico altamente qualificado e atualizado com as normas vigentes." },
                    { title: "Suporte Dedicado", desc: "Canal direto de atendimento para tirar todas as suas dúvidas." }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-brand rounded-full flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="bg-brand/10 w-full aspect-square rounded-3xl overflow-hidden relative border-4 border-brand/20 shadow-2xl">
                  {/* Decorative representation of a medical dashboard or expert */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-64 h-64 text-brand/20">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10 bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand">
                    <p className="italic text-gray-600">"A Conecta Laudos revolucionou nossa gestão de exames ocupacionais, trazendo agilidade e segurança jurídica."</p>
                    <p className="mt-4 font-bold text-gray-900">— Diretor Clínico, Unidade SP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-brand text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Sobre a Conecta Laudos</h2>
              <p className="text-xl leading-relaxed mb-10 text-white/90">
                Somos especialistas em aproximar a medicina de alta performance da rotina das empresas. Com uma infraestrutura tecnológica robusta e profissionais experientes, a Conecta Laudos nasceu para simplificar a emissão de laudos, garantindo rapidez sem abrir mão do rigor técnico necessário para a medicina ocupacional e clínica.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { val: "10k+", label: "Laudos/mês" },
                  { val: "500+", label: "Clientes" },
                  { val: "50+", label: "Especialistas" },
                  { val: "24h", label: "SLA Médio" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold mb-1">{stat.val}</div>
                    <div className="text-sm uppercase tracking-wider text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:row items-stretch">
              <div className="grid md:grid-cols-2">
                <div className="p-10 lg:p-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Solicite um Orçamento</h2>
                  <p className="text-gray-600 mb-10">Preencha o formulário abaixo e um de nossos consultores entrará em contato em breve.</p>
                  
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all" placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail Corporativo</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all" placeholder="email@empresa.com.br" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone/WhatsApp</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Qual serviço você procura?</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all bg-white">
                        <option>Medicina Ocupacional</option>
                        <option>Telemedicina (Laudos de ECG/EEG)</option>
                        <option>Espirometria</option>
                        <option>Outros</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full bg-brand text-white py-4 rounded-lg font-bold text-lg hover:bg-brand-hover transition-all shadow-lg shadow-brand/20">
                      Enviar Mensagem
                    </button>
                  </form>
                </div>
                <div className="bg-gray-900 p-10 lg:p-16 text-white flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brand">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <div>
                          <p className="font-semibold">E-mail</p>
                          <p className="text-gray-400">contato@conectalaudos.com.br</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brand">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <div>
                          <p className="font-semibold">Telefone</p>
                          <p className="text-gray-400">(11) 4003-0000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-bold">Siga-nos</p>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-colors cursor-pointer text-white">IN</div>
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-colors cursor-pointer text-white">IG</div>
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-colors cursor-pointer text-white">FB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="relative w-40 h-10">
              <Image 
                src={logoUrl} 
                alt="Conecta Laudos Logo" 
                fill 
                className="object-contain object-left opacity-80"
              />
            </div>
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Conecta Laudos. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm text-gray-500 font-medium">
              <Link href="#" className="hover:text-brand transition-colors">Termos de Uso</Link>
              <Link href="#" className="hover:text-brand transition-colors">Privacidade</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
