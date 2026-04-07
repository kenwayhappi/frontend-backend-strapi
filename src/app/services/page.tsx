import { fetchStrapi } from "@/lib/strapi";
import ServicesClient from "./ServicesClient";

export default async function Services() {
  const strapiData = await fetchStrapi('services');
  const services = strapiData?.data || [];

  return (
    <div className="services-page section">
      <div className="container">
        <h1 className="section-title">Nos <span className="text-primary">Services</span></h1>
        <p style={{ textAlign: 'center', marginBottom: '60px', opacity: 0.7 }}>
          Découvrez notre gamme complète de services numériques et créatifs.
        </p>
        
        <ServicesClient initialServices={services} />
      </div>
    </div>
  );
}

// I'll actually rewrite the whole file to be a Client Component for the Modal state
// but we still want the SEO benefits of server-side fetch if possible.
// Let's do a Client Component for now as requested for the "effects" and interactivity.
