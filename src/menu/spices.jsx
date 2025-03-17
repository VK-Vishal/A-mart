import React from "react";
import turmeric from '../assets/images/spices/turmeric.jpg';
import blackpepper from '../assets/images/spices/blackpepper.jpg';
import cardamom from '../assets/images/spices/cardamom.jpeg';
import cumin from '../assets/images/spices/cumin.jpeg';

export default function Spices() {
  // Data for spices with local images, extra details, and price per kg
  const spices = [
    { 
      name: "Turmeric", 
      price: "₹150/kg", 
      image: turmeric,
      farmer: "Farmer Kumar",
      place: "Maharashtra",
      details: "Organic turmeric with high curcumin content, perfect for curries."
    },
    { 
      name: "Black Pepper", 
      price: "₹200/kg", 
      image: blackpepper,
      farmer: "Farmer Ramesh",
      place: "Karnataka",
      details: "High-quality black pepper known for its pungent flavor and aroma."
    },
    { 
      name: "Cardamom", 
      price: "₹400/kg", 
      image: cardamom,
      farmer: "Farmer Sita",
      place: "Kerala",
      details: "Premium cardamom known for its intense aroma and flavor."
    },
    { 
      name: "Cumin", 
      price: "₹120/kg", 
      image: cumin,
      farmer: "Farmer Raj",
      place: "Gujarat",
      details: "High-quality cumin seeds ideal for adding warmth to dishes."
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Spices Collection</h2>
      <div className="row">
        {spices.map((spice, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <img 
                src={spice.image} 
                alt={spice.name} 
                className="card-img-top" 
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{spice.name}</h5>
                <p className="card-text text-success fw-bold text-center">{spice.price}</p>
                <p className="card-text">
                  <strong>Farmer:</strong> {spice.farmer}<br />
                  <strong>Place:</strong> {spice.place}<br />
                  <strong>Details:</strong> {spice.details}
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
