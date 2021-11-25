import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function ViewQuestion() {
  const [isInput, setIsInput] = useState(false);
  const [isInput1, setIsInput1] = useState(false);

  const [comment, setComment] = useState("");
  const [comment1, setComment1] = useState("");

  const [comarray, setCommentArray] = useState([]);
  const [comarray1, setCommentArray1] = useState([]);

  function submitMeetingForm() {
    console.log("submit form of question");
    console.log("comment is", comment);
    comarray.push(comment);
    console.log("comarray is ", comarray);
    if (!comment) {
      console.log("comment must be atleast 6 characters !");
    }
    setComment("");
    setIsInput(false);
  }
  function submitMeetingForm1() {
    console.log("submit form of answer");
    console.log("comment1 is", comment1);
    comarray1.push(comment1);
    console.log("comarray is ", comarray1);
    if (!comment1) {
      console.log("comment must be atleast 6 characters !");
    }
    setComment1("");
    setIsInput1(false);
  }

  return (
    <div class="container-fluid d-flex justify-content-start">
      <Sidebar name="home" />
      <div
        style={{
          marginLeft: "8%",
          marginTop: "1rem",
          width: "55%",
        }}
      >
        <div class="d-flex justify-content-between">
          <p class="text-wrap">
            ewfwefwe fewfwewefwewwfwfweffwe wfwefwefwefwefwefwfwff wef
          </p>
          <Link to="/createquestion">
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

          <div class="d-flex justify-content-between">
            <div class="d-flex flex-column align-items-start">
              <p style={{ color: "gray" }}>
                {" "}
                question answer is posting wfewfwefweewwe
              </p>

              <button class="negative ui button" style={{ padding: "10px" }}>
                delete
              </button>
            </div>
            {/* // last  */}
            <div class="d-flex flex-column mt-auto">
              <div class="d-flex ">
                <img src="https://secure.gravatar.com/avatar/619ccf7f233fad2d04e935bd?s=32&d=identicon" />
                <div class="d-flex flex-column " style={{ marginLeft: "2px" }}>
                  <p style={{ color: "gray" }}>asked 22 minutes ago </p>
                  <p style={{ color: "#0080ff" }}>rtrtrt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ui inverted divider"></div>

        {comarray.map((book, idx) => {
          return (
            <>
              <div class="d-flex">
                <p book={book} key={idx}>
                  {book}
                </p>
                __
                <p
                  style={{
                    backgroundColor: "#b3d9ff",
                    color: "#0080ff",
                    padding: "4px",
                    borderRadius: "4px",
                  }}
                >
                  rtrt
                </p>
                <p style={{ color: "lightgray", marginLeft: "0.12rem" }}>
                  Nov 29 at 18:50{" "}
                </p>
                <button
                  style={{
                    width: "85px",
                    height: "28px",
                    marginLeft: "5px",
                  }}
                  class="negative ui button"
                >
                  delete
                </button>
              </div>
              <div class="ui inverted divider"></div>
            </>
          );
        })}

        {/* <!-- end --> */}
        <br></br>
        <br></br>
        <br></br>
        {!isInput ? (
          <button
            class="ui primary basic button"
            onClick={() => setIsInput(true)}
          >
            add comment{" "}
          </button>
        ) : (
          <div class="ui form">
            <div class="field">
              <textarea
                rows="4"
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <br></br>
              <br></br>
              <button
                class="btn btn-info"
                type="submit"
                style={{
                  backgroundColor: "#0080ff",
                  color: "#fff",
                }}
                onClick={submitMeetingForm}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        <br></br>
        <br></br>
        <br></br>

        <div class="d-flex justify-content-between">
          <h3>Answer</h3>

          <div class="d-flex justify-content-end">
            <div class="btn-group" role="group" aria-label="First group">
              <button type="button" class="btn btn-outline-secondary">
                Votes
              </button>

              <button type="button" class="btn btn-outline-secondary">
                Newest
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Oldest
              </button>
            </div>
          </div>
        </div>

        {/* // asnwer area  */}
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column align-items-start">
            <p style={{ color: "gray" }}>
              {" "}
              question answer is posting wfewfwefweewwe
            </p>

            <button class="negative ui button" style={{ padding: "10px" }}>
              delete
            </button>
          </div>
          {/* // last  */}
          <div class="d-flex flex-column mt-auto">
            <div class="d-flex ">
              <img src="https://secure.gravatar.com/avatar/619ccf7f233fad2d04e935bd?s=32&d=identicon" />
              <div class="d-flex flex-column " style={{ marginLeft: "2px" }}>
                <p style={{ color: "gray" }}>asked 22 minutes ago </p>
                <p style={{ color: "#0080ff" }}>rtrtrt</p>
              </div>
            </div>
          </div>
        </div>
        <div class="ui inverted divider"></div>
        {comarray1.map((book, idx) => {
          return (
            <>
              <div class="d-flex">
                <p book={book} key={idx}>
                  {book}
                </p>
                __
                <p
                  style={{
                    backgroundColor: "#b3d9ff",
                    color: "#0080ff",
                    padding: "4px",
                    borderRadius: "4px",
                  }}
                >
                  rtrt
                </p>
                <p style={{ color: "lightgray", marginLeft: "4px" }}>
                  Nov 29 at 18:50{" "}
                </p>
                <button
                  style={{
                    width: "85px",
                    height: "28px",
                    marginLeft: "0.2rem",
                    padding: "0.4rem",
                  }}
                  class="negative ui button"
                >
                  delete
                </button>
              </div>
              <div class="ui inverted divider"></div>
            </>
          );
        })}

        <br></br>
        <br></br>
        <br></br>
        {!isInput1 ? (
          <button
            class="ui primary basic button"
            onClick={() => setIsInput1(true)}
          >
            add comment{" "}
          </button>
        ) : (
          <div class="ui form">
            <div class="field">
              <textarea
                rows="4"
                onChange={(e) => setComment1(e.target.value)}
              ></textarea>
              <br></br>
              <br></br>
              <button
                class="btn btn-info"
                type="submit"
                style={{
                  backgroundColor: "#0080ff",
                  color: "#fff",
                }}
                onClick={submitMeetingForm1}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        <br></br>
        <br></br>
        <br></br>
        <h2>Your answer</h2>
        <div class="ui form">
          <div class="field">
            <textarea></textarea>
          </div>
        </div>

        <br></br>
        <br></br>
        <button
          type="button"
          class="btn btn-info"
          style={{
            backgroundColor: "#0080ff",
            color: "#fff",
          }}
        >
          Post Your Answer
        </button>
        <br></br>
        <br></br>
        <p style={{ fontSize: "17px" }}>
          Browse other questions tagged question3or{" "}
          <Link to="/createquestion">ask your own question.</Link>
        </p>
        <br></br>
        <br></br>
      </div>
      <div
        style={{
          marginLeft: "0.12rem",
          marginTop: "1rem",
          width: "10%",
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
              height: "28px",
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
              height: "28px",
              backgroundColor: "#b3d9ff",
              color: "#0080ff",
              marginTop: "15px",
            }}
          >
            nodejs
          </button>
          <button
            type="button"
            class="btn btn-info"
            style={{
              width: "80px",
              height: "28px",
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
              height: "28px",
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
              height: "28px",
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
