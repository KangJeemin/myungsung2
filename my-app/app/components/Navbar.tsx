'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

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
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
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
            MYUNGSUNG
          </Link>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <a 
              href="#top" 
              onClick={(e) => scrollToSection(e, 'top')}
              style={{ color: scrolled ? 'var(--text-primary)' : '#ffffff' }}
            >
              회사소개
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, '#services')}
              style={{ color: scrolled ? 'var(--text-primary)' : '#ffffff' }}
            >
              제품소개
            </a>
          </li>
         
          <li>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              style={{ color: scrolled ? 'var(--text-primary)' : '#ffffff' }}
            >
              문의하기
            </a>
          </li>
          <li 
            className="language-selector"
            onMouseEnter={() => setShowLanguages(true)}
            onMouseLeave={() => setShowLanguages(false)}
          >
            <div className="language-icon-wrapper">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ color: scrolled ? 'var(--text-primary)' : '#ffffff' }}
              >
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              {showLanguages && (
                <div className="language-dropdown">
                  <button className="language-option">한국어</button>
                  <button className="language-option">English</button>
                </div>
              )}
            </div>
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
