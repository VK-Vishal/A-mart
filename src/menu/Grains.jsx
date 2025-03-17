import React from "react";
import millet from '../assets/images/grains/millet.jpeg';
import ragi from '../assets/images/grains/ragi.jpg';
import paddy from '../assets/images/grains/paddy.jpeg';
import wheat from '../assets/images/grains/wheat.jpeg';

export default function Grains() {
  // Grain data with local images, extra details, and price per kg
  const grains = [
    { 
      name: "Millet", 
      price: "₹70/kg", 
      image: millet,
      farmer: "Farmer Sharma",
      place: "Rajasthan",
      details: "Nutritious millet, rich in fiber and minerals."
    },
    { 
      name: "Ragi", 
      price: "₹80/kg", 
      image: ragi,
      farmer: "Farmer Patel",
      place: "Karnataka",
      details: "Organic ragi, high in calcium and iron."
    },
    { 
      name: "Paddy", 
      price: "₹50/kg", 
      image: paddy,
      farmer: "Farmer Kumar",
      place: "West Bengal",
      details: "Premium paddy, ideal for quality rice production."
    },
    { 
      name: "Wheat", 
      price: "₹40/kg", 
      image: wheat,
      farmer: "Farmer Singh",
      place: "Haryana",
      details: "High-quality wheat for everyday use."
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Grains Collection</h2>
      <div className="row">
        {grains.map((grain, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <img 
                src={grain.image} 
                className="card-img-top" 
                alt={grain.name} 
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{grain.name}</h5>
                <p className="card-text text-success fw-bold text-center">{grain.price}</p>
                <p className="card-text">
                  <strong>Farmer:</strong> {grain.farmer}<br />
                  <strong>Place:</strong> {grain.place}<br />
                  <strong>Details:</strong> {grain.details}
                </p>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
