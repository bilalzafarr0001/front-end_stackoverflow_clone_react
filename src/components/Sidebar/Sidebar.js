import React from "react";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <div>
      <ul
        class="nav flex-column "
        style={{ marginLeft: "120px", paddingTop: "40px", cursor: "pointer" }}
      >
        <li class="nav-item" style={{ marginTop: "10px", color: "#222" }}>
          <Link to="/">
            <div
              class="d-flex justify-content-between"
              style={{
                color: "black",
                backgroundColor: props.name === "home" ? "lightgray" : null,
                padding: props.name == "home" ? "10px" : null,
                borderRadius: props.name == "home" ? "12px" : null,
              }}
            >
              <BiWorld style={{ margin: "3px" }} />
              <p>Stack Overflow</p>
            </div>
          </Link>
        </li>
        <li class="nav-item" style={{ marginTop: "20px", color: "#222" }}>
          {" "}
          <Link
            to="/tags"
            style={{
              color: "black",
              backgroundColor: props.name === "tag" ? "lightgray" : null,
              padding: props.name == "tag" ? "10px" : null,
              borderRadius: props.name == "tag" ? "12px" : null,
            }}
          >
            Tags
          </Link>{" "}
        </li>
        <li class="nav-item" style={{ marginTop: "20px" }}>
          {" "}
          <Link
            to="/users"
            style={{
              color: "black",
              backgroundColor: props.name === "user" ? "lightgray" : null,
              padding: props.name == "user" ? "10px" : null,
              borderRadius: props.name == "user" ? "12px" : null,
            }}
          >
            Users
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
}
