import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {

  const handleLogin = () => {
    alert("Login Successful! Welcome to SmartPay Banking Portal.");
  };

  const handleReset = () => {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#0d5ea6",
          color: "white",
          padding: "15px",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        SmartPay Banking Portal
      </div>

      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "30px auto",
          backgroundColor: "white",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            width: "40%",
            padding: "30px",
          }}
        >
          <h2>Login</h2>

          <label>Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "15px",
            }}
          />

          <label>Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "15px",
            }}
          />

          <div style={{ marginTop: "20px" }}>
            <button
              onClick={handleLogin}
              style={{
                backgroundColor: "#0d5ea6",
                color: "white",
                border: "none",
                padding: "10px 20px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              Login
            </button>

            <button
              onClick={handleReset}
              style={{
                backgroundColor: "gray",
                color: "white",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Reset
            </button>
          </div>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link to="/signup">Sign Up</Link>

            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>
        </div>

        <div
          style={{
            width: "60%",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
            alt="Banking"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;