import React, { useState } from "react";
import harsh from "../../assets/harsh.png";
import kunal from "../../assets/kunal.png";
import bhargav from "../../assets/bhargav.png";

export default function TeamMembers(e) {
  let [bio, setBio] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  let openBio = (idx) => {
    if (bio[idx] === false) {
      setBio((pre) => {
        pre[idx] = true;
        return [...pre];
      });
      console.log(idx);
    } else {
      setBio((pre) => {
        pre[idx] = false;
        return [...pre];
      });
    }
  };
  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <div className="row">
        <div
          className="col"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={harsh}
            alt=""
            style={{
              borderRadius: "50%",
              width: "45%",
            }}
          />
          <h5 className="mt-3">Harsh Mahajan</h5>
          <p>Co-founder & CFO</p>
          <button
            onClick={() => openBio(0)}
            id="bio"
            style={{ border: "none", backgroundColor: "#fff" }}
          >
            Bio{" "}
          </button>
          {bio[0] ? (
            <p>
              Harsh is an astute and experienced investor, and he heads
              financial planning at Zerodha. An avid reader, he always
              appreciates a good game of chess.
            </p>
          ) : (
            <></>
          )}
        </div>
        <div
          className="col"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={kunal}
            alt=""
            style={{
              borderRadius: "50%",
              width: "45%",
            }}
          />
          <h5 className="mt-3">Patel Kunal</h5>
          <p>CTO</p>
          <button
            onClick={() => openBio(1)}
            id="bio"
            style={{ border: "none", backgroundColor: "#fff" }}
          >
            Bio{" "}
          </button>
          {bio[1] ? (
            <p>
              Kunal has a PhD in Artificial Intelligence & Computational
              Linguistics, and is the brain behind all our technology and
              products. He has been a developer from his adolescence and
              continues to write code every day.
            </p>
          ) : (
            <></>
          )}
        </div>
        <div
          className="col"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={bhargav}
            alt=""
            style={{
              borderRadius: "50%",
              width: "45%",
            }}
          />
          <h5 className="mt-3">Patel Bhargav</h5>
          <p>COO</p>
          <button
            onClick={() => openBio(2)}
            id="bio"
            style={{ border: "none", backgroundColor: "#fff" }}
          >
            Bio{" "}
          </button>
          {bio[2] ? (
            <p>
              Bhargav is the backbone of Zerodha taking care of operations and
              ensuring that we are compliant to rules and regulations. He has
              over a dozen certifications in financial markets and is also
              proficient in technical analysis. Workouts, cycling, and
              adventuring is what he does outside of Zerodha.
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
