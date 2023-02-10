import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import check from "./checkUtility";

const LoginSignUpForm = ({ toggleForm }) => {
  const navigate = useNavigate();
  const [firstNo, setfirstNo] = useState(false);
  const [mobileNumber, setmobileNumber] = useState(false);
  const [toggleShow, setToggleShow] = useState("hide");
  const [disableOn, setDisableOn] = useState(true);
  const [otp, setOtp] = useState("");
  const [timeOutShow, setTimeOutShow] = useState("none");
  useEffect(() => {
    if (mobileNumber.length === 10) setInputField(otp);
  });

  const offDisable = () => {
    setTimeOutShow("");
  };
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
    if (nextfield === "null") return;
    nextfield.focus();
  }

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
              <div className="d-flex">
                <input
                  className="form-control"
                  style={{
                    width: "57px",
                    color: "grey",
                    fontSize: "15px",
                    marginRight: "5px",
                  }}
                  value={"+91"}
                ></input>
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="9953000022"
                  maxLength={10}
                  onInput={(e) => {
                    check.maxPhoneNumber({ e, setmobileNumber, mobileNumber });
                  }}
                  onChange={(e) => {
                    check.checkNumber({ e, firstNo, setDisableOn, setfirstNo });
                  }}
                />
              </div>
              <label for="floatingInput">Mobile Number</label>
              <p className={`invalid ${firstNo === true ? "show" : "hide"}`}>
                Invalid Ph Number
              </p>
            </div>
            <div className={`otp-number ${toggleShow}`}>
              <ul>
                <li>
                  <input
                    id="field-1"
                    type="number"
                    className="form-control"
                    maxLength={1}
                    onInput={(e) => {
                      check.maxLengthCheck({ e });
                    }}
                    onKeyUp={(e) => {
                      check.handleChange({ e, otp, setOtp, setDisableOn });
                    }}
                  />
                </li>
                <li>
                  <input
                    id="field-2"
                    type="number"
                    className="form-control"
                    maxLength={1}
                    onInput={(e) => {
                      check.maxLengthCheck({ e });
                    }}
                    onKeyUp={(e) => {
                      check.handleChange({ e, otp, setOtp, setDisableOn });
                    }}
                  />
                </li>
                <li>
                  <input
                    id="field-3"
                    type="number"
                    className="form-control"
                    maxLength={1}
                    onKeyUp={(e) => {
                      check.handleChange({ e, otp, setOtp, setDisableOn });
                    }}
                    onInput={(e) => {
                      check.maxLengthCheck({ e });
                    }}
                  />
                </li>
                <li>
                  <input
                    id="field-4"
                    type="number"
                    className="form-control"
                    max={1}
                    onKeyUp={(e) => {
                      check.handleChange({ e, otp, setOtp, setDisableOn });
                    }}
                    onInput={(e) => {
                      check.maxLengthCheck({ e });
                    }}
                  />
                </li>
                <li>
                  <input
                    id="field-5"
                    type="number"
                    className="form-control"
                    max={1}
                    onKeyUp={(e) => {
                      check.handleChange({ e, otp, setOtp, setDisableOn });
                    }}
                    onInput={(e) => {
                      check.maxLengthCheck({ e });
                    }}
                  />
                </li>
                <li>
                  <input
                    id="field-6"
                    type="number"
                    className="form-control"
                    max={1}
                    onKeyUp={(e) => {
                      check.handleChange({ e, otp, setOtp, setDisableOn });
                    }}
                    onInput={(e) => {
                      check.maxLengthCheck({ e });
                    }}
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
                  onClick={() => {
                    check.resendOtp({ offDisable, setTimeOutShow });
                  }}
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
              disabled={disableOn}
              onClick={() => {
                check.handleClick({ toggleShow, setToggleShow, setDisableOn });
                check.resendOtp({ offDisable, setTimeOutShow });
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
              onClick={() => {
                check.handleVerify({ otp, navigate });
              }}
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
