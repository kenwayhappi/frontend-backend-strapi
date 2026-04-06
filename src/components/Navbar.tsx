'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <Link href="/" className="logo-container">
          <Image 
            src="/logo.png" 
            alt="wscDigital Logo" 
            width={240} 
            height={80} 
            priority
            className="logo-white"
            style={{ objectFit: 'contain' }}
          />
        </Link>
        
        {/* Backdrop for mobile */}
        {isOpen && (
          <div 
            className="mobile-backdrop" 
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0, left: 0, width: '100vw', height: '100vh',
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
              zIndex: 1999
            }}
          />
        )}

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
          style={{ position: 'relative', zIndex: 2005 }}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
          <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="/solutions" onClick={() => setIsOpen(false)}>Solutions</Link></li>
          <li><Link href="/jobs" onClick={() => setIsOpen(false)}>Recrutement</Link></li>
          <li style={{ marginTop: '10px' }}>
            <Link href="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ width: '100%' }}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
