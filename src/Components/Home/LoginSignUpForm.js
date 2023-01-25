import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignUpForm = ({ toggleForm }) => {
  const navigate = useNavigate();
  const [toggleShow, setToggleShow] = useState("hide");
  const [disableOn, setDisableOn] = useState(true);
  const [otp, setOtp] = useState("");
  const [timeOutShow, setTimeOutShow] = useState("none");

  useEffect(() => {
    setInputField(otp);
  });
  const handleResend = () => {
    setTimeOutShow("none");
    setTimeout(offDisable, 5000);
  };
  const offDisable = () => {
    setTimeOutShow("");
  };
  const handleClick = () => {
    if (toggleShow === "hide") setToggleShow("show");
    else setToggleShow("hide");
  };
  function handleVerify() {
    if (otp === "101010") navigate("/info");
  }
  function setInputField(otp) {
    for (let i = 0; i < 6; i++) {
      if (i < otp.length)
        document.getElementById(`field-${i + 1}`).value = otp[i];
      else document.getElementById(`field-${i + 1}`).value = "";
    }
    let nextfield = "";
    if (otp.length <= 6) {
      if (otp.length !== 6)
        nextfield = document.querySelector(`input[id=field-${otp.length + 1}]`);
      else nextfield = document.querySelector(`input[id=field-${otp.length}]`);
    }
    if (otp.length === 6) setDisableOn(false);
    else setDisableOn(true);

    if (nextfield === "null") return;
    nextfield.focus();
  }
  function maxLengthCheck(object) {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength
      );
    }
  }
  function handleChange(e) {
    if (e.key === "Backspace") {
      setOtp(otp.substring(0, otp.length - 1));
    }
    if (
      otp.length <= 5 &&
      (e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "0")
    ) {
      let str = otp + e.key;
      setOtp(str);
    }
  }

  console.log(timeOutShow);
  return (
    <>
      <div className="col-md-6">
        <div className="auth-form">
          <h2 className="heading login-heading">
            {toggleForm
              ? "Login to your seller account"
              : "Register for seller account"}
          </h2>
          <p className="login-info">
            {/* If you have an account, sign in with your <br /> mobile number. */}
            {toggleForm
              ? `If you have an account, sign in with your 
            mobile number.`
              : `If you don't have an account, register with your
             mobile number`}
          </p>
          {/* <h2 className="heading register-heading hide">
            Register for seller account
          </h2>
          <p className="register-info hide">
            If you don't have an account, register with your <br /> mobile
            number.
          </p> */}

          <form action="">
            <div className="pb-form-floating mt-5 mb-4">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="+919953000022"
              />
              <label for="floatingInput">Mobile Number</label>
            </div>
            <div className={`otp-number ${toggleShow}`}>
              <ul>
                <li>
                  <input
                    id="field-1"
                    type="number"
                    className="form-control"
                    maxLength={1}
                    onInput={maxLengthCheck}
                    onKeyUp={handleChange}
                  />
                </li>
                <li>
                  <input
                    id="field-2"
                    type="number"
                    className="form-control"
                    maxLength={1}
                    onInput={maxLengthCheck}
                    onKeyUp={handleChange}
                  />
                </li>
                <li>
                  <input
                    id="field-3"
                    type="number"
                    className="form-control"
                    maxLength={1}
                    onKeyUp={handleChange}
                    onInput={maxLengthCheck}
                  />
                </li>
                <li>
                  <input
                    id="field-4"
                    type="number"
                    className="form-control"
                    max={1}
                    onKeyUp={handleChange}
                    onInput={maxLengthCheck}
                  />
                </li>
                <li>
                  <input
                    id="field-5"
                    type="number"
                    className="form-control"
                    max={1}
                    onKeyUp={handleChange}
                    onInput={maxLengthCheck}
                  />
                </li>
                <li>
                  <input
                    id="field-6"
                    type="number"
                    className="form-control"
                    max={1}
                    onKeyUp={handleChange}
                    onInput={maxLengthCheck}
                  />
                </li>
              </ul>
            </div>
            <div className={`otp-expire-msg ${toggleShow}`}>
              <span className="otp-will-expire">
                Your OTP will expire in 00:25s
                <a
                  className={`resend-otp text-decoration-none pe-${timeOutShow} ${
                    timeOutShow === "none" ? "text-secondary " : ""
                  }`}
                  href="#x"
                  onClick={handleResend}
                >
                  Resend OTP
                </a>
              </span>
            </div>
            <button
              type="button"
              className={`btn btn-primary btn-lg w-100 my-3 send-otp ${
                toggleShow === "show" ? "hide" : "show"
              }`}
              onClick={() => {
                handleClick();
                handleResend();
              }}
            >
              Send OTP
            </button>
            <button
              type="button"
              className={`btn btn-primary btn-lg w-100 my-3 verify-otp ${toggleShow}`}
              data-bs-toggle="modal"
              data-bs-target="#kycModal"
              disabled={disableOn}
              onClick={handleVerify}
            >
              Verify OTP
            </button>
            <button
              type="button"
              className="btn btn-outline-primary btn-lg w-100 buyer-login"
            >
              Buyer Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginSignUpForm;
