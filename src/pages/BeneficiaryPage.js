import React from "react";

function BeneficiaryPage() {
return (
<div style={{ padding: "30px" }}> <h2>👤 Beneficiaries</h2>

```
  <table border="1" cellPadding="10">
    <thead>
      <tr>
        <th>Name</th>
        <th>Account</th>
        <th>Bank</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Rahul Sharma</td>
        <td>1234567890</td>
        <td>HDFC Bank</td>
      </tr>

      <tr>
        <td>Priya Patil</td>
        <td>9876543210</td>
        <td>ICICI Bank</td>
      </tr>
    </tbody>
  </table>
</div>

);
}

export default BeneficiaryPage;
