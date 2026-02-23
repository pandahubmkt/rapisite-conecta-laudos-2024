"use client";

import React from "react";
import Image from "next/image";
import { 
  ChevronRight, 
  Stethoscope, 
  ShieldCheck, 
  Zap, 
  Clock, 
  CheckCircle2, 
  Users, 
  Phone, 
  Menu, 
  X,
  FileText,
  Activity,
  HeartPulse
} from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const stats = [
    { label: "Laudos Entregues", value: "50k+" },
    { label: "Clínicas Atendidas", value: "200+" },
    { label: "Médicos Especialistas", value: "40+" },
    { label: "Tempo Médio", value: "24h" },
  ];

  const services = [
    {
      title: "Medicina Ocupacional",
      description: "Laudos especializados para NR-7, admissional, demissional e periódicos com agilidade extrema.",
      icon: <Users className="w-8 h-8 text-conecta-orange" />,
    },
    {
      title: "Laudos Clínicos",
      description: "Resultados precisos para exames de imagem e diagnósticos especializados por médicos renomados.",
      icon: <Stethoscope className="w-8 h-8 text-conecta-orange" />,
    },
    {
      title: "Telemedicina",
      description: "Consultoria e suporte médico à distância, conectando sua clínica aos melhores especialistas.",
      icon: <Activity className="w-8 h-8 text-conecta-orange" />,
    },
  ];

  const features = [
    {
      title: "Agilidade Real",
      description: "Entregamos a maioria dos laudos em menos de 24 horas úteis.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Segurança de Dados",
      description: "Total conformidade com a LGPD e protocolos de segurança hospitalar.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Suporte 24/7",
      description: "Nossa equipe está sempre disponível para tirar suas dúvidas e auxiliar nos processos.",
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://6ca3c31cd443b8133af7226009438b05.cdn.bubble.io/f1709640028909x373867095233027200/Logo%20Completa%202024%20-%20Oficial.svg" 
                alt="Conecta Laudos" 
                className="h-12 w-auto"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-conecta-gray-600 hover:text-conecta-orange transition-colors font-medium">Início</a>
              <a href="#servicos" className="text-conecta-gray-600 hover:text-conecta-orange transition-colors font-medium">Serviços</a>
              <a href="#sobre" className="text-conecta-gray-600 hover:text-conecta-orange transition-colors font-medium">Sobre Nós</a>
              <a 
                href="https://wa.me/5515998050051" 
                className="bg-conecta-orange text-white px-6 py-2.5 rounded-full font-semibold hover:bg-conecta-orange-dark transition-all shadow-lg shadow-conecta-orange/20"
              >
                Falar com Especialista
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-conecta-gray-600 p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-4"
          >
            <a href="#inicio" className="block text-conecta-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#servicos" className="block text-conecta-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#sobre" className="block text-conecta-gray-600 font-medium" onClick={() => setIsMenuOpen(false)}>Sobre Nós</a>
            <a href="https://wa.me/5515998050051" className="block bg-conecta-orange text-white text-center px-6 py-3 rounded-xl font-bold">Falar com Especialista</a>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block py-1 px-4 rounded-full bg-conecta-orange-light text-conecta-orange font-bold text-sm mb-6 border border-conecta-orange/10 uppercase tracking-wider">
                  Líder em Laudos à Distância
                </span>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-conecta-gray-900 leading-tight mb-6">
                  Agilidade e Precisão em <span className="text-gradient">Laudos Médicos</span>
                </h1>
                <p className="text-lg lg:text-xl text-conecta-gray-600 mb-10 max-w-lg leading-relaxed">
                  Conectamos sua clínica aos melhores especialistas para laudos de Medicina Ocupacional e Clínica. Tecnologia que salva tempo e vidas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/5515998050051" 
                    className="flex items-center justify-center gap-2 bg-conecta-orange text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-conecta-orange-dark transition-all shadow-xl shadow-conecta-orange/30 group"
                  >
                    Começar Agora
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#servicos" 
                    className="flex items-center justify-center gap-2 bg-white text-conecta-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all"
                  >
                    Ver Especialidades
                  </a>
                </div>
                
                <div className="mt-12 flex items-center gap-4 text-sm text-conecta-gray-600">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <p>Aprovado por mais de <strong>200 clínicas</strong> em todo o Brasil.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mt-16 lg:mt-0 relative"
              >
                <div className="relative z-10 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                    alt="Médico analisando laudo" 
                    className="rounded-2xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce-slow">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle2 className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Laudo Finalizado</p>
                      <p className="text-sm font-bold text-conecta-gray-900">Dr. Ricardo - Cardiologia</p>
                    </div>
                  </div>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-conecta-orange/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-conecta-orange/10 rounded-full blur-3xl -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-conecta-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-conecta-orange font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-24 bg-conecta-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-conecta-orange font-bold uppercase tracking-widest text-sm mb-4">Nossos Serviços</h2>
              <p className="text-4xl lg:text-5xl font-bold text-conecta-gray-900 mb-6">Soluções completas para sua clínica de saúde</p>
              <p className="text-lg text-conecta-gray-600">Oferecemos laudos com rigor técnico e rapidez tecnológica.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-3xl border border-gray-100 shadow-premium hover:shadow-premium-hover transition-all group"
                >
                  <div className="bg-conecta-orange-light w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-conecta-orange transition-colors">
                    <div className="group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-conecta-gray-900 mb-4">{service.title}</h3>
                  <p className="text-conecta-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <a href="https://wa.me/5515998050051" className="text-conecta-orange font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Saiba mais <ChevronRight size={18} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features / Why Us */}
        <section id="sobre" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
              <div>
                <h2 className="text-conecta-orange font-bold uppercase tracking-widest text-sm mb-4">Por que escolher a Conecta?</h2>
                <h3 className="text-4xl lg:text-5xl font-bold text-conecta-gray-900 mb-8 leading-tight">Excelência que gera resultados para sua clínica</h3>
                
                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-conecta-orange text-white rounded-xl flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-conecta-gray-900 mb-2">{feature.title}</h4>
                        <p className="text-conecta-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 lg:mt-0 grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="bg-conecta-orange-light p-4 rounded-3xl">
                    <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400" alt="Exame" className="rounded-2xl" />
                  </div>
                  <div className="bg-gray-100 p-8 rounded-3xl text-center">
                    <p className="text-4xl font-bold text-conecta-orange">100%</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Digital</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 p-8 rounded-3xl text-center">
                    <p className="text-4xl font-bold text-conecta-gray-900">24h</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Prazo Médio</p>
                  </div>
                  <div className="bg-conecta-orange-light p-4 rounded-3xl">
                    <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400" alt="Hospital" className="rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-conecta-orange rounded-[3rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl shadow-conecta-orange/30">
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Pronto para transformar a agilidade da sua clínica?</h2>
                <p className="text-xl text-white/90 mb-12">Entre em contato hoje mesmo e descubra como a Conecta Laudos pode ajudar seu negócio a crescer com segurança e qualidade.</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="https://wa.me/5515998050051" 
                    className="bg-white text-conecta-orange px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3"
                  >
                    <Phone className="w-6 h-6" /> Falar no WhatsApp
                  </a>
                  <a 
                    href="mailto:contato@conectalaudos.com.br" 
                    className="bg-conecta-orange-dark text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-conecta-orange/80 transition-all"
                  >
                    Enviar E-mail
                  </a>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-conecta-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="https://6ca3c31cd443b8133af7226009438b05.cdn.bubble.io/f1709640028909x373867095233027200/Logo%20Completa%202024%20-%20Oficial.svg" 
                alt="Conecta Laudos" 
                className="h-12 w-auto mb-8 brightness-0 invert"
              />
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                Referência nacional em laudos à distância e telemedicina para clínicas de medicina ocupacional e clínicas médicas.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#inicio" className="hover:text-conecta-orange transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-conecta-orange transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-conecta-orange transition-colors">Sobre Nós</a></li>
                <li><a href="https://wa.me/5515998050051" className="hover:text-conecta-orange transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-6">Contato</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3"><Phone size={18} className="text-conecta-orange" /> (15) 99805-0051</li>
                <li className="flex items-center gap-3"><HeartPulse size={18} className="text-conecta-orange" /> Atendimento Nacional</li>
                <li className="flex items-center gap-3"><FileText size={18} className="text-conecta-orange" /> contato@conectalaudos.com.br</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© 2024 Conecta Laudos. Todos os direitos reservados.</p>
            <p>Desenvolvido com excelência médica e tecnológica.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/5515998050051" 
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 group"
      >
        <Phone size={28} />
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-xl whitespace-nowrap">
          Precisa de ajuda?
        </span>
      </a>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
