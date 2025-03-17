import React from "react";
import chickpeas from '../assets/images/pulses/chickpeas.jpg';
import mung from '../assets/images/pulses/mung.jpeg';
import urad from '../assets/images/pulses/urad.jpg';
import toor from '../assets/images/pulses/toor.jpg';

export default function Pulses() {
  // Pulse data with local images, extra details, and price per kg
  const pulses = [
    { 
      name: "Chickpeas", 
      price: "₹100/kg", 
      image: chickpeas,
      farmer: "Farmer Sharma",
      place: "Punjab",
      details: "High-quality chickpeas perfect for chana masala."
    },
    { 
      name: "Mung Beans", 
      price: "₹90/kg", 
      image: mung,
      farmer: "Farmer Singh",
      place: "Haryana",
      details: "Organic mung beans, great for sprouting or dal."
    },
    { 
      name: "Urad Beans", 
      price: "₹110/kg", 
      image: urad,
      farmer: "Farmer Kapoor",
      place: "Gujarat",
      details: "Premium urad beans ideal for dal makhani."
    },
    { 
      name: "Toor Dal", 
      price: "₹95/kg", 
      image: toor,
      farmer: "Farmer Patel",
      place: "Maharashtra",
      details: "Commonly used in Indian dal recipes."
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Pulses Collection</h2>
      <div className="row">
        {pulses.map((pulse, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <img 
                src={pulse.image} 
                alt={pulse.name} 
                className="card-img-top" 
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{pulse.name}</h5>
                <p className="card-text text-success fw-bold text-center">{pulse.price}</p>
                <p className="card-text">
                  <strong>Farmer:</strong> {pulse.farmer}<br />
                  <strong>Place:</strong> {pulse.place}<br />
                  <strong>Details:</strong> {pulse.details}
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
