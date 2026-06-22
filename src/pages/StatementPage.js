import React, { useState } from "react";

function StatementPage() {
const [search, setSearch] = useState("");

const transactions = [
{
date: "21-Jun-2026",
description: "Amazon Purchase",
amount: -1200,
status: "Success",
},
{
date: "20-Jun-2026",
description: "Salary Credit",
amount: 25000,
status: "Success",
},
{
date: "19-Jun-2026",
description: "Electricity Bill",
amount: -800,
status: "Success",
},
{
date: "18-Jun-2026",
description: "UPI Transfer",
amount: -500,
status: "Success",
},
];

const filteredTransactions = transactions.filter((txn) =>
txn.description.toLowerCase().includes(search.toLowerCase())
);

return (
<div
style={{
minHeight: "100vh",
backgroundColor: "#f4f7fc",
padding: "30px",
}}
>
<div
style={{
backgroundColor: "white",
padding: "25px",
borderRadius: "10px",
boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
}}
> <h2>📄 Transaction History</h2>

```
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Search Transaction..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
        }}
      />

      <button
        onClick={() =>
          alert("Statement Downloaded Successfully")
        }
        style={{
          backgroundColor: "#0d47a1",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download Statement
      </button>
    </div>

    <table
      width="100%"
      border="1"
      style={{
        borderCollapse: "collapse",
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
        {filteredTransactions.map((txn, index) => (
          <tr key={index}>
            <td>{txn.date}</td>

            <td>{txn.description}</td>

            <td
              style={{
                color:
                  txn.amount > 0
                    ? "green"
                    : "red",
                fontWeight: "bold",
              }}
            >
              ₹{txn.amount}
            </td>

            <td>{txn.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


);
}

export default StatementPage;
