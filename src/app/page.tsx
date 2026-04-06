import Image from "next/image";
import Link from "next/link";
import { fetchStrapi } from "@/lib/strapi";

export default async function Home() {
  const strapiData = await fetchStrapi('home');
  const homeData = strapiData?.data;

  const heroTitle = homeData?.hero_title || "WSC Digital : Matérialisez vos pensées en un clic";
  const heroDesc = homeData?.hero_description || "Une entreprise innovante à Douala au service de votre transformation numérique. Expertise en Architecture, Comptabilité, Commerce et Informatique.";

  return (
    <div className="home-page">
      <section className="hero animate-fade-in">
        <div className="container hero-container">
          {/* Logo Section Left */}
          <div className="hero-image-container">
            <div className="hero-logo-aura">
              <Image 
                src="/logo.png" 
                alt="WSC Digital Branding" 
                width={550} 
                height={200} 
                priority
                className="logo-white"
                style={{ objectFit: 'contain', filter: 'invert(1) brightness(2) drop-shadow(0 0 40px rgba(0, 209, 255, 0.6))' }}
              />
            </div>
          </div>

          {/* Text Section Right */}
          <div className="hero-content">
            <h1 style={{ fontSize: '72px', marginBottom: '32px', lineHeight: '1.1', fontWeight: 800 }}>{heroTitle}</h1>
            <p style={{ fontSize: '22px', marginBottom: '56px', opacity: 0.8, maxWidth: '650px', lineHeight: '1.6' }}>{heroDesc}</p>
            <div className="hero-actions" style={{ display: 'flex', gap: '24px' }}>
              <Link href="/solutions" className="btn btn-primary" style={{ padding: '18px 40px' }}>
                Explorer Nos Solutions
              </Link>
              <Link href="/contact" className="btn btn-secondary" style={{ padding: '18px 40px' }}>
                Étudions Votre Projet
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about section" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Pourquoi <span className="text-primary">wscDigital</span> ?</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 80px', fontSize: '18px', opacity: 0.7 }}>
            Une expertise pluridisciplinaire au service de votre croissance numérique.
          </p>
          <div className="highlights-grid">
            <div className="card glass">
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '24px' }}>🛡️</span>
              <h3>Sécurité & Fiabilité</h3>
              <p style={{ fontSize: '14px', opacity: 0.7 }}>Des infrastructures robustes et des solutions logicielles sécurisées pour vos données.</p>
            </div>
            <div className="card glass">
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '24px' }}>⚡</span>
              <h3>Performance</h3>
              <p style={{ fontSize: '14px', opacity: 0.7 }}>Optimisation et rapidité pour une expérience utilisateur sans compromis.</p>
            </div>
            <div className="card glass">
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '24px' }}>💎</span>
              <h3>Premium</h3>
              <p style={{ fontSize: '14px', opacity: 0.7 }}>Un accompagnement personnalisé et des finitions de haute qualité.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
