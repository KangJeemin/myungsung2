'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function CareersContent() {
    const { t } = useLanguage();

    return (
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
                                <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 14v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                                <path d="M12 2v6m0 4v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                                <path d="M16 8l-8 8m0-8l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h3 className="talent-title ">{t('careers.talent.item2.title')}</h3>
                        <p className="talent-desc">
                            {t('careers.talent.item2.desc')}
                        </p>
                    </li>

                    <li className="talent-item">
                        <div className="talent-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="2" />
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
                                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="talent-title">{t('careers.talent.item5.title')}</h3>
                        <p className="talent-desc">
                            {t('careers.talent.item5.desc')}
                        </p>
                    </li>
                </ul>

                {/* Job Site Buttons */}
                <div className="job-site-section">
                    <h3 className="job-site-section-title">채용 공고 바로가기</h3>
                    <div className="job-site-buttons">
                        <a
                            href="https://www.saramin.co.kr/zf_user/company-info/view?csn=MUlaWnZiQUEycnBUOVhac2syeVdMQT09"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="job-site-button saramin"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            <span>사람인에서 지원하기</span>
                        </a>
                        <a
                            href="https://www.jobkorea.co.kr/Recruit/Co_Read/C/12544533"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="job-site-button jobkorea"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                                <path d="M20 8v6M23 11h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>잡코리아에서 지원하기</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
