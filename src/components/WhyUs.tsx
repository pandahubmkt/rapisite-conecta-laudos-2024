'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Agilidade Inigualável",
    text: "Nossa média de entrega é de apenas algumas horas. Nunca deixe um paciente esperando."
  },
  {
    icon: Shield,
    title: "Segurança de Dados",
    text: "Plataforma 100% em conformidade com a LGPD e criptografia de ponta a ponta."
  },
  {
    icon: Users,
    title: "Corpo Clínico Premium",
    text: "Especialistas com registro no CRM em todos os estados, prontos para laudar."
  },
  {
    icon: Globe,
    title: "Tecnologia em Nuvem",
    text: "Acesse seus laudos de qualquer lugar, a qualquer hora, em qualquer dispositivo."
  }
];

export const WhyUs = () => {
  return (
    <section id="diferenciais" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Diferenciais Conecta</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
              Por que centenas de clínicas confiam na Conecta Laudos?
            </h3>
            
            <div className="space-y-8">
              {features.map((f, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <f.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-2">{f.title}</h4>
                    <p className="text-neutral-600 leading-relaxed">{f.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                    <div className="bg-white p-4 rounded-2xl shadow-xl border border-neutral-100">
                        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" alt="Hospital" className="rounded-xl w-full h-40 object-cover" />
                    </div>
                    <div className="bg-primary p-8 rounded-2xl shadow-xl text-white">
                        <p className="text-4xl font-bold mb-2">99%</p>
                        <p className="text-sm font-medium opacity-80 uppercase tracking-wide">Satisfação</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-neutral-900 p-8 rounded-2xl shadow-xl text-white">
                        <p className="text-4xl font-bold mb-2">+10k</p>
                        <p className="text-sm font-medium opacity-80 uppercase tracking-wide">Clínicas Atendidas</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-xl border border-neutral-100">
                        <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800" alt="Exame" className="rounded-xl w-full h-40 object-cover" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
