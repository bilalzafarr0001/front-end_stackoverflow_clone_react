import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isLoginUser, setIsLoginUser] = useState(false);

  return (
    <div class="container-fluid">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          borderTop: "4px solid #FF8C00",
          borderBottom: "2px solid #C0C0C0",
          height: "70px",
        }}
      >
        <div class="container-fluid">
          <div
            class="d-flex justify-content-between collapse navbar-collapse "
            id="navbarText"
            style={{ marginLeft: "80px" }}
          >
            <Link to="/">
              <img
                style={{
                  cursor: "pointer",
                  width: "230px",
                  height: "59px",
                }}
                src="https://wizardsourcer.com/wp-content/uploads/2019/03/Stackoverflow.png"
              />
            </Link>
            {isLoginUser ? (
              <div class="d-flex" style={{ marginRight: "30px" }}>
                <button
                  type="button"
                  class="btn btn-info"
                  style={{
                    marginRight: "5px",
                    backgroundColor: "#b3d9ff",
                    color: "#0080ff",
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Login
                </button>

                <button
                  type="button"
                  class="btn btn-info"
                  style={{
                    backgroundColor: "#0080ff",
                    color: "#fff",
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  Signup
                </button>
              </div>
            ) : (
              <div class="d-flex" style={{ marginRight: "30px" }}>
                <Link to="/profile">
                  <p
                    style={{
                      color: "#0080ff",
                      fontStyle: "italic",
                    }}
                  >
                    Welcome Beelal
                  </p>
                </Link>
                <Link to="/">
                  {" "}
                  <p
                    style={{
                      marginLeft: "7px",
                      color: "#0080ff",
                      cursor: "pointer",
                    }}
                    onClick={() => setIsLoginUser(true)}
                  >
                    Logout
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <div style={{ marginLeft: "170px" }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
                    class="rounded "
                    alt="..."
                    style={{ width: "120px", height: "100px" }}
                  />
                </div>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="ui form" style={{ width: "250px", margin: "auto" }}>
                <div class="field">
                  <label>Username</label>
                  <input type="text" name="first-name" placeholder="Username" />
                </div>
                <div class="field">
                  <label>Password</label>
                  <input
                    type="password"
                    name="last-name"
                    placeholder="Password"
                  />
                </div>

                <button class="fluid ui primary button" type="submit">
                  Login
                </button>
              </form>
            </div>

            <p class="text-center" style={{ margin: "20px" }}>
              Dont have any account ? <a href="/register">Register</a>
            </p>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <div style={{ marginLeft: "170px" }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
                    class="rounded "
                    alt="..."
                    style={{ width: "120px", height: "100px" }}
                  />
                </div>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="ui form" style={{ width: "250px", margin: "auto" }}>
                <div class="field">
                  <label>Username</label>
                  <input type="text" name="first-name" placeholder="Username" />
                </div>
                <div class="field">
                  <label>Password</label>
                  <input
                    type="password"
                    name="last-name"
                    placeholder="Password"
                  />
                </div>
                <div class="field">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="last-name"
                    placeholder="Confirm Password"
                  />
                </div>
                <button class="fluid ui primary button" type="submit">
                  Login
                </button>
              </form>
            </div>
            <p class="text-center" style={{ margin: "20px" }}>
              Already have any account ? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
