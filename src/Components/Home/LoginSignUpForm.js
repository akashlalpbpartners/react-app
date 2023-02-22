import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import check from "./checkUtility";
import userContext from "../../Context/userContext";

const LoginSignUpForm = () => {
  const navigate = useNavigate();
  const context = useContext(userContext);
  const { loginUser, fetchUser, fetchState, fetchCity } = context;
  const [firstNo, setfirstNo] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [toggleShow, setToggleShow] = useState("hide");
  const [disableOn, setDisableOn] = useState(true);
  const [otp, setOtp] = useState("");
  const [timeOutShow, setTimeOutShow] = useState("none");
  const [loginCustomer, setLoginCustomer] = useState([]);

  useEffect(() => {
    if (mobileNumber.length === 10 && toggleShow === "show") {
      setInputField(otp);
      if (otp.length === 7) check.handleChange(otp);
    }
  }, [mobileNumber.length, otp.length, toggleShow]);

  const offDisable = () => {
    setTimeOutShow("");
  };

  async function handleSendOtp() {
    const response = await fetchUser(mobileNumber);
    if (response.length !== 0) {
      check.handleClick({
        toggleShow,
        firstNo,
        setDisableOn,
        setToggleShow,
      });
      setLoginCustomer(response);
      setfirstNo("");
      check.resendOtp({ offDisable, setTimeOutShow });
    } else {
      setfirstNo("register");
    }
  }

  const otpField = {
    1: ["field-1"],
    2: ["field-2"],
    3: ["field-3"],
    4: ["field-4"],
    5: ["field-5"],
    6: ["field-6"],
  };

  const setInputField = (otp) => {
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
  };

  const handleVerify = (otp) => {
    if (otp === "101010") return true;
    else return false;
  };

  async function handleVerifyOtp() {
    try {
      if (handleVerify(otp)) {
        loginUser(loginCustomer, otp);
        fetchState();
        fetchCity();
        navigate("/service");
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <div className="col-md-6">
        <div className="auth-form">
          <h2 className="heading login-heading">
            Login to your seller account
          </h2>
          <p className="login-info">
            If you don't have an account, register with your mobile number
          </p>

          <form action="">
            <div className="pb-form-floating mt-5 mb-4">
              <div className="d-flex">
                <input
                  id="+91"
                  className="form-control"
                  style={{
                    width: "57px",
                    color: "grey",
                    fontSize: "15px",
                    marginRight: "5px",
                  }}
                  defaultValue={"+91"}
                  readOnly
                ></input>
                <input
                  id="mobileNumber"
                  type="number"
                  className="form-control"
                  placeholder="9953000022"
                  maxLength={10}
                  onInput={(e) => {
                    check.maxPhoneNumber({
                      e,
                      setmobileNumber,
                      mobileNumber,
                      firstNo,
                      setDisableOn,
                      setfirstNo,
                    });
                  }}
                />
              </div>
              <label htmlFor="floatingInput">Mobile Number</label>
              <div id="error_messages">
                {firstNo === "first" ? (
                  <p className="invalid">Invalid mobile number</p>
                ) : (
                  <div></div>
                )}
                {firstNo === "register" ? (
                  <p className="invalid">Mobile number is not register.</p>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            {toggleShow === "show" ? (
              <div>
                <div className="otp-number">
                  <ul>
                    {Object.entries(otpField).map(([key, value]) => (
                      <li key={key}>
                        <input
                          id={value[0]}
                          type="number"
                          className="form-control"
                          maxLength={1}
                          onInput={(e) => {
                            check.maxLengthCheck({ e });
                          }}
                          onKeyUp={(e) => {
                            check.handleChange({
                              e,
                              otp,
                              setOtp,
                              setDisableOn,
                            });
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="otp-expire-msg">
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
                  className="btn btn-primary btn-lg w-100 my-3 verify-otp"
                  data-bs-toggle="modal"
                  data-bs-target="#kycModal"
                  disabled={disableOn}
                  onClick={handleVerifyOtp}
                >
                  Verify OTP
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-primary btn-lg w-100 my-3 send-otp"
                disabled={disableOn}
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
            )}

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
