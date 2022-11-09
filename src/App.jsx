import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import AccountPage from "pages/AccountPage";
import ContactPage from "pages/ContactPage";
import HomePage from "pages/HomePage";
import SigninPage from "pages/SigninPage";
import SignupPage from "pages/SignupPage";
import PaymentPage from "pages/PaymentPage";
import VerifyEmailPage from "pages/VerifyEmailPage";
import ForgotPasswordPage from "pages/ForgotPasswordPage";
import ResetPasswordPage from "pages/ResetPasswordPage";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/account-info" element={<AccountPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />}></Route>
        <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>
        <Route path="/reset-password" element={<ResetPasswordPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
