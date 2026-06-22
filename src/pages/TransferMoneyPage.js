import React, { useState } from "react";

function TransferMoneyPage() {
const [beneficiary, setBeneficiary] = useState("");
const [amount, setAmount] = useState("");
const [remarks, setRemarks] = useState("");

const handleTransfer = () => {
if (!beneficiary || !amount) {
alert("Please fill all required fields");
return;
}


const txnId =
  "TXN" + Math.floor(Math.random() * 1000000);

alert(
  `Transaction Successful!\n\nAmount: ₹${amount}\nBeneficiary: ${beneficiary}\nReference ID: ${txnId}`
);

setBeneficiary("");
setAmount("");
setRemarks("");


};

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
maxWidth: "600px",
margin: "auto",
backgroundColor: "white",
padding: "30px",
borderRadius: "10px",
boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
}}
> <h2>💸 Transfer Money</h2>


    <div style={{ marginBottom: "15px" }}>
      <label>From Account</label>

      <select
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
        }}
      >
        <option>Savings Account - XXXX1234</option>
      </select>
    </div>

    <div style={{ marginBottom: "15px" }}>
      <label>Beneficiary</label>

      <select
        value={beneficiary}
        onChange={(e) =>
          setBeneficiary(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
        }}
      >
        <option value="">
          Select Beneficiary
        </option>

        <option>Rahul Sharma</option>
        <option>Priya Patil</option>
        <option>Amit Kumar</option>
      </select>
    </div>

    <div style={{ marginBottom: "15px" }}>
      <label>Amount</label>

      <input
        type="number"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
        placeholder="Enter Amount"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
        }}
      />
    </div>

    <div style={{ marginBottom: "20px" }}>
      <label>Remarks</label>

      <textarea
        value={remarks}
        onChange={(e) =>
          setRemarks(e.target.value)
        }
        placeholder="Enter Remarks"
        rows="3"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
        }}
      />
    </div>

    <button
      onClick={handleTransfer}
      style={{
        width: "100%",
        backgroundColor: "#0d47a1",
        color: "white",
        padding: "12px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Transfer Money
    </button>
  </div>
</div>

);
}

export default TransferMoneyPage;
