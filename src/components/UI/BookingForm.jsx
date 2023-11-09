import React, { useState } from "react";
import QRCode from "qrcode.react";
import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/Booking.css";

const BookingAndPaymentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    fromAddress: "",
    toAddress: "",
    journeyDate: "",
    journeyTime: "",
    additionalInfo: "",
  });

  const [showQRCode, setShowQRCode] = useState(false);

  const handleReserveNow = async (e) => {
    e.preventDefault();

    // Define an array of required field names
    const requiredFields = ["firstName", "lastName", "phoneNumber", "fromAddress", "toAddress", "journeyDate", "journeyTime"];

    // Check if any of the required fields are empty
    const hasEmptyField = requiredFields.some((field) => !formData[field]);

    if (hasEmptyField) {
      alert("Please fill out all required fields.");
      return;
    }

    if (formData.phoneNumber.length !== 10) {
      alert("Phone number must have exactly ten digits.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.status === "ok") {
        setShowQRCode(true);
      } else {
        alert("Error while processing your booking.");
      }
    } catch (error) {
      alert("Error while processing your booking.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="booking-and-payment-form">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="booking-form">
          <h2>Booking Form</h2>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="fromAddress"
              placeholder="From Address"
              value={formData.fromAddress}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="toAddress"
              placeholder="To Address"
              value={formData.toAddress}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="journeyDate"
              placeholder="Journey Date"
              value={formData.journeyDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="time"
              name="journeyTime"
              placeholder="Journey Time"
              value={formData.journeyTime}
              onChange={handleChange}
              className="time__picker"
            />
          </div>
          <div className="form-group">
            <textarea
              rows={5}
              type="textarea"
              name="additionalInfo"
              className="textarea"
              placeholder="Additional Information"
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="payment-method">
          <h2>Payment Method</h2>
          <div className="payment-options">
             {/* Payment method options (radio buttons) go here */}
             <label htmlFor="" className="d-flex align-items-center gap-2">
              <input type="radio" /> Direct Bank Transfer
            </label>
            <label htmlFor="" className="d-flex align-items-center gap-2">
              <input type="radio" /> Paytm
            </label>
            <div className="d-flex align-items-center justify-content-between">
              <label htmlFor="" className="d-flex align-items-center gap-2">
                <input type="radio" /> Gpay
              </label>
              <img src={masterCard} alt="MasterCard" />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <label htmlFor="" className="d-flex align-items-center gap-2">
                <input type="radio" /> Phonepay
              </label>
              <img src={paypal} alt="Paypal" />
            </div>
          </div>
          {showQRCode && (
            <div className="qr-code">
              <QRCode value="Your QR Code Data Here" />
            </div>
          )}
        </div>
        <div className="reserve-button">
          <button onClick={handleReserveNow}>Reserve Now</button>
        </div>
      </form>
    </div>
  );
};

export default BookingAndPaymentForm;