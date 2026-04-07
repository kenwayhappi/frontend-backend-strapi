'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Nouveau message depuis le site WSC Digital :\n\nNom: ${name}\nEmail: ${email}\nMessage:\n${message}`;
    const url = `https://wa.me/237678467728?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <input 
        type="text" 
        placeholder="Votre nom" 
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--foreground)', outline: 'none' }} 
      />
      <input 
        type="email" 
        placeholder="Votre email" 
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--foreground)', outline: 'none' }} 
      />
      <textarea 
        placeholder="Votre message" 
        rows={5} 
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--foreground)', fontFamily: 'inherit', resize: 'vertical', outline: 'none' }}
      ></textarea>
      <button type="submit" className="btn btn-primary" style={{ padding: '15px' }}>
        Envoyer via WhatsApp
      </button>
    </form>
  );
}
