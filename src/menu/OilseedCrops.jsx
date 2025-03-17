import React from "react";
import mustard from '../assets/images/oilseedcrops/mustard.jpeg';
import groundnut from '../assets/images/oilseedcrops/groundnut.jpeg';
import soybean from '../assets/images/oilseedcrops/soybean.jpg';
import sesame from '../assets/images/oilseedcrops/sesame.jpeg';

export default function OilseedCrops() {
  // Data for oilseed crops with extra details and price per kg
  const crops = [
    { 
      name: "Mustard", 
      price: "₹90/kg", 
      image: mustard,
      farmer: "Farmer Verma",
      place: "Rajasthan",
      details: "Rich in flavor and widely used in Indian cooking."
    },
    { 
      name: "Groundnut", 
      price: "₹80/kg", 
      image: groundnut,
      farmer: "Farmer Singh",
      place: "Maharashtra",
      details: "A staple oilseed crop with high nutritional value."
    },
    { 
      name: "Soybean", 
      price: "₹70/kg", 
      image: soybean,
      farmer: "Farmer Patel",
      place: "Madhya Pradesh",
      details: "Versatile oilseed crop used in many food products."
    },
    { 
      name: "Sesame", 
      price: "₹110/kg", 
      image: sesame,
      farmer: "Farmer Kumar",
      place: "Tamil Nadu",
      details: "High quality sesame seeds used for oil extraction."
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Oilseed Crops Collection</h2>
      <div className="row">
        {crops.map((crop, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <img 
                src={crop.image} 
                alt={crop.name} 
                className="card-img-top" 
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{crop.name}</h5>
                <p className="card-text text-success fw-bold text-center">{crop.price}</p>
                <p className="card-text">
                  <strong>Farmer:</strong> {crop.farmer}<br />
                  <strong>Place:</strong> {crop.place}<br />
                  <strong>Details:</strong> {crop.details}
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
