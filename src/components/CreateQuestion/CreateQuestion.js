import React from "react";

export default function CreateQuestion() {
  return (
    <div class="container" style={{ backgroundColor: "#DCDCDC" }}>
      <div
        class="d-flex align-items-center justify-content-between"
        style={{ width: "60vw", padding: "30px" }}
      >
        <h2 style={{ fontSize: "20px" }}>Ask a Public Queston </h2>
        <img
          src="http://localhost:3000/images/background.svg"
          style={{ width: "600px", height: "220px" }}
        />
        {/* form */}
      </div>
      <div style={{ padding: "20px", backgroundColor: "#fff" }}>
        <div class="ui form">
          <div class="field">
            <label> Title</label>
            <br></br>
            <label>
              Be specific and imagine you’re asking a question to another person
            </label>
            <input type="text" />
          </div>
          <div class="field">
            <label>Body</label>
            <br></br>
            <label>
              Include all the information someone would need to answer your
              question
            </label>
            <textarea rows="4"></textarea>
          </div>
          <div class="field">
            <label>Tags</label>
            <br></br>
            <label>
              Add up to 5 tags to describe what your question is about
            </label>
            <input type="text" />
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-info"
        style={{
          margin: "30px",
          backgroundColor: "#0080ff",
          color: "#fff",
        }}
      >
        Review your Question
      </button>
    </div>
  );
}
