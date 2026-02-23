'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = "https://6ca3c31cd443b8133af7226009438b05.cdn.bubble.io/f1709640028909x373867095233027200/Logo%20Completa%202024%20-%20Oficial.svg";

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Diferenciais', href: '#diferenciais' },
  { name: 'Contato', href: '#contato' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="relative w-[180px] h-[50px]">
          <Image 
            src={LOGO_URL} 
            alt="Conecta Laudos" 
            fill
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-800 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contato"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg"
          >
            Falar com Especialista
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-neutral-800 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-neutral-100 p-6 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-neutral-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contato"
              className="bg-primary text-white text-center px-6 py-3 rounded-lg text-lg font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Falar com Especialista
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
