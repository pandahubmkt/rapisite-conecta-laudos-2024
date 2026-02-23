'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ClipboardList, HeartPulse, Brain, Bone, Eye } from 'lucide-react';

const services = [
  {
    title: "Medicina Ocupacional",
    description: "Laudos para ASO, PCMSO e exames complementares obrigatórios.",
    icon: ClipboardList,
    items: ["Eletrocardiograma (ECG)", "Eletroencefalograma (EEG)", "Espirometria", "Acuidade Visual"]
  },
  {
    title: "Clínica Especializada",
    description: "Interpretação de exames de alta complexidade com foco diagnóstico.",
    icon: HeartPulse,
    items: ["Raio-X de Tórax (OIT)", "Mamografia", "Tomografia", "Ressonância Magnética"]
  }
];

const cards = [
    { icon: Brain, title: "Neurologia", text: "EEG clínico e ocupacional com análise técnica rigorosa." },
    { icon: Activity, title: "Cardiologia", text: "ECG laudado por especialistas com foco em prevenção." },
    { icon: Bone, title: "Radiologia", text: "RX OIT e convencional com alta qualidade de imagem." },
    { icon: Eye, title: "Oftalmologia", text: "Acuidade visual processada com rapidez e precisão." },
];

export const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Nossas Especialidades</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">Cobertura Completa para sua Clínica</h3>
          <p className="text-lg text-neutral-600">Oferecemos uma plataforma integrada para gestão de laudos, reduzindo custos operacionais e aumentando a produtividade da sua equipe médica.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-neutral-100 hover:shadow-xl transition-all group"
            >
              <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h4>
              <p className="text-neutral-600 mb-8">{service.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center space-x-2 text-neutral-700 font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:border-primary/50 transition-colors">
                    <card.icon className="text-primary mb-4" size={28} />
                    <h5 className="font-bold text-neutral-900 mb-2">{card.title}</h5>
                    <p className="text-sm text-neutral-500 leading-relaxed">{card.text}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
