'use client';

import { useState } from "react";
import { getStrapiText } from "@/lib/strapi";
import DetailsModal from "@/components/DetailsModal";

export default function SolutionsClient({ initialSolutions }: { initialSolutions: any[] }) {
  const [selectedSolution, setSelectedSolution] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (solution: any) => {
    setSelectedSolution(solution);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="highlights-grid">
        {initialSolutions.length > 0 ? (
          initialSolutions.map((item: any, idx: number) => (
            <div 
              key={item.id} 
              className="card glass animate-fade-in" 
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => openModal(item)}
            >
              <div className="badge" style={{ 
                background: 'rgba(56, 189, 248, 0.1)', 
                color: 'var(--primary)', 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '11px', 
                fontWeight: 600,
                display: 'inline-block',
                marginBottom: '16px',
                border: '1px solid rgba(56, 189, 248, 0.2)'
              }}>
                Solution Logicielle
              </div>
              <h3>{item.name}</h3>
              <p style={{ opacity: 0.7, fontSize: '14px', marginBottom: '24px' }}>
                {getStrapiText(item.description).substring(0, 100)}...
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="text-primary" style={{ fontWeight: 700, fontSize: '18px' }}>
                  {item.price > 0 ? `${item.price.toLocaleString()} XAF` : 'Gratuit / Devis'}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1/-1', textAlign: 'center' }}>Aucune solution disponible.</p>
        )}
      </div>

      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedSolution?.name || ""}
        date={selectedSolution?.publishedAt}
        description={getStrapiText(selectedSolution?.description)}
        price={selectedSolution?.price}
      />
    </>
  );
}
