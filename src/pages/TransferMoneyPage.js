import React, { useState } from "react";

function TransferMoneyPage() {
const [account, setAccount] = useState("");
const [amount, setAmount] = useState("");

const transferMoney = () => {
alert(`₹${amount} transferred successfully to ${account}`);
};

return (
<div style={{ padding: "30px" }}> <h2>💸 Transfer Money</h2>

```
  <input
    type="text"
    placeholder="Beneficiary Account Number"
    value={account}
    onChange={(e) => setAccount(e.target.value)}
  />

  <br /><br />

  <input
    type="number"
    placeholder="Amount"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
  />

  <br /><br />

  <button onClick={transferMoney}>
    Transfer
  </button>
</div>

);
}

export default TransferMoneyPage;
