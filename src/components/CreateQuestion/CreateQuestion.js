import React, { useState, useEffect } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { client } from "../client";
import { useHistory } from "react-router-dom";

export default function CreateQuestion() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const submitForm = async () => {
    console.log(title);
    console.log(text);
    console.log(tags);

    if (title && text && tags) {
      const values = {
        title: title,
        text: text,
        tags: tags,
      };
      console.log("Values are", values);
      try {
        await client("/questions", {
          values,
        }).then((res) => {
          console.log("User question posted  data is :", res);
        });
      } catch (err) {
        console.log("error", err);
      }
      history.push(`/`);
    } else {
      console.log("Please fill all fields ");
    }
  };

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
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div class="field">
            <label>Body</label>
            <br></br>
            <label>
              Include all the information someone would need to answer your
              question
            </label>
            <textarea
              rows="4"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <div class="field">
            <label>Tags</label>
            <br></br>
            <label>
              Add up to 5 tags to describe what your question is about
            </label>
            <ReactTagInput
              tags={tags}
              placeholder="Type tags and press enter..."
              onChange={(newTags) => setTags(newTags)}
            />
          </div>
        </div>
      </div>
      <button
        type="submit "
        class="btn btn-info"
        style={{
          margin: "30px",
          backgroundColor: "#0080ff",
          color: "#fff",
        }}
        onClick={submitForm}
      >
        Review your Question
      </button>
    </div>
  );
}
