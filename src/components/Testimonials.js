// Testimonials.js
import React from 'react';

function Testimonials() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">Testimonial</h2>
      <div className="testimonial-grid">

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <div className="profile-row">
            <img src="https://randomuser.me/api/portraits/women/42.jpg" alt="Diana Saldana" className="profile-img"/>
            <p className="profile-name">Diana Saldana</p>
          </div>
          <p className="testimonial-text">
            A cozy Mediterranean bistro blending traditional recipes with a modern twist.
          </p>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐</div>
          <div className="profile-row">
            <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Maria Rossi" className="profile-img"/>
            <p className="profile-name">Maria Rossi</p>
          </div>
          <p className="testimonial-text">
            Loved the grilled seafood and warm ambiance. I’ll definitely come back!
          </p>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐⭐</div>
          <div className="profile-row">
            <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="Alex Johnson" className="profile-img"/>
            <p className="profile-name">Alex Johnson</p>
          </div>
          <p className="testimonial-text">
            Authentic flavors and super friendly staff — amazing experience.
          </p>
        </div>

        <div className="testimonial-card">
          <div className="stars">⭐⭐⭐</div>
          <div className="profile-row">
            <img src="https://randomuser.me/api/portraits/men/84.jpg" alt="Chen Wei" className="profile-img"/>
            <p className="profile-name">Chen Wei</p>
          </div>
          <p className="testimonial-text">
            A modern twist on tradition done right. Highly recommend the bruschetta!
          </p>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;