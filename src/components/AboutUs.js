function AboutUs() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2>Little Lemon</h2>
            <h3>Chicago, IL</h3>
            <p>
              At Little Lemon, we bring the heart of the Mediterranean to Chicago. 
              Founded by two passionate chefs, our mission is to serve delicious, 
              honest food made with fresh, locally sourced ingredients. 
              Whether you’re joining us for a quick lunch or a relaxed evening out, 
              our warm atmosphere and flavorful dishes make every visit special.
            </p>
            <p>
              We believe in tradition, but we're not afraid to add a modern twist. 
              From house-made hummus to grilled seafood and vibrant salads, 
              every plate is crafted with care.
            </p>
          </div>
          <div className="about-images">
            <img src="/restaurant chef B.jpg" alt="Chef" />
            <img src="/restaurant.jpg" alt="Chef in kitchen" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutUs;