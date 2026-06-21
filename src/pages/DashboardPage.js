import React from "react";
import { useNavigate } from "react-router-dom";


function DashboardPage() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "#f4f7fc", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#0d47a1",
          color: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>🏦 SmartPay Banking</h2>

        <div>
          <span style={{ marginRight: "20px" }}>
            Welcome, Divya Rathod
          </span>

          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#d32f2f",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div style={{ padding: "25px" }}>
        {/* Summary Cards */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h4>Total Balance</h4>
            <h2>₹50,000</h2>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h4>Monthly Income</h4>
            <h2>₹25,000</h2>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h4>Total Expenses</h4>
            <h2>₹8,500</h2>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "250px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h4>Reward Points</h4>
            <h2>450</h2>
          </div>
        </div>

        {/* Quick Actions */}
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


        {/* Accounts */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              width: "350px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Savings Account</h3>
            <p>Account No: XXXX XXXX 1234</p>
            <h2>₹50,000</h2>
          </div>

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              width: "350px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Fixed Deposit</h3>
            <p>Maturity Date: 31-Dec-2026</p>
            <h2>₹1,00,000</h2>
          </div>
        </div>

        {/* Recent Transactions */}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "30px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Recent Transactions</h3>

          <table
            width="100%"
            border="1"
            style={{
              borderCollapse: "collapse",
              marginTop: "15px",
            }}
          >
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>21-Jun-2026</td>
                <td>Amazon Purchase</td>
                <td style={{ color: "red" }}>- ₹1,200</td>
                <td>Success</td>
              </tr>

              <tr>
                <td>20-Jun-2026</td>
                <td>Salary Credit</td>
                <td style={{ color: "green" }}>+ ₹25,000</td>
                <td>Success</td>
              </tr>

              <tr>
                <td>19-Jun-2026</td>
                <td>Electricity Bill</td>
                <td style={{ color: "red" }}>- ₹800</td>
                <td>Success</td>
              </tr>

              <tr>
                <td>18-Jun-2026</td>
                <td>UPI Transfer</td>
                <td style={{ color: "red" }}>- ₹500</td>
                <td>Success</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notifications */}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Notifications</h3>

          <ul>
            <li>Salary credited successfully.</li>
            <li>Electricity bill paid.</li>
            <li>New cashback offer available.</li>
            <li>FD maturity due in 6 months.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
