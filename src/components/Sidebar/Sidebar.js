import React from "react";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <div>
      <ul
        class="nav flex-column "
        style={{
          marginLeft: "3.5rem",
          paddingTop: "4rem",
          cursor: "pointer",
          width: "10%",
        }}
      >
        <li class="nav-item" style={{ marginTop: "2rem", color: "#222" }}>
          <Link to="/">
            <div
              class="d-flex justify-content-between"
              style={{
                color: "black",
                backgroundColor: props.name === "home" ? "lightgray" : null,
                padding: props.name == "home" ? "0.4rem" : null,
                borderRadius: props.name == "home" ? "12px" : null,
              }}
            >
              <p>Stack Overflow</p>
            </div>
          </Link>
        </li>
        <li class="nav-item" style={{ marginTop: "1rem", color: "#222" }}>
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
        <li class="nav-item" style={{ marginTop: "1rem" }}>
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
