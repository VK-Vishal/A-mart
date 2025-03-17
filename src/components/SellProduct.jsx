// SellProduct.jsx
import React, { useState } from "react";

function SellProduct({ onAddProduct }) {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  // Handle image selection and generate a preview (base64 URL)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new product object with a link based on the category
    const newProduct = {
      name: productName,
      category: category,
      price: price,
      details: details,
      link: `/${category.toLowerCase().replace(/\s/g, "")}`, // example link
      image: imagePreview || "https://via.placeholder.com/300x200?text=No+Image"
    };

    // Add new product to menu data via the parent callback
    onAddProduct(newProduct);

    // Clear form fields
    setProductName("");
    setCategory("");
    setPrice("");
    setDetails("");
    setImageFile(null);
    setImagePreview("");
  };

  return (
    <div className="card p-3 mb-4">
      <h2 className="mb-3">Sell Your Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input 
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select 
            id="category" 
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Grains">Grains</option>
            <option value="Pulses">Pulses</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Natural Fibers">Natural Fibers</option>
            <option value="Oilseed Crops">Oilseed Crops</option>
            <option value="Spices">Spices</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price (per kg or piece)</label>
          <input 
            type="text"
            className="form-control"
            id="price"
            placeholder="e.g., ₹100/kg"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="details" className="form-label">Details</label>
          <textarea
            className="form-control"
            id="details"
            rows="3"
            placeholder="Enter product details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Product Image</label>
          <input 
            type="file"
            className="form-control"
            id="image"
            onChange={handleImageChange}
            required
          />
        </div>
        {imagePreview && (
          <div className="mb-3">
            <img 
              src={imagePreview} 
              alt="Preview" 
              style={{ maxWidth: "100%", height: "200px", objectFit: "cover" }} 
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">Submit Product</button>
      </form>
    </div>
  );
}

export default SellProduct;
