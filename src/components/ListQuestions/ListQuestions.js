import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function ListQuestions() {
  return (
    <div class="d-flex justify-content-start">
      <Sidebar name="home" />
      <div style={{ marginLeft: "80px", marginTop: "40px", width: "55vw" }}>
        <div class="d-flex justify-content-between">
          <h1>All Questions</h1>
          <Link to="/createquestion">
            {" "}
            <button
              type="button"
              class="btn btn-info"
              style={{
                backgroundColor: "#0080ff",
                color: "#fff",
              }}
            >
              Ask Question
            </button>
          </Link>
        </div>

        <div class="d-flex justify-content-end">
          <div class="btn-group" role="group" aria-label="First group">
            <button type="button" class="btn btn-outline-secondary">
              Votes
            </button>
            <button type="button" class="btn btn-outline-secondary">
              Views
            </button>
            <button type="button" class="btn btn-outline-secondary">
              Newest
            </button>
            <button type="button" class="btn btn-outline-secondary">
              Oldest
            </button>
          </div>
        </div>
        <div class="ui inverted divider"></div>
        {/* // new flex is coming  */}
        <div class="d-flex">
          <div class="d-flex flex-column align-items-start">
            <p style={{ color: "gray" }}>1</p>
            <p style={{ color: "gray" }}>votes</p>
            <p style={{ color: "gray" }}>0</p>
            <p style={{ color: "gray" }}>answer</p>
          </div>
          {/* // new text is coming  */}
          <div
            class="d-flex flex-column align-items-start"
            style={{ marginLeft: "17px" }}
          >
            <Link to={`question/123`}>
              {" "}
              <p style={{ color: "#0080ff", fontSize: "16px" }}>
                {" "}
                ewfwefwefewfwewefwewwfwfweffwe wfwefwefwefwefwefwfwff wefc wcw
              </p>
            </Link>
            <p style={{ color: "gray" }}>
              {" "}
              ewfweqwfdwqfqwfqwfqwwqfwqfqwfwqfqwfqwfqwfqqwff wefc wcw
            </p>
            <p
              style={{
                backgroundColor: "#b3d9ff",
                color: "#0080ff",
                padding: "5px",
                borderRadius: "2px",
              }}
            >
              tag1
            </p>
          </div>
          {/* // last  */}
          <div class="d-flex flex-column mt-auto">
            <div class="d-flex ">
              <img src="https://secure.gravatar.com/avatar/619ccf7f233fad2d04e935bd?s=32&d=identicon" />
              <div class="d-flex flex-column " style={{ marginLeft: "7px" }}>
                <p style={{ color: "gray" }}>asked 22 minutes ago </p>
                <p style={{ color: "#0080ff" }}>rtrtrt</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end --> */}
        <div class="ui inverted divider"></div>
      </div>
      <div
        style={{
          marginLeft: "20px",
          marginTop: "40px",
          width: "15vw",
        }}
      >
        <h3>Popular Tags</h3>

        <div
          class="d-flex justify-content-between flex-wrap"
          style={{ padding: "8px" }}
        >
          <button
            type="button"
            class="btn btn-info"
            style={{
              width: "90px",
              height: "25px",
              backgroundColor: "#b3d9ff",
              color: "#0080ff",
            }}
          >
            javascript
          </button>{" "}
          <button
            type="button"
            class="btn btn-info"
            style={{
              width: "70px",
              height: "25px",
              backgroundColor: "#b3d9ff",
              color: "#0080ff",
            }}
          >
            nodejs
          </button>
          <button
            type="button"
            class="btn btn-info"
            style={{
              width: "80px",
              height: "25px",
              backgroundColor: "#b3d9ff",
              color: "#0080ff",
              marginTop: "15px",
            }}
          >
            nextjs
          </button>{" "}
          <button
            type="button"
            class="btn btn-info"
            style={{
              width: "80px",
              height: "25px",
              backgroundColor: "#b3d9ff",
              color: "#0080ff",
              marginTop: "15px",
            }}
          >
            python
          </button>
          <button
            type="button"
            class="btn btn-info"
            style={{
              width: "65px",
              height: "25px",
              backgroundColor: "#b3d9ff",
              color: "#0080ff",
              marginTop: "15px",
            }}
          >
            ruby
          </button>
        </div>
      </div>
    </div>
  );
}
