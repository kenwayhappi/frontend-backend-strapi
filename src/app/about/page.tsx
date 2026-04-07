import Link from "next/link";

export const metadata = {
  title: "À propos - WSC Digital",
  description: "Découvrez notre mission, notre méthodologie de travail et notre engagement qualité. WSC Digital est une agence premium à Douala spécialisée dans la transformation numérique.",
};

export default function About() {
  return (
    <div className="about-page">
      <section className="hero animate-fade-in" style={{ padding: '120px 0 80px', minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 64px)', marginBottom: '24px', fontWeight: 800 }}>
            Découvrez <span className="text-primary">WSC Digital</span>
          </h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto', opacity: 0.8, lineHeight: '1.6' }}>
            Transformons vos idées en solutions numériques innovantes. Nous concevons, développons et accompagnons nos partenaires vers le succès.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="highlights-grid">
            <div className="card glass">
              <span style={{ fontSize: '40px', display: 'block', marginBottom: '16px' }}>🎯</span>
              <h3 style={{ marginBottom: '16px' }}>Notre Mission</h3>
              <p style={{ opacity: 0.7, lineHeight: '1.6' }}>
                Accompagner les entreprises et particuliers au Cameroun et à l'international dans leur transition numérique en créant des applications web, mobiles et des infrastructures réseaux fiables, sécurisées et performantes.
              </p>
            </div>
            
            <div className="card glass">
              <span style={{ fontSize: '40px', display: 'block', marginBottom: '16px' }}>⚙️</span>
              <h3 style={{ marginBottom: '16px' }}>Notre Approche Agile</h3>
              <p style={{ opacity: 0.7, lineHeight: '1.6' }}>
                Nous privilégions une communication transparente. Vous suivez l'avancée de votre projet grâce à une méthode Agile : développement itératif, respect absolu des délais et implication du client.
              </p>
            </div>
            
            <div className="card glass">
              <span style={{ fontSize: '40px', display: 'block', marginBottom: '16px' }}>🛡️</span>
              <h3 style={{ marginBottom: '16px' }}>Notre Expertise Technique</h3>
              <p style={{ opacity: 0.7, lineHeight: '1.6' }}>
                De l'utilisation des dernières technologies comme Next.js, Node.js jusqu'aux CMS performants (Strapi) sans oublier une forte couche de sécurité pour les données de vos utilisateurs et une expérience premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Prêt à lancer <span className="text-primary">votre projet ?</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 40px', opacity: 0.7 }}>
            Que vous ayez besoin d'une simple visibilité ou d'une application de gestion complète, notre équipe est à votre écoute pour trouver la solution adaptée.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '16px 32px' }}>
              Nous Contacter
            </Link>
            <Link href="/solutions" className="btn btn-secondary" style={{ padding: '16px 32px' }}>
              Nos Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
