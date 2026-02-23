'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Stethoscope, Clock } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -z-10 w-[60%] h-[100%] bg-primary/5 rounded-bl-[100px] md:rounded-bl-[200px]" />
      <div className="absolute -top-24 -left-24 -z-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <ShieldCheck size={16} />
              <span>Líder em Telemedicina e Laudos à Distância</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-[1.1] mb-6">
              Sua Clínica com <span className="text-primary">Mais Agilidade</span> e Precisão.
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-xl">
              Entrega rápida de laudos médicos em Medicina Ocupacional e Clínica. 
              Tecnologia de ponta e especialistas qualificados para acelerar seus processos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-xl shadow-primary/20">
                <span>Quero Começar Agora</span>
                <ChevronRight size={20} />
              </button>
              <button className="bg-white border-2 border-neutral-200 hover:border-primary hover:text-primary text-neutral-700 px-8 py-4 rounded-xl text-lg font-bold transition-all">
                Ver Serviços
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white shadow-md rounded-lg text-primary">
                  <Clock size={20} />
                </div>
                <span className="text-sm font-medium text-neutral-600">Laudos em 24h</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white shadow-md rounded-lg text-primary">
                  <Stethoscope size={20} />
                </div>
                <span className="text-sm font-medium text-neutral-600">Especialistas</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
              {/* Using a placeholder for now since I don't have local assets, 
                  but the layout is premium. */}
              <div className="aspect-[4/5] bg-neutral-200 relative">
                 <Image 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
                    alt="Telemedicina"
                    fill
                    className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                 <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl">
                    <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-neutral-900">100% Homologado</p>
                            <p className="text-xs text-neutral-600">Conformidade com CFM e LGPD</p>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-neutral-100 hidden xl:block"
            >
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">500k+</span>
                <span className="text-xs font-medium text-neutral-500 text-center uppercase tracking-wider">Laudos Emitidos</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
