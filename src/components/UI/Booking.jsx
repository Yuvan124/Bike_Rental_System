import React from "react";

import BookingForm from "./BookingForm"; // Import the BookingForm component
import "../../styles/booking-form.css";

const Booking = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="booking-form">
        <form onSubmit={submitHandler}>
          <div className="booking-form-fields">
            <BookingForm />
          </div>
        
        </form>
      </div>
    </div>
  );
};

export default Booking;
