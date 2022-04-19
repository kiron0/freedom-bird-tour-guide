import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/Firebase.init";
import PageTitle from "../Shared/PageTitle/PageTitle";
import "./Checkout.css";
import Thanks from "../../Assets/thank-you.jpg";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error] = useState("");
  const [val, setVal] = useState(true);

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, email, address, phone };
    console.log(shipping);
    setVal(false);
  };

  return (
    <div className="checkout">
      <PageTitle title="Checkout"></PageTitle>
      {val ? (
        <div className="form-container">
          <div>
            <h2 className="form-title text-center">Your Shipping Info</h2>
            <form onSubmit={handleCreateUser}>
              <div className="input-group">
                <label htmlFor="name">Your Name</label>
                <input
                  onBlur={handleNameBlur}
                  type="text"
                  name="name"
                  id=""
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Your Email</label>
                <input
                  value={user?.email}
                  readOnly
                  type="email"
                  name="email"
                  id=""
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Address</label>
                <input
                  onBlur={handleAddressBlur}
                  type="text"
                  name="address"
                  id=""
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  onBlur={handlePhoneBlur}
                  type="text"
                  name="phone"
                  id=""
                  required
                />
              </div>
              <p style={{ color: "red" }}>{error}</p>
              <input
                className="form-submit"
                type="submit"
                value="Proceed to Checkout"
                required
              />
            </form>
          </div>
        </div>
      ) : (
        <>
          <div className="text-center shipment">
           <img src={Thanks} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
