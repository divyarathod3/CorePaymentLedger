import React from "react";

function BillPaymentPage() {
return (
<div style={{ padding: "30px" }}> <h2>💳 Bill Payments</h2>

```
  <button
    onClick={() =>
      alert("Electricity Bill Paid Successfully")
    }
  >
    Pay Electricity Bill
  </button>

  <br /><br />

  <button
    onClick={() =>
      alert("Water Bill Paid Successfully")
    }
  >
    Pay Water Bill
  </button>
</div>

);
}

export default BillPaymentPage;
