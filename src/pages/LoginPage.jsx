import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    if (!username || !password) {
      alert("Please enter Username and Password");
      return;
    }
  
    alert("Login Successful!");
  
    navigate("/dashboard");
  
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    alert("Form has been reset successfully.");
  };

  return (
    <div
      style={{
        backgroundColor: "#eaf2ff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "850px",
          background: "#fff",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#0d47a1",
            color: "white",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h2>🏦 SmartPay Internet Banking</h2>
        </div>

        <div
          style={{
            display: "flex",
            padding: "30px",
          }}
        >
          {/* Left Side */}
          <div style={{ flex: 1 }}>
            <h3 style={{ color: "#0d47a1" }}>Login</h3>

            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: "15px" }}>
                <label>Username</label>
                <br />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Username"
                  style={{
                    width: "90%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label>Password</label>
                <br />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  style={{
                    width: "90%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#0d47a1",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                Login
              </button>

              <button
                type="button"
                onClick={handleReset}
                style={{
                  backgroundColor: "#d32f2f",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Reset
              </button>
            </form>

            {/* Sign Up and Forgot Password Same Line */}
            <div style={{ marginTop: "20px" }}>
              <Link
                to="/signup"
                style={{
                  color: "#0d47a1",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Sign Up
              </Link>

              <span style={{ margin: "0 10px" }}>|</span>

              <Link
                to="/forgot-password"
                style={{
                  color: "#d32f2f",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
              alt="Banking"
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: "#f5f5f5",
            textAlign: "center",
            padding: "10px",
          }}
        >
          © 2026 SmartPay Banking Services
        </div>
      </div>
    </div>
  );
}

export default LoginPage;