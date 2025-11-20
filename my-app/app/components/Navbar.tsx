'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className="navbar" 
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none'
      }}
    >
      <div className="nav-container">
        <div className="logo">
          <Link 
            href="/" 
            style={{ 
              color: scrolled ? 'var(--primary-color)' : '#ffffff'
            }}
          >
            FASSTO
          </Link>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, '#about')}
              style={{ color: scrolled ? 'var(--text-primary)' : '#ffffff' }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, '#services')}
              style={{ color: scrolled ? 'var(--text-primary)' : '#ffffff' }}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#solutions" 
              onClick={(e) => scrollToSection(e, '#solutions')}
              style={{ color: scrolled ? 'var(--text-primary)' : '#ffffff' }}
            >
              Solutions
            </a>
          </li>
          <li>
            <a 
              href="#careers" 
              onClick={(e) => scrollToSection(e, '#careers')}
              style={{ color: scrolled ? 'var(--text-primary)' : '#ffffff' }}
            >
              Careers
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              style={{ color: scrolled ? 'var(--text-primary)' : '#ffffff' }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            filter: scrolled ? 'none' : 'brightness(0) invert(1)'
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
