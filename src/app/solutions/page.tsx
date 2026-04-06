import { fetchStrapi } from "@/lib/strapi";
import SolutionsClient from "./SolutionsClient";

export default async function Solutions() {
  const strapiData = await fetchStrapi('solutions');
  const solutions = strapiData?.data || [];

  return (
    <div className="solutions-page section">
      <div className="container">
        <h1 className="section-title">Nos <span className="text-primary">Solutions</span></h1>
        <p style={{ textAlign: 'center', marginBottom: '60px', opacity: 0.7 }}>
          Des outils innovants et adaptés aux réalités locales pour propulser votre entreprise.
        </p>
        
        <SolutionsClient initialSolutions={solutions} />
      </div>
    </div>
  );
}
