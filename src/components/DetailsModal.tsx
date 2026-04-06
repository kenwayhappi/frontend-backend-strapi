'use client';

import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  price?: number;
  description?: string;
  children?: React.ReactNode;
  icon?: string;
  date?: string;
}

const DetailsModal: React.FC<ModalProps> = ({ isOpen, onClose, title, price, description, children, date }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div 
        className="modal-content glass" 
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fadeIn 0.4s ease forwards' }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fermer">✕</button>
        
        <div className="modal-header" style={{ marginBottom: '32px' }}>
          {date && (
            <span style={{ 
              fontSize: '12px', 
              color: 'var(--primary)', 
              fontWeight: 600, 
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '8px'
            }}>
              Publié le {new Date(date).toLocaleDateString('fr-FR')}
            </span>
          )}
          <h2 style={{ fontSize: '32px', margin: 0 }}>{title}</h2>
          
          {price !== undefined && price > 0 && (
            <div className="price-tag" style={{ marginTop: '16px' }}>
              {price.toLocaleString()} XAF
            </div>
          )}
        </div>

        <div className="modal-body" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px', lineHeight: '1.7' }}>
          {description || children}
        </div>

        <div className="modal-footer" style={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
          <a 
            href={`https://wa.me/237678467728?text=Bonjour, je suis intéressé par : ${title}`}
            className="btn btn-primary" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ flex: 1, padding: '16px' }}
          >
            Contacter par WhatsApp
          </a>
          <button onClick={onClose} className="btn btn-secondary">
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
