import React, { useState } from 'react';
import { Phone, Clock, Menu as MenuIcon, X } from 'lucide-react';
import { RESTAURANT_PHONE, DINE_IN_HOURS} from '../data';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on link click
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar navbar-expand-md navbar-dark bg-dark sticky-top shadow-lg 
    border-bottom border-warning border-opacity-25">
      <div className="container">
        <a href="#home" className="navbar-brand fs-3 fw-bold text-warning font-serif">
          Bismillah Restaurant
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="navbarNav" 
          aria-expanded={isMobileMenuOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu (Desktop & Mobile Collapse) */}
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a href="#home" className="nav-link text-white" 
              onClick={handleMobileLinkClick}>Home</a></li>
            <li className="nav-item"><a href="#menu" className="nav-link text-white" 
              onClick={handleMobileLinkClick}>Menu</a></li>
            <li className="nav-item"><a href="#reviews" className="nav-link text-white" 
              onClick={handleMobileLinkClick}>Reviews</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link text-white" 
              onClick={handleMobileLinkClick}>Contact</a></li>
          </ul>
          
          {/* Info & CTA (Desktop/Mobile) */}
          <div className="d-flex align-items-center mt-3 mt-md-0">
            <div className="d-none d-lg-block text-end me-3" style={{ fontSize: '0.85rem' }}>
              <div className="d-flex align-items-center justify-content-end text-white">
                <Clock size={14} className="me-1 text-warning" />
                <strong>Hours</strong> {DINE_IN_HOURS}
              </div>
            </div>
            <a href={`tel:${RESTAURANT_PHONE}`} className="btn btn-warning text-dark 
              fw-bold rounded-pill shadow d-flex align-items-center py-2 px-3">
              <Phone size={18} className="me-2" />
              <span>Order Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;