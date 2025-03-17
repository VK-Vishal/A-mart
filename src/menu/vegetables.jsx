import React from "react";
import potato from '../assets/images/vegetables/potato.jpg';
import tomato from '../assets/images/vegetables/tomato.jpeg';
import brinjal from '../assets/images/vegetables/brinjal.jpg';
import mirchi from '../assets/images/vegetables/mirchi.jpeg';

export default function Vegetables() {
  // Vegetable data with local images, extra details, and price per kg
  const vegetables = [
    { 
      name: "Potato", 
      price: "₹30/kg", 
      image: potato,
      farmer: "Farmer Kumar",
      place: "Pune",
      details: "Fresh and versatile potatoes."
    },
    { 
      name: "Tomato", 
      price: "₹40/kg", 
      image: tomato,
      farmer: "Farmer Ramesh",
      place: "Mumbai",
      details: "Juicy and ripe tomatoes."
    },
    { 
      name: "Brinjal", 
      price: "₹50/kg", 
      image: brinjal,
      farmer: "Farmer Sita",
      place: "Delhi",
      details: "Delicious and fresh brinjals."
    },
    { 
      name: "Mirchi", 
      price: "₹60/kg", 
      image: mirchi,
      farmer: "Farmer Raj",
      place: "Hyderabad",
      details: "Spicy green chilies, full of flavor."
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Vegetables Collection</h2>
      <div className="row">
        {vegetables.map((veg, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <img 
                src={veg.image} 
                className="card-img-top" 
                alt={veg.name} 
                style={{
                  height: "300px", 
                  width: "100%", 
                  objectFit: "cover"
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{veg.name}</h5>
                <p className="card-text text-success fw-bold text-center">{veg.price}</p>
                <p className="card-text">
                  <strong>Farmer:</strong> {veg.farmer}<br />
                  <strong>Place:</strong> {veg.place}<br />
                  <strong>Details:</strong> {veg.details}
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
