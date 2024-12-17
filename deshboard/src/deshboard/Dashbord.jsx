import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    function getUserDataFromToken(token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        localStorage.setItem("id", payload.id);
        return { id: payload.id, username: payload.username };
       
      } catch (error) {
        console.error("Invalid token", error);
        
      }
    }
    const user = getUserDataFromToken(token);
    setUsername(user.username);
    console.log("User ID:", user);
    console.log("Username:", user);
    
  }, []);
  console.log("Deshboard")
  return (
    <div className="container">
      <div className="row">
        <h2
          style={{
            fontSize: "1.2em",
            paddingTop: "9%",
            paddingBottom: "1rem",
            borderBottom: "1px solid #999898",
          }}
        >
          Hi, {username}
        </h2>
      </div>

      <div
        className="row"
        style={{ padding: "6% 4%", borderBottom: "1px solid #999898" }}
      >
        <h4 style={{ padding: "4% 0", fontSize: "1.1em" }}>Equity</h4>
        <div className="col">
          <span style={{ fontSize: "2.5em" }}>{3.74}k</span>
          <p style={{ paddingTop: "1.5rem", fontSize: "0.8em" }}>
            Margin available
          </p>
        </div>

        <div className="col">
          <p>Margins used {"0"}</p>
          <p>Opening balance {"3.74"}k</p>
        </div>
      </div>

      <div
        className="row"
        style={{ padding: "6% 4%", borderBottom: "1px solid #999898" }}
      >
        <h4 style={{ padding: "4% 0", fontSize: "1.1em" }}>Equity</h4>
        <div className="col">
          <span style={{ fontSize: "2.5em" }}>{3.74}k</span>
          <p style={{ paddingTop: "1.5rem", fontSize: "0.8em" }}>
            Margin available
          </p>
        </div>

        <div className="col">
          <p>Margins used {"0"}</p>
          <p>Opening balance {"3.74"}k</p>
        </div>
      </div>
    </div>
  );
}
