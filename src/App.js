import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import DashboardPage from "./pages/DashboardPage";

import TransferMoneyPage from "./pages/TransferMoneyPage";
import StatementPage from "./pages/StatementPage";
import BeneficiaryPage from "./pages/BeneficiaryPage";
import BillPaymentPage from "./pages/BillPaymentPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
return ( <BrowserRouter> <Routes>
<Route path="/" element={<LoginPage />} />
<Route path="/signup" element={<SignUpPage />} />
<Route path="/forgot-password" element={<ForgotPasswordPage />} />
<Route path="/dashboard" element={<DashboardPage />} />

```
    <Route path="/transfer" element={<TransferMoneyPage />} />
    <Route path="/statement" element={<StatementPage />} />
    <Route path="/beneficiary" element={<BeneficiaryPage />} />
    <Route path="/bills" element={<BillPaymentPage />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
</BrowserRouter>

);
}

export default App;
