'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-neutral-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 transform origin-right translate-x-1/4 -z-0" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Contato</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8">Vamos transformar a operação da sua clínica?</h3>
            <p className="text-lg text-neutral-400 mb-12">
              Nossa equipe comercial está pronta para entender seus desafios e propor a melhor solução em laudos médicos.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                    <p className="text-xs text-neutral-500 uppercase font-bold">Telefone / WhatsApp</p>
                    <p className="text-lg font-medium">(11) 9999-9999</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                    <p className="text-xs text-neutral-500 uppercase font-bold">E-mail</p>
                    <p className="text-lg font-medium">contato@conectalaudos.com.br</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                    <p className="text-xs text-neutral-500 uppercase font-bold">Endereço</p>
                    <p className="text-lg font-medium">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] p-8 md:p-12 text-neutral-900 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">Nome Completo</label>
                  <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">E-mail Corporativo</label>
                  <input type="email" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="exemplo@clinica.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Nome da Clínica/Empresa</label>
                <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Qual o nome da sua clínica?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Mensagem</label>
                <textarea rows={4} className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Conte-nos como podemos ajudar..." />
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] shadow-xl shadow-primary/30">
                <span>Solicitar Demonstração</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
    return (
        <footer className="bg-neutral-950 text-neutral-500 py-12 border-t border-neutral-800">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <img 
                        src="https://6ca3c31cd443b8133af7226009438b05.cdn.bubble.io/f1709640028909x373867095233027200/Logo%20Completa%202024%20-%20Oficial.svg" 
                        alt="Conecta Laudos" 
                        className="h-10 opacity-80 brightness-0 invert"
                    />
                    <div className="flex space-x-8 text-sm font-medium">
                        <a href="#" className="hover:text-primary transition-colors">Termos</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-primary transition-colors">LGPD</a>
                    </div>
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Conecta Laudos. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};
