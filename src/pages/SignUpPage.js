import React from "react";
import { Link } from "react-router-dom";

function SignUpPage() {

  const handleSignup = () => {
    alert("Account Created Successfully!");
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
          width: "450px",
          margin: "40px auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2>Create New Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <button
          onClick={handleSignup}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#0d5ea6",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Create Account
        </button>

        <div style={{ marginTop: "15px" }}>
          <Link to="/">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;