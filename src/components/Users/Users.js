import React from "react";
import Sidebar from "../Sidebar/Sidebar";
export default function Users() {
  return (
    <>
      <div class="d-flex justify-content-start">
        <Sidebar name="user" />
        <div style={{ marginLeft: "100px", marginTop: "40px" }}>
          <h1>Users</h1>
          <div class="ui input focus" style={{ marginTop: "20px" }}>
            <input type="text" placeholder="Filter User name..." />
          </div>
        </div>
      </div>
    </>
  );
}
