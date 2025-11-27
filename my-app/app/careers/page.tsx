'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import { useLanguage } from '../contexts/LanguageContext';
import './careers.css';

export default function Careers() {
  const { t } = useLanguage();
  return (
    <>
      <Navbar />
      
      <main className="careers-page">
        {/* Page Hero */}
        <section className="page-hero">
          <div className="hero-image-wrapper">
            <img 
              src="/images/career.jpg" 
              alt="채용 안내" 
              className="hero-bg-image"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="container hero-content">
            <h1>{t('careers.hero.title')}</h1>
            <p>{t('careers.hero.subtitle')}</p>
          </div>
        </section>

        {/* Ideal Talent Section */}
        <section id="overview" className="section talent-section">
          <div className="container">
            <div className="section-title">
              <h2>{t('careers.talent.title')}</h2>
              <p>{t('careers.talent.subtitle')}</p>
            </div>

            <ul className="talent-list">
              <li className="talent-item">
                <div className="talent-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="talent-title">{t('careers.talent.item1.title')}</h3>
                <p className="talent-desc">
                  {t('careers.talent.item1.desc')}
                </p>
              </li>

              <li className="talent-item">
                <div className="talent-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2v6m0 4v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 8l-8 8m0-8l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="talent-title">{t('careers.talent.item2.title')}</h3>
                <p className="talent-desc">
                  {t('careers.talent.item2.desc')}
                </p>
              </li>

              <li className="talent-item">
                <div className="talent-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="talent-title">{t('careers.talent.item3.title')}</h3>
                <p className="talent-desc">
                  {t('careers.talent.item3.desc')}
                </p>
              </li>

              <li className="talent-item">
                <div className="talent-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="talent-title">{t('careers.talent.item4.title')}</h3>
                <p className="talent-desc">
                  {t('careers.talent.item4.desc')}
                </p>
              </li>

              <li className="talent-item">
                <div className="talent-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="talent-title">{t('careers.talent.item5.title')}</h3>
                <p className="talent-desc">
                  {t('careers.talent.item5.desc')}
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Job Posting Section */}
        <section id="job-posting" className="section job-section">
          <div className="container">
            <div className="section-title">
              <h2>{t('careers.job.title')}</h2>
              <p>{t('careers.job.subtitle')}</p>
            </div>

            <div className="cards-grid">
              <div className="card process-card">
                <h3>{t('careers.job.process.title')}</h3>
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <div className="step-info">
                      <h4 className="step-title">{t('careers.job.process.step1Title')}</h4>
                      <p className="step-desc">
                        {t('careers.job.process.step1Desc').split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            {i === 0 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="process-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <div className="process-step">
                    <div className="step-number">2</div>
                    <div className="step-info">
                      <h4 className="step-title">{t('careers.job.process.step2Title')}</h4>
                      <p className="step-desc">
                        {t('careers.job.process.step2Desc').split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            {i === 0 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="process-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <div className="process-step">
                    <div className="step-number">3</div>
                    <div className="step-info">
                      <h4 className="step-title">{t('careers.job.process.step3Title')}</h4>
                      <p className="step-desc">
                        {t('careers.job.process.step3Desc').split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            {i === 0 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card application-card">
                <h3>{t('careers.job.application.title')}</h3>
                <div className="application-info">
                  <div className="info-item">
                    <div className="info-label">{t('careers.job.application.email')}</div>
                    <div className="info-value">sales@msant.co.kr</div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">{t('careers.job.application.phone')}</div>
                    <div className="info-value">043-715-9580</div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">{t('careers.job.application.documents')}</div>
                    <div className="info-value">
                      {t('careers.job.application.doc1')}<br />
                      {t('careers.job.application.doc2')}<br />
                      {t('careers.job.application.doc3')}
                    </div>
                  </div>
                </div>
                
                <div className="job-site-links">
                  <p className="job-site-title">{t('careers.job.application.jobSites')}</p>
                  <div className="job-site-buttons">
                    <a 
                      href="https://www.saramin.co.kr/zf_user/company-info/view?csn=MUlaWnZiQUEycnBUOVhac2syeVdMQT09" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="job-site-button saramin"
                    >
                      <span>{t('careers.job.application.saramin')}</span>
                    </a>
                    <a 
                      href="https://www.jobkorea.co.kr/Recruit/Co_Read/C/12544533" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="job-site-button jobkorea"
                    >
                      <span>{t('careers.job.application.jobkorea')}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card interview-card">
                <h3>{t('careers.job.interview.title')}</h3>
                <p className="interview-desc">
                  {t('careers.job.interview.desc')}
                </p>
                <ul className="interview-tips">
                  <li>{t('careers.job.interview.tip1')}</li>
                  <li>{t('careers.job.interview.tip2')}</li>
                  <li>{t('careers.job.interview.tip3')}</li>
                  <li>{t('careers.job.interview.tip4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section benefits-section">
          <div className="container">
            <div className="section-title">
              <h2>{t('careers.benefits.title')}</h2>
              <p>{t('careers.benefits.subtitle')}</p>
            </div>

            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h4>{t('careers.benefits.item1Title')}</h4>
                <p>{t('careers.benefits.item1Desc')}</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🏥</div>
                <h4>{t('careers.benefits.item2Title')}</h4>
                <p>{t('careers.benefits.item2Desc')}</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📚</div>
                <h4>{t('careers.benefits.item3Title')}</h4>
                <p>{t('careers.benefits.item3Desc')}</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🌴</div>
                <h4>{t('careers.benefits.item4Title')}</h4>
                <p>{t('careers.benefits.item4Desc')}</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🎉</div>
                <h4>{t('careers.benefits.item5Title')}</h4>
                <p>{t('careers.benefits.item5Desc')}</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🎁</div>
                <h4>{t('careers.benefits.item6Title')}</h4>
                <p>{t('careers.benefits.item6Desc')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

