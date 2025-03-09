import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
                {/* Back Arrow Positioned to the Left */}
                <button 
                    className="btn btn-light mb-3 d-flex align-items-center"
                    onClick={() => navigate('/')}
                    style={{ position: "absolute", top: "15px", left: "15px" }}
                >
                    &#x2190; {/* Unicode for left arrow (←) */}
                </button>

                <h3 className="text-center mb-4">Sign Up</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter your full name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Create a password" required />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Sign Up</button>
                </form>
                <p className="text-center mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
