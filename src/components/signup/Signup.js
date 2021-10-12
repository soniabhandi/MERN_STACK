import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signup() {
  const [enteredname, setEnteredName] = useState("");
  const [enteredusername, setEnteredUsername] = useState("");
  const [enteredemail, setEnteredEmail] = useState("");
  const [enteredpassword, setEnteredPassword] = useState("");
  const [enterednumber, setEnteredNumber] = useState("");
  const [enteredaddress, setEnteredAddress] = useState("");
  const history = useHistory();

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [enteredPhoneIsValid, setEnteredPhoneIsValid] = useState(true);
  const [enteredUsernameIsValid, setenteredUsernameIsValid] = useState(true);
  const [enteredPasswordIsValid, setenteredPasswordIsValid] = useState(true);
  const [enteredAddressIsValid, setenteredAddressIsValid] = useState(true);

  function validateEmail(enteredemail) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var checkemail = emailPattern.test(enteredemail);
    return checkemail;
  }

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };
  const numberChangeHandler = (e) => {
    setEnteredNumber(e.target.value);
  };
  const addressChangeHandler = (e) => {
    setEnteredAddress(e.target.value);
  };

  const submitHandler = (event) => {
    setEnteredNameIsValid(true);
    setEnteredEmailIsValid(true);
    setEnteredPhoneIsValid(true);
    setenteredUsernameIsValid(true);
    setenteredPasswordIsValid(true);
    setenteredAddressIsValid(true);

    event.preventDefault();

    if (
      enteredname.trim() === "" ||
      enteredname === null ||
      enteredname.length < 3
    ) {
      return setEnteredNameIsValid(false);
    }
    if (enteredemail < 8 || !validateEmail(enteredemail)) {
      return setEnteredEmailIsValid(false);
    }
    if (enterednumber.length !== 10) {
      return setEnteredPhoneIsValid(false);
    }
    if (enteredusername === null || enteredusername < 5) {
      return setenteredUsernameIsValid(false);
    }
    if (enteredpassword.length < 8) {
      return setenteredPasswordIsValid(false);
    }
    if (enteredaddress === null || enteredaddress < 5) {
      return setenteredAddressIsValid(false);
    }

    const userDetails = {
      name: enteredname,
      username: enteredusername,
      email: enteredemail,
      password: enteredpassword,
      phone: enterednumber,
      address: enteredaddress,
    };
    console.log(userDetails);
    axios
      .post("http://localhost:3000/webapi/usersignup", userDetails)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/login");
  };

  return (
    <div>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Signup</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={submitHandler} className="main_form">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={enteredname}
                      onChange={nameChangeHandler}
                    />
                    {!enteredNameIsValid && (
                    <p style={{ color: "red" }}>
                      Invalid Name.Please enter a Valid Name!
                    </p>
                  )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Username"
                      value={enteredusername}
                      onChange={usernameChangeHandler}
                    />
                    {!enteredUsernameIsValid && (
                    <p style={{ color: "red" }}>
                      Please provide a proper Username
                    </p>
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={enteredemail}
                      onChange={emailChangeHandler}
                    />
                     {!enteredEmailIsValid && (
                        <p style={{ color: "red" }}>Please Enter a Valid Email</p>
                    )}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={enteredpassword}
                      onChange={passwordChangeHandler}
                    />
                    {!enteredPasswordIsValid && (
                        <p style={{ color: "red" }}>Keep a strong Password</p>
                    )}
                  </div>
                  <div className=" col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="number"
                      name="number"
                      placeholder="Mobile Number"
                      value={enterednumber}
                      onChange={numberChangeHandler}
                    />
                    {!enteredPhoneIsValid && (
                    <p style={{ color: "red" }}>
                      Invalid Number!Please Enter 10 digits
                    </p>
                    )}
                  </div>
                  <div className=" col-md-12">
                    <textarea
                      className="form-control"
                      rows="5"
                      id="address"
                      name="address"
                      placeholder="Address"
                      value={enteredaddress}
                      onChange={addressChangeHandler}
                    ></textarea>
                    {!enteredAddressIsValid && (
                        <p style={{ color: "red" }}>Type correct address</p>
                    )}
                  </div>
                  <div className=" col-md-12">
                    <button type="submit" className="send">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
