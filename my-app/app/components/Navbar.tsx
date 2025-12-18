'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const pathname = usePathname();
  const isProductsPage = pathname === '/products';
  const isGrewCampaignPage = pathname === '/grewCampaign';
  const { language, setLanguage, t } = useLanguage();

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

  const getNavbarStyle = () => {
    if (isGrewCampaignPage) {
      // grewCampaign 페이지일 때 - 스크롤 시 배경색 변경
      if (scrolled) {
        return {
          background: 'rgba(255, 255, 255, 0.98)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)'
        };
      } else {
        return {
          background: 'transparent',
          boxShadow: 'none',
          backdropFilter: 'none'
        };
      }
    } else if (isProductsPage) {
      // products 페이지일 때
      if (scrolled) {
        return {
          background: 'rgba(255, 255, 255, 0.98)',
          boxShadow: 'none',
          backdropFilter: 'blur(10px)'
        };
      } else {
        return {
          background: 'rgba(255, 255, 255, 0.98)',
          boxShadow: 'none',
          backdropFilter: 'blur(10px)'
        };
      }
    } else {
      // 다른 페이지일 때
      return {
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none'
      };
    }
  };

  return (
    <nav
      className="navbar"
      style={getNavbarStyle()}
    >
      <div className="nav-container">
        <div className="logo">
          <Link
            href="/"
            style={{
              color: isProductsPage ? 'var(--text-primary)' : (isGrewCampaignPage ? (scrolled ? 'var(--text-primary)' : '#ffffff') : (scrolled ? 'var(--text-primary)' : '#ffffff')),
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <img src="/favicon.ico" alt="Logo" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
            (주)명성A&T
          </Link>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>

          <li>
            <Link
              href="/products"
              style={{ color: isProductsPage ? 'var(--text-primary)' : (isGrewCampaignPage ? (scrolled ? 'var(--text-primary)' : '#ffffff') : (scrolled ? 'var(--text-primary)' : '#ffffff')) }}
            >
              {t('nav.products')}
            </Link>
          </li>
          <li
            className="language-selector"
            onClick={() => setShowLanguages(!showLanguages)}
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
                style={{ color: isProductsPage ? 'var(--text-primary)' : (isGrewCampaignPage ? (scrolled ? 'var(--text-primary)' : '#ffffff') : (scrolled ? 'var(--text-primary)' : '#ffffff')) }}
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {showLanguages && (
                <div className="language-dropdown">
                  <button
                    className={`language-option ${language === 'ko' ? 'active' : ''}`}
                    onClick={() => setLanguage('ko')}
                  >
                    한국어
                  </button>
                  <button
                    className={`language-option ${language === 'en' ? 'active' : ''}`}
                    onClick={() => setLanguage('en')}
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </li>
        </ul>
        <div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            filter: isProductsPage ? 'none' : (isGrewCampaignPage ? (scrolled ? 'none' : 'brightness(0) invert(1)') : (scrolled ? 'none' : 'brightness(0) invert(1)'))
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
