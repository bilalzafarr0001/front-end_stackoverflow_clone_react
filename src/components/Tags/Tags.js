import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { client } from "../client";
import { Link } from "react-router-dom";

export default function Tags() {
  const [tags, setTags] = useState(null);

  useEffect(() => {
    client(`/tags`)
      .then((res) => {
        console.log(res.tags);
        setTags(res.tags);
        console.log("List of all tags in Tags Compnent  ", tags);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div class="d-flex justify-content-start">
        <Sidebar name="user" />
        <div
          style={{
            marginLeft: "8%",
            marginTop: "1rem",
            width: "55%",
          }}
        >
          <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
            <h1>Tags</h1>

            <div class="ui input focus" style={{ marginTop: "1rem" }}>
              <i class="search icon" style={{ marginTop: "0.7rem" }}></i>
              <input type="text" placeholder="Filter Tag name ..." />
            </div>
            <br></br>
            <br></br>
            <br></br>

            <div class="d-flex justify-content-between flex-wrap">
              {tags?.map((tag, i) => (
                <Link to={`/tag/${tag._id}`}>
                  {" "}
                  <button
                    type="button"
                    class="btn btn-info"
                    style={{
                      width: "6rem",
                      height: "3rem",
                      backgroundColor: "#b3d9ff",
                      color: "#0080ff",
                      marginTop: "1rem",
                    }}
                  >
                    {tag._id}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
