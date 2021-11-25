import React from "react";
import Sidebar from "../Sidebar/Sidebar";
export default function Tags() {
  return (
    <>
      <div class="d-flex justify-content-start">
        <Sidebar name="tag" />
        <div style={{ marginLeft: "100px", marginTop: "40px" }}>
          <h1>Tags</h1>
          <p>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </p>
          <div class="ui input focus" style={{ marginTop: "20px" }}>
            <i class="search icon" style={{ marginTop: "0.7rem" }}></i>
            <input type="text" placeholder="Filter Tag name ..." />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div class="d-flex justify-content-between">
            <div class="ui message">
              <div class="header" style={{ color: "gray" }}>
                1 question
              </div>
              <br></br>
              <button
                type="button"
                class="btn btn-info"
                style={{
                  width: "100px",
                  height: "28px",
                  backgroundColor: "#b3d9ff",
                  color: "#0080ff",
                }}
              >
                javascript
              </button>
            </div>

            <div class="ui message">
              <div class="header" style={{ color: "gray" }}>
                11 question
              </div>
              <br></br>
              <button
                type="button"
                class="btn btn-info"
                style={{
                  width: "90px",
                  height: "28px",
                  backgroundColor: "#b3d9ff",
                  color: "#0080ff",
                }}
              >
                express
              </button>
            </div>

            <div class="ui message">
              <div class="header" style={{ color: "gray" }}>
                19 question
              </div>
              <br></br>
              <button
                type="button"
                class="btn btn-info"
                style={{
                  width: "90px",
                  height: "28px",
                  backgroundColor: "#b3d9ff",
                  color: "#0080ff",
                }}
              >
                react
              </button>
            </div>

            <div class="ui message">
              <div class="header" style={{ color: "gray" }}>
                2 question
              </div>
              <br></br>
              <button
                type="button"
                class="btn btn-info"
                style={{
                  width: "90px",
                  height: "28px",
                  backgroundColor: "#b3d9ff",
                  color: "#0080ff",
                }}
              >
                nodejs
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
