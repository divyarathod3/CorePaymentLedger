import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("user");

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
          minHeight: "100vh",
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
  style={{
    width: "450px",
    backgroundColor: "#fff",
    padding: "35px",
    borderRadius: "15px",
    border: "2px solid #0f4c81",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  }}
>
          <div style={{ textAlign: "center", marginBottom: "25px" }}>
            <h2 style={{ color: "#0f4c81", marginBottom: "5px" }}>
              🏦 SmartPay Banking
            </h2>
    
        <p style={{ color: "#666" }}>
          Secure Internet Banking Portal
        </p>
      </div>
    
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "20px" }}>
          <label>
            <input
              type="radio"
              value="user"
              checked={loginType === "user"}
              onChange={() => setLoginType("user")}
            />
            User Login
          </label>
    
          <label style={{ marginLeft: "20px" }}>
            <input
              type="radio"
              value="admin"
              checked={loginType === "admin"}
              onChange={() => setLoginType("admin")}
            />
            Admin Login
          </label>
        </div>
    
        <div style={{ marginBottom: "15px" }}>
          <label>Username</label>
    
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />
        </div>
    
        <div style={{ marginBottom: "20px" }}>
          <label>Password</label>
    
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />
        </div>
    
        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#0f4c81",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "6px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          Login
        </button>
    
        <button
          type="button"
          onClick={handleReset}
          style={{
            width: "100%",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </form>
    
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Link
          to="/signup"
          style={{
            color: "#0f4c81",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Link>
    
        <Link
          to="/forgot-password"
          style={{
            color: "#0f4c81",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Forgot Password?
        </Link>
      </div>
    
      <div
        style={{
          marginTop: "25px",
          textAlign: "center",
          color: "#777",
          fontSize: "12px",
        }}
      >
        © 2026 SmartPay Banking Services
      </div>
    </div>
    
      </div>
    );
    
        
}

export default LoginPage;