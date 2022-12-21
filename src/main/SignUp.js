import React, { useState } from "react";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const signUp = () => {
    if (!email.match(validRegex)) {
      alert("invalid email");
    }
    if (
      !password.match(lowerCaseLetters) ||
      !password.match(upperCaseLetters) ||
      !password.match(numbers) ||
      !password.length >= 8
    ) {
      alert("invalid password");
    }
    alert("connected");
    if (!confirmPassword !== password) {
      alert("confirmPassword is not like your password");
    }
    alert("connected");
  };

  const hundelChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };
  const hundelChangeConfirm = (e) => {
    setConfirmPassword(e.target.value);
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="signin">
      <form>
        <h1
          style={{
            paddingTop: "70px",
            fontSize: "60px",
            fontWeight: "900",
            color: "",
          }}
        >
          Sign Up
        </h1>
        <div className="form-signin">
          <label
            style={{
              marginTop: "50px",
              marginBottom: "20px",
              fontSize: "40px",
              fontWeight: "400",
              color: "",
            }}
            htmlFor=""
          >
            Email:
          </label>
          <input
            className="input-signin"
            type="email"
            value={email}
            onChange={hundelChangeEmail}
            placeholder="Email address"
          />

          <label
            style={{
              marginTop: "50px",
              marginBottom: "20px",
              fontSize: "40px",
              fontWeight: "400",
              color: "",
            }}
            htmlFor=""
          >
            Password:
          </label>
          <input
            onChange={handleChangePass}
            className="input-signin"
            placeholder="Password"
            value={password}
            name="password"
            type={passwordShown ? "text" : "password"}
          />
          <input
            className="checkbox"
            type="checkbox"
            onClick={togglePassword}
          />

          <label
            style={{
              marginTop: "50px",
              marginBottom: "20px",
              fontSize: "40px",
              fontWeight: "400",
              color: "",
            }}
            htmlFor=""
          >
            Confirm Password:
          </label>
          <input
            className="input-signin"
            type="password"
            value={confirmPassword}
            onChange={hundelChangeConfirm}
            placeholder="Confirm Password"
          />
        </div>
        <button onClick={() => signUp()} className="btn-signin">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
