import React from "react";
import apple from '../assets/images/fruits/apples.jpg';
import banana from '../assets/images/fruits/banana.jpeg';
import mango from '../assets/images/fruits/mango.jpeg';
import grapes from '../assets/images/fruits/grapes.jpeg';

export default function Fruits() {
  // Fruit data with local images, extra details, and price per kg
  const fruits = [
    { 
      name: "Apple", 
      price: "₹120/kg", 
      image: apple,
      farmer: "Farmer Singh",
      place: "Shimla",
      details: "Fresh and juicy red apples."
    },
    { 
      name: "Banana", 
      price: "₹50/kg", 
      image: banana,
      farmer: "Farmer Kumar",
      place: "Kerala",
      details: "Sweet bananas rich in potassium."
    },
    { 
      name: "Mango", 
      price: "₹180/kg", 
      image: mango,
      farmer: "Farmer Ramesh",
      place: "Uttar Pradesh",
      details: "Delicious, seasonal mangoes."
    },
    { 
      name: "Grapes", 
      price: "₹90/kg", 
      image: grapes,
      farmer: "Farmer Raj",
      place: "Maharashtra",
      details: "Fresh grapes perfect for snacking."
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Fruits Collection</h2>
      <div className="row">
        {fruits.map((fruit, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <img 
                src={fruit.image} 
                className="card-img-top" 
                alt={fruit.name} 
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{fruit.name}</h5>
                <p className="card-text text-success fw-bold text-center">{fruit.price}</p>
                <p className="card-text">
                  <strong>Farmer:</strong> {fruit.farmer}<br />
                  <strong>Place:</strong> {fruit.place}<br />
                  <strong>Details:</strong> {fruit.details}
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
