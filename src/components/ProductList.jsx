// ProductList.jsx
import React from "react";
import { Link } from "react-router-dom";

function ProductList({ menuData }) {
  return (
    <div>
      <h2 className="mt-4">Product Menu</h2>
      <div className="row">
        {menuData.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-success fw-bold">{item.price}</p>
                <p className="card-text">
                  <strong>Category:</strong> {item.category}<br />
                  <strong>Details:</strong> {item.details}
                </p>
                <Link to={item.link} className="btn btn-primary">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
