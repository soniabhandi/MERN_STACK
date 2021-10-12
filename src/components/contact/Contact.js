import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Contact() {
  const [enteredname, setEnteredName] = useState("");
  const [enteredemail, setEnteredEmail] = useState("");
  const [enteredphone, setEnteredPhone] = useState("");
  const [enteredmessage, setEnteredMessage] = useState("");
  const history = useHistory();

  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [enteredPhoneIsValid, setEnteredPhoneIsValid] = useState(true);
  const [enteredMessageIsValid, setEnteredMessageIsValid] = useState(true);

  function validateEmail(enteredemail) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var checkemail = emailPattern.test(enteredemail);
    return checkemail;
  }

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setEnteredPhone(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setEnteredMessage(e.target.value);
  };

  const submitHandler = (event) => {
    setEnteredNameIsValid(true);
    setEnteredEmailIsValid(true);
    setEnteredPhoneIsValid(true);
    setEnteredMessageIsValid(true);
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
    if (enteredphone.length !== 10) {
      return setEnteredPhoneIsValid(false);
    }
    if (enteredmessage === null || enteredmessage < 5) {
      return setEnteredMessageIsValid(false);
    }
    const contactusDetails = {
      name: enteredname,
      email: enteredemail,
      phone: enteredphone,
      message: enteredmessage,
    };
    
    axios
      .post("http://localhost:3000/webapi/contactus", contactusDetails)
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
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- contact --> */}
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <h1 data-testid="header">Contact Component</h1>
              <form className="main_form" onSubmit={submitHandler}>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      className="form-control"
                      placeholder="Your name"
                      type="text"
                      name="Your Name"
                      value={enteredname}
                      onChange={nameChangeHandler}
                    />
                    {!enteredNameIsValid && (
                      <p style={{ color: "red" }}>
                        Invalid Name.Please enter a Valid Name!
                      </p>
                    )}
                    <h1 data-testid="name_checker">Send</h1> UNIT TESTING
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      className="form-control"
                      placeholder="Email"
                      type="text"
                      name="Email"
                      value={enteredemail}
                      onChange={emailChangeHandler}
                    />
                    {!enteredEmailIsValid && (
                      <p style={{ color: "red" }}>Please Enter a Valid Email</p>
                    )}
                  </div>
                  <div className=" col-md-12">
                    <input
                      class="form-control"
                      placeholder="Phone"
                      type="text"
                      name="Phone"
                      value={enteredphone}
                      onChange={phoneChangeHandler}
                    />
                    {!enteredPhoneIsValid && (
                      <p style={{ color: "red" }}>
                        Please enter 10 Digit Mobile Number
                      </p>
                    )}
                  </div>
                  <div className="col-md-12">
                    <textarea
                      class="textarea"
                      placeholder="Message"
                      value={enteredmessage}
                      onChange={messageChangeHandler}
                    ></textarea>
                    {!enteredMessageIsValid && (
                      <p style={{ color: "red" }}>
                        Type a message of minimum 2 words
                      </p>
                    )}
                  </div>
                  <div className=" col-md-12">
                    <button type="submit" class="send">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end contact --> */}
    </div>
  );
}

export default Contact;
