import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer animate-fade-in">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-logo" style={{ marginBottom: '24px' }}>
            <Image src="/logo.png" alt="WSC Digital" width={150} height={50} className="logo-white" />
          </div>
          <p>Matérialisez vos pensées en un clic. Votre partenaire de confiance pour la transformation numérique au Cameroun.</p>
        </div>

        <div className="footer-col">
          <h4>Liens Rapides</h4>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">À propos</Link></li>
            <li><Link href="/services">Nos Services</Link></li>
            <li><Link href="/jobs">Recrutement</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li>CLINICAM (Santé)</li>
            <li>WSC SCHOOL (Scolaire)</li>
            <li>Design & Marketing</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Direct</h4>
          <p>📞 +237 6 78 46 77 28 (WA)</p>
          <p>📧 info@wscdigital.space</p>
          <p>📍 Bonamoussadi – Parcours Vita, Douala</p>
        </div>
      </div>
      <div className="container" style={{ borderTop: '1px solid var(--border)', paddingTop: '30px', textAlign: 'center', opacity: 0.5, fontSize: '12px' }}>
        <p>&copy; {new Date().getFullYear()} WSC Digital. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
