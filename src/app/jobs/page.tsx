import { fetchStrapi } from "@/lib/strapi";
import JobsClient from "./JobsClient";

export default async function Jobs() {
  const strapiData = await fetchStrapi('job-offers');
  const jobs = strapiData?.data || [];

  return (
    <div className="jobs-page section">
      <div className="container">
        <h1 className="section-title">WSC Digital <span className="text-primary">Recrute</span></h1>
        <p style={{ textAlign: 'center', marginBottom: '60px', opacity: 0.7 }}>
          Postes à pourvoir à Douala : Stages et CDI.
        </p>
        
        <JobsClient initialJobs={jobs} />
      </div>
    </div>
  );
}
