import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { RESTAURANT_PHONE } from '../data';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    e.target.reset();

    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-5 bg-black text-light">
      <div className="container">
        <h2 className="display-5 fw-bold font-serif mb-5 text-center text-warning">Contact Us</h2>
        <div className="row g-5">
          {/* Info */}
          <div className="col-md-6">
            <div className="mb-4">
              <h3 className="fs-4 fw-semibold text-warning mb-2">Bismillah Restaurant</h3>
              <p className="text-light fs-5">Come dine with us and experience the best.</p>
            </div>
            <div className="d-flex align-items-start mb-4">
              <MapPin size={24} className="text-warning mt-1 flex-shrink-0 me-3" />
              <div>
                <h4 className="fs-5 fw-semibold text-white">Location</h4>
                <p className="text-light-50">Society Phase 1, Jamshoro, Sindh</p>
              </div>
            </div>
            <div className="d-flex align-items-start mb-4">
              <Phone size={24} className="text-warning mt-1 flex-shrink-0 me-3" />
              <div>
                <h4 className="fs-5 fw-semibold text-white">Call for Orders</h4>
                <a href={`tel:${RESTAURANT_PHONE}`} className="text-decoration-none text-light-50 hover-text-warning">{RESTAURANT_PHONE}</a>
              </div>
            </div>
            <div className="d-flex align-items-start mb-4">
              <Mail size={24} className="text-warning mt-1 flex-shrink-0 me-3" />
              <div>
                <h4 className="fs-5 fw-semibold text-white">Email Us</h4>
                <a href="mailto:info@bismillah-jamshoro.pk" className="text-decoration-none text-light-50 hover-text-warning">info@bismillah-jamshoro.pk</a>
              </div>
            </div>
  
          </div>
          
          {/* Form */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="bg-dark p-4 p-md-5 rounded-3 shadow-lg border border-warning border-opacity-25 position-relative">
              {/* success message */}
              {formSubmitted && (
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center rounded-3 z-index-2" style={{ backdropFilter: 'blur(2px)' }}>
                  <p className="text-warning fs-5 fw-semibold text-center p-4">Thank you! Your message has been sent.</p>
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-light mb-1">Name</label>
                <input type="text" id="name" name="name" required className="form-control bg-black text-white border-secondary" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light mb-1">Email</label>
                <input type="email" id="email" name="email" required className="form-control bg-black text-white border-secondary" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-light mb-1">Message</label>
                <textarea id="message" name="message" rows="5" required className="form-control bg-black text-white border-secondary"></textarea>
              </div>
              <button type="submit" className="w-100 btn btn-warning text-dark fw-bold py-3 rounded-pill shadow">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
