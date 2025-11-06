import React from 'react'
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark border-top border-warning border-opacity-25 py-4">
      <div className="container text-center text-light-50">
         <div className="d-flex justify-content-center gap-4 mb-4">
           <a href="#" className="text-light hover-text-warning" aria-label="Facebook">
              <Facebook size={24} />
           </a>
           <a href="#" className="text-light hover-text-warning" aria-label="Instagram">
            <Instagram size={24} />
           </a>
         </div>
         <p>&copy; {new Date().getFullYear()} Bismillah Restaurent. All Rights Reserved.</p>
         <p>Society Phase 1, Jamshoro</p>
      </div>
    </footer>
  );
};

export default Footer
