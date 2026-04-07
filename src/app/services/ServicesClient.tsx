'use client';

import { useState } from "react";
import { getStrapiText, getStrapiImageUrl } from "@/lib/formatters";
import DetailsModal from "@/components/DetailsModal";

export default function ServicesClient({ initialServices }: { initialServices: any[] }) {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="highlights-grid">
        {initialServices.length > 0 ? (
          initialServices.map((item: any, idx: number) => (
            <div 
              key={idx} 
              className="card glass animate-fade-in" 
              style={{ animationDelay: `${idx * 0.1}s`, cursor: 'pointer' }}
              onClick={() => openModal(item)}
            >
              <div className="icon" style={{ fontSize: '32px', marginBottom: '20px' }}>
                {item.icon || '🛠️'}
              </div>
              <span style={{ fontSize: '12px', color: 'var(--primary)', opacity: 0.8 }}>
                {item.publishedAt ? String(item.publishedAt).substring(0, 10) : ''}
              </span>
              <h3 style={{ marginTop: '10px' }}>{item.title}</h3>
              <p style={{ opacity: 0.7, fontSize: '14px' }}>
                {getStrapiText(item.description).substring(0, 100)}...
              </p>
              <button 
                className="btn btn-secondary" 
                style={{ marginTop: '24px', width: '100%', fontSize: '13px' }}
              >
                Détails
              </button>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1/-1', textAlign: 'center' }}>Aucun service disponible.</p>
        )}
      </div>

      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedService?.title || ""}
        date={selectedService?.publishedAt}
        description={getStrapiText(selectedService?.description)}
        price={selectedService?.price}
        imageUrl={getStrapiImageUrl(selectedService?.media)}
      />
    </>
  );
}
