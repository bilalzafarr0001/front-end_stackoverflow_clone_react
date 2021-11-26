import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { client } from "../client";
import { Link } from "react-router-dom";

export default function Tags() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    client(`/users`)
      .then((res) => {
        console.log(res.users);
        setUsers(res.users);
        console.log("List of all users  ", users);
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
            <h1>Users</h1>

            <div class="ui input focus" style={{ marginTop: "1rem" }}>
              <i class="search icon" style={{ marginTop: "0.7rem" }}></i>
              <input type="text" placeholder="Filter Tag name ..." />
            </div>
            <br></br>
            <br></br>
            <br></br>

            <div class="d-flex justify-content-between flex-wrap">
              {users?.map((user, i) => (
                <Link to={`/user/${user.username}`}>
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
                    {user.username}
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
