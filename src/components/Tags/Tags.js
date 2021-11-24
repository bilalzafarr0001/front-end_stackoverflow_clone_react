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
            <input type="text" placeholder="Filter Tag name ..." />
          </div>
        </div>
      </div>
    </>
  );
}
