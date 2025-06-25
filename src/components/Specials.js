function Specials() {
  return (
    <section className="specials-section">
      <div className="container">
        <div className="specials-header">
          <h2>This week's specials!</h2>
          <button className="button-primary">Online Menu</button>
        </div>

        <div className="specials-cards">
          {[
            {
              img: "/greek-salad.jpg",
              alt: "Greek Salad",
              title: "Greek Salad",
              price: "$12.99",
              description:
                "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            },
            {
              img: "/bruschetta.svg",
              alt: "Bruschetta",
              title: "Bruschetta",
              price: "$5.99",
              description:
                "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            },
            {
              img: "/lemon-dessert.jpg",
              alt: "Lemon Dessert",
              title: "Lemon Dessert",
              price: "$5.00",
              description:
                "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            },
          ].map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.alt} />
              <div className="card-content">
                <div className="card-title">
                  <h3>{item.title}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <button className="card-link">
                  Order a delivery
                  <img src="/basket.svg" alt="Basket icon" className="basket-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Specials;
