function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago, IL</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="button-primary">Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src="/hero-image.jpg" alt="Restaurant food" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
