import React, { useState } from "react";

function SignIn() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const lowerCaseLetters = /[a-z]/g;
  const upperCaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;

  const signIn = () => {
    if (
      !userName.match(lowerCaseLetters) ||
      !userName.match(upperCaseLetters) ||
      !userName.length >= 8
    ) {
      alert(
        "Username shouldn't exceed 8 characters, should have lowercase and uppercase"
      );
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
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleChange = (e) => {
    setuserName(e.target.value);
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="signin">
      <form className="form">
        <h1
          style={{
            paddingTop: "70px",
            fontSize: "60px",
            fontWeight: "900",
            color: "",
          }}
        >
          Sign In
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
            Username
          </label>
          <input
            className="input-signin"
            value={userName}
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            required
          />

          <label
            style={{
              marginTop: "50px",
              marginBottom: "20px",
              fontSize: "40px",
              fontWeight: "400",
              color: "",
            }}
          >
            Password
          </label>
          <input
            type={passwordShown ? "text" : "password"}
            className="input-signin"
            placeholder="Password"
            value={password}
            name="password"
            onChange={handleChangePass}
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
          <input
            className="checkbox"
            type="checkbox"
            onClick={togglePassword}
          />
        </div>
        <input
          onClick={() => signIn()}
          type="submit"
          value="sign In"
          className="btn-signin"
        />
      </form>
    </div>
  );
}

export default SignIn;

// const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [data, setData] = useState({
//     username: "",
//     password: "",
//   });

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password",
//   };
//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     const userData = data.find((user) => user.username === uname.value);

//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );
