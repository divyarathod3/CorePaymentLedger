import React, { useState } from "react";

function BillPaymentPage() {
const [billType, setBillType] = useState("");
const [consumerNumber, setConsumerNumber] = useState("");
const [amount, setAmount] = useState("");

const handlePayment = () => {
if (!billType || !consumerNumber || !amount) {
alert("Please fill all fields");
return;
}


const txnId =
  "BILL" + Math.floor(Math.random() * 1000000);

alert(
  `Payment Successful!\n\nBill Type: ${billType}\nAmount: ₹${amount}\nTransaction ID: ${txnId}`
);

setBillType("");
setConsumerNumber("");
setAmount("");


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
> <h2>💳 Bill Payments</h2>


    <div style={{ marginBottom: "15px" }}>
      <label>Bill Type</label>

      <select
        value={billType}
        onChange={(e) => setBillType(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
        }}
      >
        <option value="">
          Select Bill Type
        </option>

        <option>Electricity</option>
        <option>Water</option>
        <option>Mobile Recharge</option>
        <option>Internet</option>
      </select>
    </div>

    <div style={{ marginBottom: "15px" }}>
      <label>Consumer Number</label>

      <input
        type="text"
        value={consumerNumber}
        onChange={(e) =>
          setConsumerNumber(e.target.value)
        }
        placeholder="Enter Consumer Number"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
        }}
      />
    </div>

    <div style={{ marginBottom: "20px" }}>
      <label>Amount</label>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "5px",
        }}
      />
    </div>

    <button
      onClick={handlePayment}
      style={{
        width: "100%",
        backgroundColor: "#0d47a1",
        color: "white",
        border: "none",
        padding: "12px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Pay Bill
    </button>
  </div>
</div>


);
}

export default BillPaymentPage;
