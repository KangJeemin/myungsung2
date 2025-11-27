'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import { useLanguage } from '../contexts/LanguageContext';
import './grewCampaign.css';

export default function GrewCampaign() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      
      <div id="grewCampaign">
        <div className="hero-image-section">
          <div className="hero-image-overlay">
            <div className="hero-text-content">
              <h1 className="hero-main-title">{t('grewCampaign.hero.mainTitle')}</h1>
              <h2 className="hero-sub-title">{t('grewCampaign.hero.subTitle')}</h2>
              <p className="hero-description">
                {t('grewCampaign.hero.description1')}<br />
                {t('grewCampaign.hero.description2')}
              </p>
            </div>
          </div>
          <img 
            src="/images/ESG.jpg" 
            alt="ESG 경영" 
            className="hero-background-image"
          />
        </div>
        
        <div className="grewCampaignWrap">
          <div className="textbox">
            <div className="sectionTitle text-center F-h3 Txt-fg">
              {t('grewCampaign.section.title')}
            </div>
            <div className="sectionDesc text-center F-p2 Txt-gray600">
              {t('grewCampaign.section.subtitle')}
            </div>
          </div>

          <div className="items">
            <div className="item">
              <div className="itemImg">
                <img src="https://cdn.fassto.ai/resources/imagesAbout/grew/grew_item_01.png" alt="친환경 자재" />
              </div>
              <div className="itemTitle F-h6 Txt-darker">{t('grewCampaign.items.item1.title')}</div>
              <div className="itemDesc F-p2 Txt-gray600">
                {t('grewCampaign.items.item1.desc')}
              </div>
            </div>

            <div className="item">
              <div className="itemImg">
                <img src="https://cdn.fassto.ai/resources/imagesAbout/grew/grew_item_02.png" alt="탄소 절감" />
              </div>
              <div className="itemTitle F-h6 Txt-darker">{t('grewCampaign.items.item2.title')}</div>
              <div className="itemDesc F-p2 Txt-gray600">
                {t('grewCampaign.items.item2.desc')}
              </div>
            </div>

            <div className="item">
              <div className="itemImg">
                <img src="https://cdn.fassto.ai/resources/imagesAbout/grew/grew_item_03.png" alt="숲 조성 활동" />
              </div>
              <div className="itemTitle F-h6 Txt-darker">{t('grewCampaign.items.item3.title')}</div>
              <div className="itemDesc F-p2 Txt-gray600">
                {t('grewCampaign.items.item3.desc')}
              </div>
            </div>

            <div className="item">
              <div className="itemImg">
                <img src="https://cdn.fassto.ai/resources/imagesAbout/grew/grew_item_04.png" alt="저전력 설비" />
              </div>
              <div className="itemTitle F-h6 Txt-darker">{t('grewCampaign.items.item4.title')}</div>
              <div className="itemDesc F-p2 Txt-gray600">
                {t('grewCampaign.items.item4.desc')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </>
  );
}

