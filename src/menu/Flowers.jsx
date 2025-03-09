import React from "react";
import rose from '../assets/images/flowers/rose.jpeg';
import jasmine from '../assets/images/flowers/jasmine.jpg';
import marigold from '../assets/images/flowers/marigold.jpg';
import tulip from '../assets/images/flowers/tulip.jpeg';

export default function Flowers() {
  // Flower data with local images, extra details, and price per kg
  const flowers = [
    { 
      name: "Rose", 
      price: "₹200/kg", 
      image: rose,
      farmer: "Farmer Raj",
      place: "Mumbai",
      details: "Fresh red roses from the garden."
    },
    { 
      name: "Jasmine", 
      price: "₹150/kg", 
      image: jasmine,
      farmer: "Farmer Sita",
      place: "Jaipur",
      details: "Fragrant jasmine flowers."
    },
    { 
      name: "Marigold", 
      price: "₹180/kg", 
      image: marigold,
      farmer: "Farmer Kumar",
      place: "Delhi",
      details: "Bright marigold used for decorations."
    },
    { 
      name: "Tulip", 
      price: "₹250/kg", 
      image: tulip,
      farmer: "Farmer Meera",
      place: "Kashmir",
      details: "Colorful tulips fresh from the fields."
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Flowers Collection</h2>
      <div className="row">
        {flowers.map((flower, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <img 
                src={flower.image} 
                className="card-img-top" 
                alt={flower.name} 
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{flower.name}</h5>
                <p className="card-text text-success fw-bold text-center">{flower.price}</p>
                <p className="card-text">
                  <strong>Farmer:</strong> {flower.farmer}<br />
                  <strong>Place:</strong> {flower.place}<br />
                  <strong>Details:</strong> {flower.details}
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
