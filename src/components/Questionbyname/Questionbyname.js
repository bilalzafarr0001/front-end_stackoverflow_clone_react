import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { client } from "../client";
import Sidebar from "../Sidebar/Sidebar";

function Questionbyname() {
  const [questions, setQuestions] = useState(null);
  const history = useHistory();
  const { username } = useParams();
  console.log("Username of params are ", username);
  useEffect(() => {
    client(`/question/user/${username}`)
      .then((res) => {
        setQuestions(res.questions);
        console.log("Questions by USERNAME are  ", questions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="d-flex justify-content-start">
      <Sidebar name="home" />
      <div
        style={{
          marginLeft: "8%",
          marginTop: "1rem",
          width: "55%",
        }}
      >
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
        {questions?.map((question, i) => (
          <>
            {" "}
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
                style={{ marginLeft: "0.12rem" }}
              >
                <p class="text-wrap">
                  <Link to={`/question/${question._id}`}>{question.title}</Link>
                </p>

                <p class="text-wrap">{question.text}</p>
                <div class="d-flex">
                  {question.tags.map((tag) => (
                    <p
                      style={{
                        backgroundColor: "#b3d9ff",
                        color: "#0080ff",
                        padding: "0.12rem",
                        borderRadius: "2px",
                        marginRight: "7px",
                      }}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <div class="d-flex ">
                  <img src="https://secure.gravatar.com/avatar/619ccf7f233fad2d04e935bd?s=32&d=identicon" />
                  <div
                    class="d-flex flex-column "
                    style={{ marginLeft: "2px" }}
                  >
                    <p style={{ color: "gray" }}>asked 22 minutes ago </p>
                    <p style={{ color: "#0080ff" }}>rtrtrt</p>
                  </div>
                </div>
              </div>
              {/* // last  */}
            </div>
            {/* <!-- end --> */}
            <div class="ui inverted divider"></div>
          </>
        ))}
      </div>
      <div
        style={{
          marginLeft: "0.5rem",
          marginRight: "0.5rem",
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

export default Questionbyname;
