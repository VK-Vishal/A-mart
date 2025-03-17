import React from "react";
import cotton from '../assets/images/naturalfibers/cotton.jpeg';
import jute from '../assets/images/naturalfibers/jute.jpeg';
import coir from '../assets/images/naturalfibers/coir.jpg';
import bamboo from '../assets/images/naturalfibers/bamboo.jpeg';

export default function NaturalFibers() {
  // Data for natural fibers with extra details and price per kg
  const fibers = [
    { 
      name: "Cotton", 
      price: "₹200/kg", 
      image: cotton,
      producer: "Farmer Patel",
      place: "Maharashtra",
      details: "High-quality cotton that is soft, breathable, and ideal for textiles."
    },
    { 
      name: "Jute", 
      price: "₹150/kg", 
      image: jute,
      producer: "Farmer Das",
      place: "West Bengal",
      details: "Durable, eco-friendly jute fibers perfect for bags and packaging."
    },
    { 
      name: "Coir", 
      price: "₹120/kg", 
      image: coir,
      producer: "Farmer Kumar",
      place: "Kerala",
      details: "Natural coir fiber ideal for making mats, ropes, and brushes."
    },
    { 
      name: "Bamboo Fiber", 
      price: "₹180/piece", 
      image: bamboo,
      producer: "Farmer Sharma",
      place: "Assam",
      details: "Eco-friendly bamboo fiber used in sustainable textiles."
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Natural Fibers Collection</h2>
      <div className="row">
        {fibers.map((fiber, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <img 
                src={fiber.image} 
                alt={fiber.name} 
                className="card-img-top" 
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{fiber.name}</h5>
                <p className="card-text text-success fw-bold text-center">{fiber.price}</p>
                <p className="card-text">
                  <strong>Producer:</strong> {fiber.producer}<br />
                  <strong>Place:</strong> {fiber.place}<br />
                  <strong>Details:</strong> {fiber.details}
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
