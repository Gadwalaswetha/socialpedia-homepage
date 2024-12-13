import React, { useState } from "react";
import "./Premium.css";

const ProductVariants = () => {
  const products = [
    {
      image:
        "https://stonepedia.in/wp-content/uploads/2024/10/peacock-green-QuartzUpdated.jpg",
      name: "Peacock Green Quartzite",
      price: "₹1.00 per sq/ft",
    },
    {
      image:
        "https://stonepedia.in/wp-content/uploads/2024/10/amazon-green-quartzite-01-.png",
      name: "Amazon Green Quartzite",
      price: "₹1.00 per sq/ft",
    },
    {
      image:
        "https://stonepedia.in/wp-content/uploads/2024/10/Kota-Brown-Sandstone-01-.png",
      name: "Kota Brown Sandstone",
      price: "₹1.00 per sq/ft",
    },
    {
      image:
        "https://stonepedia.in/wp-content/uploads/2024/10/chima-pink-granite-Custom.jpg",
      name: "Chima Pink",
      price: "₹1.00 per sq/ft",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectOptions = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="product-variants">
      <h2>Select a Product Variant</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-item" key={index}>
            <img src={product.image} class="image1" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleSelectOptions(product)}>
              Select Options
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="selected-product">
          <h3>You selected: {selectedProduct.name}</h3>
          <p>{selectedProduct.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductVariants;
