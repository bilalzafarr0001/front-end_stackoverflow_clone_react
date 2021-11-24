import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <div class="d-flex justify-content-start">
        <Sidebar name="user" />
        <div style={{ marginLeft: "80px", marginTop: "40px", width: "55vw" }}>
          {/* <div
            class="d-flex "
            style={{
              padding: "8px",
              backgroundColor: "lightgray",
              borderRadius: "9px",
            }}
          >
            <img
              src="https://secure.gravatar.com/avatar/619ccf7f233fad2d04e935bd?s=32&d=identicon"
              style={{ width: "250px", height: "200px" }}
            />
            <div class="d-flex flex-column">
              <h2 style={{ marginLeft: "15px" }}>Beelal</h2>
              <h4 style={{ marginLeft: "15px" }}>Created 21 Hours ago</h4>
            </div>
          </div> */}
          <div class="ui card">
            <div class="image">
              <img src="https://c4.wallpaperflare.com/wallpaper/525/824/934/digital-digital-art-artwork-illustration-character-design-hd-wallpaper-preview.jpg" />
            </div>
            <div class="content">
              <a class="header" style={{ color: "#FF8C00" }}>
                Beelal Zafar
              </a>
              <div class="meta">
                <span class="date">Joined in 2017</span>
              </div>
              <div class="description">
                A Developer , Designer ,expertise in MERN Stack.
              </div>
            </div>

            <div class="extra content">
              <a>
                <i
                  style={{ color: "#FF8C00" }}
                  class="question circle outline icon"
                ></i>
                23 Questions
              </a>
            </div>
          </div>

          <br></br>
          <br></br>
          <div class="d-flex justify-content-between">
            <h3>Last Questions</h3>
            <Link to="/">
              {" "}
              <button
                type="button"
                class="btn btn-info"
                style={{
                  backgroundColor: "#0080ff",
                  color: "#fff",
                }}
              >
                Questions
              </button>
            </Link>
          </div>
          <br></br>
          <br></br>
          <div class="d-flex justify-content-between">
            <p style={{ color: "#0080ff", fontSize: "17px" }}>
              qrrewfe cwsfwefewfewfewfewfewfewfewfwef ffewfewfewfwfwf
            </p>{" "}
            <p
              style={{
                color: "gray",
              }}
            >
              31 minutes ago
            </p>
          </div>
          <div class="ui inverted divider"></div>
          <div class="d-flex justify-content-between">
            <p style={{ color: "#0080ff", fontSize: "17px" }}>
              qrrewfe cwsfwefewfewfewfewfewfewfewfwef ffewfewfewfwfwf
            </p>{" "}
            <p
              style={{
                color: "gray",
              }}
            >
              31 minutes ago
            </p>
          </div>
          <div class="ui inverted divider"></div>
          <div class="d-flex justify-content-between">
            <p style={{ color: "#0080ff", fontSize: "17px" }}>
              qrrewfe cwsfwefewfewfewfewfewfewfewfwef ffewfewfewfwfwf
            </p>{" "}
            <p
              style={{
                color: "gray",
              }}
            >
              31 minutes ago
            </p>
          </div>
          <div class="ui inverted divider"></div>
          <div class="d-flex justify-content-between">
            <p style={{ color: "#0080ff", fontSize: "17px" }}>
              qrrewfe cwsfwefewfewfewfewfewfewfewfwef ffewfewfewfwfwf
            </p>{" "}
            <p
              style={{
                color: "gray",
              }}
            >
              31 minutes ago
            </p>
          </div>
          <div class="ui inverted divider"></div>
          <div class="d-flex justify-content-between">
            <p style={{ color: "#0080ff", fontSize: "17px" }}>
              qrrewfe cwsfwefewfewfewfewfewfewfewfwef ffewfewfewfwfwf
            </p>{" "}
            <p
              style={{
                color: "gray",
              }}
            >
              31 minutes ago
            </p>
          </div>
          <div class="ui inverted divider"></div>
          <div class="d-flex justify-content-between">
            <p style={{ color: "#0080ff", fontSize: "17px" }}>
              qrrewfe cwsfwefewfewfewfewfewfewfewfwef ffewfewfewfwfwf
            </p>{" "}
            <p
              style={{
                color: "gray",
              }}
            >
              31 minutes ago
            </p>
          </div>
          <div class="ui inverted divider"></div>
        </div>
      </div>
    </>
  );
}
