import React, { useState } from "react";
import signupImg from "../../assets/signup.png";
import { Link, useNavigate  } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { handleError, handleSuccess } from "../../../util/tostify.js";
import axios from "axios";

export default function Login() {

  const navigate = useNavigate();

  let [signupInfo, setSignupInfo] = useState({
    mobailNumber: "",
    email: "",
    username: "",
    password: "",
    birthDate: "",
    panNumber: "",
    bankAccNumber: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    let copyLoginInfo = { ...signupInfo };
    copyLoginInfo[name] = value;
    setSignupInfo(copyLoginInfo);
    console.log(copyLoginInfo);
  };

  const validateWithDBData = async () => {
    try {
      const { mobailNumber, email, username } = signupInfo;

      const response = await axios.post("http://localhost:8080/validate", {
        mobailNumber,
        email,
        username,
      });

      if (response.data.mobailNumberExists) {
        handleError("Mobail number already exists");
        return true;
      }

      if (response.data.emailExists) {
        handleError("Email already exists");
        return true;
      }

      if (response.data.usernameExists) {
        handleError("Username already exists");
        return true;
      }

      return false;
    } catch (error) {
      console.error("API error:", error);
      handleError("Something went wrong. Please try again.");
      return true;
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    toast.dismiss();

    const {
      mobailNumber,
      email,
      username,
      password,
      birthDate,
      panNumber,
      bankAccNumber,
    } = signupInfo;

    if (
      !mobailNumber ||
      !email ||
      !username ||
      !password ||
      !birthDate ||
      !panNumber ||
      !bankAccNumber
    ) {
      return handleError("All fields are required");
    }

    if (mobailNumber.length < 10 || mobailNumber.length > 10) {
      return handleError("Mobail number must be 10 digits");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return handleError("Enter valid email");
    }

    //validate DOB
    const calAge = (year) => {
      const currYear = new Date().getFullYear();
      return currYear - year;
    };

    let age = calAge(birthDate.slice(0, 4));

    if (age < 18) {
      return handleError("Your age must be 18+");
    }

    if (panNumber.length !== 10) {
      return handleError("Pan-crad number must be 10 digit");
    }

    if (bankAccNumber.length < 8 || bankAccNumber.length > 12) {
      return handleError("Bank account number must be between 8 and 12 digits");
    }

    let validationFailed = true;
    validationFailed = await validateWithDBData();

    if (!validationFailed) {
      axios
        .post("http://localhost:8080/signup", {
          mobailNumber,
          email,
          username,
          password,
          birthDate,
          panNumber,
          bankAccNumber,
        })
        .then((res) => {
          handleSuccess(res.data.message);
          
          window.location.href = 'http://localhost:5174/login'

        })
        .catch((error) => {
          console.error(error, "server error");
        });
    } 
  };

  return (
    <div className="container" style={{ marginTop: "9rem" }}>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <img src={signupImg} alt="Zerodha's signup landing page" />
        </div>
        <div className="col-1"></div>
        <div className="col-lg-5 col-sm-12 signup-form" style={{}}>
          <h1 style={{ marginBottom: "1rem" }}>Signup now</h1>
          <span style={{ color: "#808080", fontSize: "1.19em" }}>
            Or track your existing application.
          </span>

          <form onSubmit={handleSignup}>
            <div class="input-group mb-3 mt-4">
              <span class="input-group-text">+91</span>
              <div class="form-floating">
                <input
                  type="number"
                  class="form-control"
                  id="floatingInputGroup1"
                  placeholder="Username"
                  name="mobailNumber"
                  onChange={handleChange}
                  value={signupInfo.mobailNumber}
                />
                <label for="floatingInputGroup1">Mobile number</label>
              </div>
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="email"
                onChange={handleChange}
                value={signupInfo.email}
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="username"
                onChange={handleChange}
                value={signupInfo.username}
              />
            </div>

            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="password"
                onChange={handleChange}
                value={signupInfo.password}
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                DOB
              </label>
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="birthDate"
                onChange={handleChange}
                value={signupInfo.birthDate}
              />
            </div>

            <div class="input-group mb-3 mt-4">
              <div class="form-floating">
                <input
                  type="number"
                  class="form-control"
                  id="floatingInputGroup1"
                  placeholder="Pan number"
                  name="panNumber"
                  onChange={handleChange}
                  value={signupInfo.panNumber}
                />
                <label for="floatingInputGroup1">Pan-card number</label>
              </div>
            </div>

            <div class="input-group mb-3 mt-4">
              <div class="form-floating">
                <input
                  type="number"
                  class="form-control"
                  id="floatingInputGroup1"
                  placeholder="Username"
                  name="bankAccNumber"
                  onChange={handleChange}
                  value={signupInfo.bankAccNumber}
                />
                <label for="floatingInputGroup1">Bank account number</label>
              </div>
            </div>
            <button
              type="submit"
              style={{
                border: "none",
                backgroundColor: "#387ed1",
                color: "#fff",
                padding: "0.5rem",
                width: "8rem",
              }}
            >
              Continue
            </button>
          </form>
          <p>
            If you have already account,
            <a aria-current="page" href=" http://localhost:5174/login">
              login
            </a>
          </p>
          <ToastContainer />
        </div>
      </div>

      <div
        className="row text-center signup-info"
        style={{ marginBottom: "12rem", marginTop: "3rem" }}
      >
        <p>
          I authorise Zerodha to contact me even if my number is registered on
          DND. I authorise Zerodha to fetch my KYC information from the C-KYC
          registry with my PAN. <br /> Please visit this article to know more.
        </p>

        <p>
          If you are looking to open a HUF, Corporate, Partnership, or NRI
          account, you have to use the offline forms. For help, click here.
        </p>
      </div>
    </div>
  );
}
