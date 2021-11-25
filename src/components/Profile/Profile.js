import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useHistory, useParams, Link } from "react-router-dom";
import { client } from "../client";
import Moment from "react-moment";

export default function Profile() {
  const history = useHistory();
  const { username } = useParams();
  console.log("username", username);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    client(`/user/${username}`)
      .then((res) => {
        setProfile(res);
        console.log("User Profile data is :", profile);
      })
      .catch((err) => console.log(err));
  }, [username]);
  return (
    <>
      <div class="d-flex justify-content-start">
        <Sidebar name="user" />
        <div style={{ marginLeft: "8%", marginTop: "1rem", width: "55%" }}>
          <div class="ui card">
            <div class="image">
              <img src={profile.profilePhoto} />
            </div>
            <div class="content">
              <a class="header" style={{ color: "#FF8C00" }}>
                {profile.username}
              </a>
              <div class="meta">
                <span class="date">
                  <Moment format="YYYY/MM/DD">{profile.created}</Moment>
                </span>
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
            <Link to="/question/123">
              <p style={{ color: "#0080ff", fontSize: "17px" }}>
                ewf wef wefewf we wefw eww fwfwe ffwe wfw ef wefw e fwe fwef wfw
              </p>
            </Link>
            <p
              style={{
                color: "gray",
                marginLeft: "0.rem",
              }}
            >
              31 minutes ago
            </p>
          </div>
          <div class="ui inverted divider"></div>
          <div class="d-flex justify-content-between">
            <Link to="/question/123">
              <p style={{ color: "#0080ff", fontSize: "17px" }}>
                ewf wef wefewf we wefw eww fwfwe ffwe wfw ef wefw e fwe fwef wfw{" "}
              </p>{" "}
            </Link>
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
            <Link to="/question/123">
              <p style={{ color: "#0080ff", fontSize: "17px" }}>
                ewf wef wefewf we wefw eww fwfwe ffwe wfw ef wefw e fwe fwef wfw
              </p>
            </Link>
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
            <Link to="/question/123">
              <p style={{ color: "#0080ff", fontSize: "17px" }}>
                ewf wef wefewf we wefw eww fwfwe ffwe wfw ef wefw e fwe fwef wfw
              </p>
            </Link>
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
            <Link to="/question/123">
              {" "}
              <p style={{ color: "#0080ff", fontSize: "17px" }}>
                ewf wef wefewf we wefw eww fwfwe ffwe wfw ef wefw e fwe fwef wfw
              </p>{" "}
            </Link>
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
            <Link to="/question/123">
              <p style={{ color: "#0080ff", fontSize: "17px" }}>
                ewf wef wefewf we wefw eww fwfwe ffwe wfw ef wefw e fwe fwef wfw
              </p>{" "}
            </Link>
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
            <Link to="/question/123">
              <p style={{ color: "#0080ff", fontSize: "17px" }}>
                ewf wef wefewf we wefw eww fwfwe ffwe wfw ef wefw e fwe fwef wfw
              </p>{" "}
            </Link>
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
            <Link to="/question/123">
              <p style={{ color: "#0080ff", fontSize: "17px" }}>
                ewf wef wefewf we wefw eww fwfwe ffwe wfw ef wefw e fwe fwef wfw
              </p>{" "}
            </Link>
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
            <Link to="/question/123">
              <p style={{ color: "#0080ff", fontSize: "17px" }}>
                ewf wef wefewf we wefw eww fwfwe ffwe wfw ef wefw e fwe fwef wfw
              </p>{" "}
            </Link>
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
            <Link to="/question/123">
              <p style={{ color: "#0080ff", fontSize: "17px" }}>
                ewf wef wefewf we wefw eww fwfwe ffwe wfw ef wefw e fwe fwef wfw
              </p>{" "}
            </Link>
            <p
              style={{
                color: "gray",
              }}
            >
              31 minutes ago
            </p>
          </div>
        </div>
        <div
          style={{
            marginLeft: "1rem",
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
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    </>
  );
}
