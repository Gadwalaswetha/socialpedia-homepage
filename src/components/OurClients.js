import React from "react";
import "./OurClients.css";

const OurClients = () => {
  const clients = [
    "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-10.png",
    "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-17.png",
    "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-08.png",
    "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-04.png",
    "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-05.png",
    "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-12.png",
    "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-01.png",
    "https://stonepedia.in/wp-content/uploads/2024/10/%E0%AB%A7-06.png",
  ];

  return (
    <div className="clients-section" id="clients">
      <h2 className="section-title">Our Valuable Clients</h2>
      <div className="client-logos">
        {clients.map((client, index) => (
          <div className="client-card" key={index}>
            <img
              src={client}
              alt={`client ${index + 1}`}
              className="client-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
