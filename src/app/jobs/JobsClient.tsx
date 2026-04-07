'use client';

import { useState } from "react";
import { getStrapiText, getStrapiImageUrl } from "@/lib/formatters";
import DetailsModal from "@/components/DetailsModal";

export default function JobsClient({ initialJobs }: { initialJobs: any[] }) {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (job: any) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="highlights-grid">
        {initialJobs.length > 0 ? (
          initialJobs.map((item: any, idx: number) => (
            <div 
              key={idx} 
              className="card glass animate-fade-in" 
              style={{ animationDelay: `${idx * 0.1}s`, cursor: 'pointer' }}
              onClick={() => openModal(item)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <span className="badge" style={{ 
                  background: 'rgba(56, 189, 248, 0.1)', 
                  color: 'var(--primary)', 
                  padding: '4px 12px', 
                  borderRadius: '20px', 
                  fontSize: '11px', 
                  fontWeight: 600,
                  border: '1px solid rgba(56, 189, 248, 0.2)'
                }}>
                  {item.type}
                </span>
                <span style={{ fontSize: '12px', opacity: 0.5 }}>
                  {item.publishedAt ? String(item.publishedAt).substring(0, 10) : ''}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p style={{ fontWeight: '500', marginBottom: '10px', color: 'var(--primary)' }}>📍 {item.location}</p>
              <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '20px' }}>
                {getStrapiText(item.description).substring(0, 100)}...
              </p>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', fontSize: '13px' }}
              >
                Voir l'offre
              </button>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>Aucune offre d'emploi disponible pour le moment.</p>
        )}
      </div>

      <div className="card glass" style={{ marginTop: '80px', textAlign: 'center', background: 'rgba(255,255,255,0.02)' }}>
        <h3 style={{ marginBottom: '16px' }}>Pourquoi nous rejoindre ?</h3>
        <p style={{ opacity: 0.7 }}>
          🚀 Entreprise innovante • Projets diversifiés • Environnement dynamique & collaboratif
        </p>
      </div>

      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedJob?.title || ""}
        date={selectedJob?.publishedAt}
        description={`Lieu: ${selectedJob?.location || 'Douala'}\nType: ${selectedJob?.type || 'Stage'}\n\n${getStrapiText(selectedJob?.description)}`}
        imageUrl={getStrapiImageUrl(selectedJob?.media)}
      />
    </>
  );
}
