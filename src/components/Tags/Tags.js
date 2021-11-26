import React from "react";
import Sidebar from "../Sidebar/Sidebar";
export default function Tags() {
  return (
    <>
      <div class="d-flex justify-content-start">
        <Sidebar name="tag" />
        <div
          style={{
            marginLeft: "8%",
            marginTop: "1rem",
            width: "55%",
          }}
        >
          <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
            <h1>Tags</h1>
            <p>
              A tag is a keyword or label that categorizes your question with
              other, similar questions. Using the right tags makes it easier for
              others to find and answer your question.
            </p>
            <div class="ui input focus" style={{ marginTop: "1rem" }}>
              <i class="search icon" style={{ marginTop: "0.7rem" }}></i>
              <input type="text" placeholder="Filter Tag name ..." />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div class="d-flex justify-content-between flex-wrap">
              <button
                type="button"
                class="btn btn-info"
                style={{
                  width: "5.4rem",
                  height: "3rem",
                  backgroundColor: "#b3d9ff",
                  color: "#0080ff",
                  marginTop: "1rem",
                }}
              >
                javascript
              </button>

              <button
                type="button"
                class="btn btn-info"
                style={{
                  width: "5.4rem",
                  height: "3rem",
                  backgroundColor: "#b3d9ff",
                  color: "#0080ff",
                  marginTop: "1rem",
                }}
              >
                javascript
              </button>

              <button
                type="button"
                class="btn btn-info"
                style={{
                  width: "5.4rem",
                  height: "3rem",
                  backgroundColor: "#b3d9ff",
                  color: "#0080ff",
                  marginTop: "1rem",
                }}
              >
                javascript
              </button>

              <button
                type="button"
                class="btn btn-info"
                style={{
                  width: "5.4rem",
                  height: "3rem",
                  backgroundColor: "#b3d9ff",
                  color: "#0080ff",
                  marginTop: "1rem",
                }}
              >
                javascript
              </button>

              <button
                type="button"
                class="btn btn-info"
                style={{
                  width: "5.4rem",
                  height: "3rem",
                  backgroundColor: "#b3d9ff",
                  color: "#0080ff",
                  marginTop: "1rem",
                }}
              >
                javascript
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
