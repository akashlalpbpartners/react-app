import React from "react";

const LoginSignUpForm = ({toggleForm}) => {

  console.log(toggleForm)

  return (
    <>
      <div className="col-md-6">
        <div className="auth-form">
          <h2 className="heading login-heading">
            {toggleForm ? "Login to your seller account" : "Register for seller account" }
          </h2>
          <p className="login-info">
            {/* If you have an account, sign in with your <br /> mobile number. */}
            {toggleForm ? "If you have an account, sign in with your <br /> mobile number." : `If you don't have an account, register with your
             mobile number` }
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
            <div className="otp-number hide">
              <ul>
                <li>
                  <input type="text" className="form-control" />
                </li>
                <li>
                  <input type="text" className="form-control" />
                </li>
                <li>
                  <input type="text" className="form-control" />
                </li>
                <li>
                  <input type="text" className="form-control" />
                </li>
              </ul>
            </div>
            <div className="otp-expire-msg hide">
              <p className="otp-will-expire">Your OTP will expire in 00:23s</p>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg w-100 my-3 send-otp"
            >
              Send OTP
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg w-100 my-3 verify-otp hide"
              data-bs-toggle="modal"
              data-bs-target="#kycModal"
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
