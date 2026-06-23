import React, { useState } from "react";

function BeneficiaryPage() {
const [name, setName] = useState("");
const [account, setAccount] = useState("");
const [bank, setBank] = useState("");

const [beneficiaries, setBeneficiaries] = useState([
{
name: "Rahul Sharma",
account: "1234567890",
bank: "HDFC Bank",
},
{
name: "Priya Patil",
account: "9876543210",
bank: "ICICI Bank",
},
]);

const addBeneficiary = () => {
if (!name || !account || !bank) {
alert("Please fill all fields");
return;
}


setBeneficiaries([
  ...beneficiaries,
  {
    name,
    account,
    bank,
  },
]);

alert("Beneficiary Added Successfully");

setName("");
setAccount("");
setBank("");


};

const deleteBeneficiary = (index) => {
const updatedList = beneficiaries.filter(
(_, i) => i !== index
);


setBeneficiaries(updatedList);

alert("Beneficiary Deleted");

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
backgroundColor: "white",
padding: "25px",
borderRadius: "10px",
boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
}}
> <h2>👤 Beneficiary Management</h2>


    <div style={{ marginBottom: "15px" }}>
      <input
        type="text"
        placeholder="Beneficiary Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        type="text"
        placeholder="Account Number"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        type="text"
        placeholder="Bank Name"
        value={bank}
        onChange={(e) => setBank(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
        }}
      />
    </div>

    <button
      onClick={addBeneficiary}
      style={{
        backgroundColor: "#0d47a1",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Add Beneficiary
    </button>

    <hr style={{ margin: "20px 0" }} />

    <h3>Saved Beneficiaries</h3>

    <table
      width="100%"
      border="1"
      style={{
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Account Number</th>
          <th>Bank</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {beneficiaries.map((b, index) => (
          <tr key={index}>
            <td>{b.name}</td>
            <td>{b.account}</td>
            <td>{b.bank}</td>

            <td>
              <button
                onClick={() =>
                  deleteBeneficiary(index)
                }
                style={{
                  backgroundColor: "#d32f2f",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


);
}

export default BeneficiaryPage;
