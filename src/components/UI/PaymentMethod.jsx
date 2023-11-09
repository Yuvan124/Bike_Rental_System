import React, { useState } from "react";
import QRCode from "qrcode.react";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  const handleReserveNow = () => {
    setShowQRCode(true);
  };

  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Paytm
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Gpay
        </label>
        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Phonepay
        </label>
        <img src={paypal} alt="" />
      </div>

      {showQRCode && (
        <div className="payment mt-3 text-center">
          <QRCode value="Your QR Code Data Here" />
        </div>
      )}

      <div className="payment text-end mt-5">
        <button onClick={handleReserveNow}>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;
