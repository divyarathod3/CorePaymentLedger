import React from "react";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#0d47a1",
          color: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>🏦 SmartPay Dashboard</h2>
        <button
          style={{
            backgroundColor: "#d32f2f",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <button
   onClick={() => {
    alert("Logged out successfully!");
    navigate("/");
  }}
  style={{
    backgroundColor: "#d32f2f",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  }}
>
  Logout
</button>
        </button>
      </div>

      {/* Welcome */}
      <div style={{ padding: "30px" }}>
        <h2>Welcome, Divya 👋</h2>
        <p>Manage your banking services here.</p>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              width: "250px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Account Balance</h3>
            <h2>₹50,000</h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              width: "250px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Total Transactions</h3>
            <h2>128</h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              width: "250px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Reward Points</h3>
            <h2>450</h2>
          </div>
        </div>

        {/* Recent Transactions */}
        <div
          style={{
            background: "white",
            marginTop: "30px",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Recent Transactions</h3>

          <table
            border="1"
            width="100%"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>18-Jun-2026</td>
                <td>Amazon Purchase</td>
                <td>- ₹1,200</td>
              </tr>

              <tr>
                <td>17-Jun-2026</td>
                <td>Salary Credit</td>
                <td>+ ₹25,000</td>
              </tr>

              <tr>
                <td>16-Jun-2026</td>
                <td>Electricity Bill</td>
                <td>- ₹800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;