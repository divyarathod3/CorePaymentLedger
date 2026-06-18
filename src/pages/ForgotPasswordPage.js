import React from "react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {

  const handleReset = () => {
    alert("Password Reset Link Sent Successfully!");
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
          width: "400px",
          margin: "50px auto",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2>Reset Password</h2>

        <input
          type="email"
          placeholder="Enter Registered Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <button
          onClick={handleReset}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#0d5ea6",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Reset Link
        </button>

        <div style={{ marginTop: "15px" }}>
          <Link to="/">Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;