import React, { useState } from "react";
import signupImg from "../../assets/signup.png";
import { Link } from "react-router-dom";
import { ToastContainer} from 'react-toastify'
import { handleError, handleSuccess } from '../../../util/tostify.js'
import axios from "axios";

export default function Signup() {

  let [loginInfo, setLoginInfo] = useState({
    mobailNumber: "",
    password: ""
  })

  const handleInput = (e) => {
       const { value, name } = e.target;
       let copyLoginInfo = { ...loginInfo };
       copyLoginInfo[name] = value;
       setLoginInfo(copyLoginInfo);
  }   


  const handleLogin = (e) => {
    e.preventDefault();
    const {mobailNumber, password} = loginInfo;

    if (mobailNumber.length < 10 || mobailNumber.length > 10) {
      return handleError("Mobail number must be 10 digits");
    }

    axios.post("http://localhost:8080/login", {
      mobailNumber,
      password
    }).then((res) => {
      handleError(res.data.message);
      window.location.href = 'http://localhost:5174/'  
    }).catch((error) => {
      console.error("server error", error);
    })
  } 

  return (
    <div className="container" style={{ marginTop: "9rem" }}>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <img src={signupImg} alt="Zerodha's signup landing page" />
        </div>
        <div className="col-1"></div>
        <div className="col-lg-5 col-sm-12 signup-form">
          <h1 style={{ marginBottom: "1rem" }}>Signup now</h1>
          <span style={{ color: "#808080", fontSize: "1.19em" }}>
            Or track your existing application.
          </span>
          <form onSubmit={ handleLogin }>
            <div className="input-group mb-3 mt-4">
              <span className="input-group-text">+91</span>
              <div className="form-floating">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInputGroup1"
                  placeholder="Username"
                  name="mobailNumber"
                  value={loginInfo.mobailNumber}
                  onChange={handleInput}
                  
                />
                <label htmlFor="floatingInputGroup1">Mobile number</label>
              </div>
            </div>
            
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="password"
                value={loginInfo.password}
                onChange={handleInput}
                
              />
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

          <Link aria-current="page" to="/signup">
                  Create account
          </Link>
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
