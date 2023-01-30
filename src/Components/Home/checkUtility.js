function resendOtp(props) {
  props.setTimeOutShow("none");
  setTimeout(props.offDisable, 5000);
}
function handleClick(props) {
  if (props.toggleShow === "hide") props.setToggleShow("show");
  else props.setToggleShow("hide");
  props.setDisableOn(true);
}
function handleVerify(props) {
  if (props.otp === "101010") props.navigate("/info");
}
function handleChange(props) {
  props.e.target.value = props.e.target.value.replace(/[^0-9]/g, "");
  if (props.e.key === "Backspace") {
    props.setOtp(props.otp.substring(0, props.otp.length - 1));
  }
  if (
    props.otp.length <= 5 &&
    (props.e.key === "1" ||
      props.e.key === "2" ||
      props.e.key === "3" ||
      props.e.key === "4" ||
      props.e.key === "5" ||
      props.e.key === "6" ||
      props.e.key === "7" ||
      props.e.key === "8" ||
      props.e.key === "9" ||
      props.e.key === "0")
  ) {
    let str = props.otp + props.e.key;
    props.setOtp(str);
    console.log(props.otp.length);
    if (props.otp.length === 5) props.setDisableOn(false);
  }
}
function maxLengthCheck(props) {
  if (props.e.target.value.length > props.e.target.maxLength) {
    props.e.target.value = props.e.target.value.slice(
      0,
      props.e.target.maxLength
    );
  }
}
function maxPhoneNumber(props) {
  props.e.target.value = props.e.target.value.replace(/[^0-9]/g, "");
  if (props.e.target.value.length > props.e.target.maxLength) {
    props.e.target.value = props.e.target.value.slice(
      0,
      props.e.target.maxLength
    );
  }
  props.setmobileNumber(props.e.target.value);
  console.log(props.mobileNumber);
}
function checkNumber(props) {
  props.e.target.value = props.e.target.value.replace(/[^0-9]/g, "");
  let firstNumber = props.e.target.value[0];
  props.e.target.value.replace(/[^0-9]/g, "");
  if (firstNumber < 6) props.setfirstNo(true);
  else props.setfirstNo(false);
  if (props.e.target.value.length === 10 && props.firstNo === false)
    props.setDisableOn(false);
  else props.setDisableOn(true);
}

export default {
  resendOtp,
  handleClick,
  handleVerify,
  handleChange,
  checkNumber,
  maxLengthCheck,
  maxPhoneNumber,
};
