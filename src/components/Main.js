function Main() {
  return (
    <main>
      <section className="hero">
        <h1>Little Lemon</h1>
        <h2>Chicago, IL</h2>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
        <img src="/hero-image.jpg" alt="Restaurant food" />
      </section>

      <section className="specials">
        <h2>This week's specials!</h2>
        {/* Add your cards here */}
      </section>
    </main>
  );
}

export default Main;
