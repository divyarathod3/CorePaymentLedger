import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />
        <Route path="/dashboard" 
        element={<DashboardPage />} 
        />
        <div
  style={{
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  }}
>
  <button onClick={() => navigate("/transfer")}>
    💸 Transfer Money
  </button>

  <button onClick={() => navigate("/statement")}>
    📄 Mini Statement
  </button>

  <button onClick={() => navigate("/beneficiary")}>
    👤 Add Beneficiary
  </button>

  <button onClick={() => navigate("/bills")}>
    💳 Pay Bills
  </button>

  <button onClick={() => navigate("/profile")}>
    ⚙ Profile
  </button>
</div>

      </Routes>
    </BrowserRouter>
  );
}

export default App;