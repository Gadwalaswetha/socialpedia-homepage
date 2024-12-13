import React from "react";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Sand Stone",
      image: "https://stonepedia.in/wp-content/uploads/2024/10/1-07-1.png",
    },
    {
      id: 2,
      name: "Granite",
      image: "https://stonepedia.in/wp-content/uploads/2024/10/ig-01.png",
    },
    {
      id: 3,
      name: "Onyx",
      image: "https://stonepedia.in/wp-content/uploads/2024/10/on-01.png",
    },
    {
      id: 4,
      name: "Quartz",
      image: "https://stonepedia.in/wp-content/uploads/2024/10/q-01.png",
    },
    {
      id: 5,
      name: "Marble",
      image: "https://stonepedia.in/wp-content/uploads/2024/10/im-01.png",
    },
  ];

  return (
    <section className="featured-products" id="products">
      <h2>Our Featured Stones</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
