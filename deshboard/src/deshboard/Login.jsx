import React, { useState } from "react";
import signupImg from "../assets/signup.png";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../../frontend/util/tostify.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    mobailNumber: "",
    password: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { mobailNumber, password } = loginInfo;

    if (mobailNumber.length !== 10) {
      return handleError("Mobile number must be 10 digits");
    }

    axios
      .post("http://localhost:8080/login", { mobailNumber, password })
      .then((res) => {
        handleSuccess(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate('/');
      })  
      .catch((error) => {
        console.error("Server error", error);
        
        handleError("Login failed. Please try again.");
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        margin: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          maxWidth: "1200px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        {/* Image Section */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            backgroundColor: "#e9ecef",
          }}
        >
          <img
            src={signupImg}
            alt="Signup Illustration"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Form Section */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h1 style={{ marginBottom: "1rem" }}>Signup now</h1>
          <span style={{ color: "#6c757d", fontSize: "1.1em" }}>
            Or track your existing application.
          </span>
          <form onSubmit={handleLogin} style={{ marginTop: "1.5rem" }}>
            {/* Mobile Number Input */}
            <div style={{ marginBottom: "1rem", textAlign: "left" }}>
              <label
                htmlFor="mobailNumber"
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.9em",
                  color: "#495057",
                }}
              >
                Mobile Number
              </label>
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.5rem",
                    backgroundColor: "#e9ecef",
                    border: "1px solid #ced4da",
                    borderRadius: "0.25rem 0 0 0.25rem",
                  }}
                >
                  +91
                </span>
                <input
                  type="number"
                  id="mobailNumber"
                  name="mobailNumber"
                  value={loginInfo.mobailNumber}
                  onChange={handleInput}
                  style={{
                    flex: 1,
                    padding: "0.5rem",
                    border: "1px solid #ced4da",
                    borderRadius: "0 0.25rem 0.25rem 0",
                  }}
                />
              </div>
            </div>

            {/* Password Input */}
            <div style={{ marginBottom: "1rem", textAlign: "left" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.9em",
                  color: "#495057",
                }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginInfo.password}
                onChange={handleInput}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #ced4da",
                  borderRadius: "0.25rem",
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.75rem",
                backgroundColor: "#387ed1",
                color: "#fff",
                border: "none",
                borderRadius: "0.25rem",
                fontSize: "1em",
                cursor: "pointer",
              }}
            >
              Continue
            </button>
          </form>

          <Link
            to="/signup"
            style={{
              display: "block",
              marginTop: "1rem",
              color: "#387ed1",
              textDecoration: "none",
            }}
          >
            Create account
          </Link>
          <ToastContainer />
        </div>
      </div>

      <div
        style={{
          marginTop: "2rem",
          textAlign: "center",
          fontSize: "0.9em",
          color: "#6c757d",
          maxWidth: "800px",
        }}
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
