import React from "react";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
const navigate = useNavigate();

const handleLogout = () => {
alert("Logged out successfully!");
navigate("/");
};

const menuStyle = {
width: "100%",
padding: "12px",
marginBottom: "10px",
border: "none",
borderRadius: "6px",
cursor: "pointer",
textAlign: "left",
fontSize: "15px",
};

return (
<div style={{ display: "flex", minHeight: "100vh" }}>


  {/* Sidebar */}
  <div
    style={{
      width: "250px",
      backgroundColor: "#0d47a1",
      color: "white",
      padding: "20px",
    }}
  >
    <h2>🏦 SmartPay</h2>

    <hr />

    <button
      style={menuStyle}
      onClick={() => navigate("/dashboard")}
    >
      📊 Dashboard
    </button>

    <button
      style={menuStyle}
      onClick={() => navigate("/transfer")}
    >
      💸 Transfer Money
    </button>

    <button
      style={menuStyle}
      onClick={() => navigate("/statement")}
    >
      📄 Statement
    </button>

    <button
      style={menuStyle}
      onClick={() => navigate("/beneficiary")}
    >
      👤 Beneficiaries
    </button>

    <button
      style={menuStyle}
      onClick={() => navigate("/bills")}
    >
      💳 Bill Payments
    </button>

    <button
      style={menuStyle}
      onClick={() => navigate("/profile")}
    >
      ⚙️ Profile
    </button>

    <button
      onClick={handleLogout}
      style={{
        ...menuStyle,
        backgroundColor: "#d32f2f",
        color: "white",
        marginTop: "20px",
      }}
    >
      🚪 Logout
    </button>
  </div>

  {/* Main Content */}
  <div
    style={{
      flex: 1,
      backgroundColor: "#f4f7fc",
      padding: "30px",
    }}
  >
    <h1>Welcome Back, Divya 👋</h1>

    {/* Summary Cards */}
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          width: "220px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h4>Total Balance</h4>
        <h2>₹5,48,230</h2>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          width: "220px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h4>Savings Account</h4>
        <h2>₹3,25,000</h2>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          width: "220px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h4>Current Account</h4>
        <h2>₹1,23,230</h2>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          width: "220px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h4>Fixed Deposit</h4>
        <h2>₹1,00,000</h2>
      </div>
    </div>

    {/* Quick Actions */}
    <div
      style={{
        backgroundColor: "white",
        marginTop: "30px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Quick Actions</h3>

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
          📄 Statement
        </button>

        <button onClick={() => navigate("/beneficiary")}>
          👤 Beneficiary
        </button>

        <button onClick={() => navigate("/bills")}>
          💳 Pay Bills
        </button>

        <button onClick={() => navigate("/profile")}>
          ⚙️ Profile
        </button>
      </div>
    </div>

    {/* Recent Transactions */}
    <div
      style={{
        backgroundColor: "white",
        marginTop: "30px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Recent Transactions</h3>

      <table
        width="100%"
        border="1"
        style={{
          borderCollapse: "collapse",
          marginTop: "10px",
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
        </tbody>
      </table>
    </div>

    {/* Notifications */}
    <div
      style={{
        backgroundColor: "white",
        marginTop: "30px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Notifications</h3>

      <ul>
        <li>✅ Salary credited successfully.</li>
        <li>✅ Electricity bill paid.</li>
        <li>🎁 New cashback offer available.</li>
        <li>📅 FD maturity due in 6 months.</li>
      </ul>
    </div>
  </div>
</div>


);
}

export default DashboardPage;
