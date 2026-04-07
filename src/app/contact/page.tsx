import { fetchStrapi } from "@/lib/strapi";
import ContactForm from "@/components/ContactForm";

export default async function Contact() {
  const strapiData = await fetchStrapi('contact');
  const contact = strapiData?.data;

  // Fallbacks if backend is empty
  const email = contact?.email || "info@wscdigital.space";
  const phone = contact?.phone || "+237 6 78 46 77 28";
  const address = contact?.address || "Makepe derrière Tradex face Parcours Vita, Bonamoussadi, Douala, Cameroun";

  return (
    <div className="contact-page section">
      <div className="container">
        <h1 className="section-title">Démarrons votre <span className="text-primary">Transformation</span></h1>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          <div className="contact-info">
            <h3>Nos Coordonnées</h3>
            <p style={{ marginBottom: '30px', opacity: 0.8 }}>Nous sommes basés à Douala pour vous accompagner localement et internationalement.</p>
            
            <div style={{ marginBottom: '15px' }}>
              <strong>📍 Adresse :</strong>
              <p>{address}</p>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <strong>📞 Téléphone :</strong>
              <p>{phone}</p>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <strong>📧 Email :</strong>
              <p>{email}</p>
            </div>

            {contact?.google_maps_link && (
              <div style={{ marginBottom: '15px' }}>
                <strong>🌐 Plan :</strong>
                <p><a href={contact.google_maps_link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Voir sur Google Maps</a></p>
              </div>
            )}
          </div>
          <div className="card glass animate-fade-in">
            <h3 style={{ marginBottom: '20px' }}>Envoyez-nous un message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
