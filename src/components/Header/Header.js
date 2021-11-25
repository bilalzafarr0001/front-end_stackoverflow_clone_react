import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Modal,
  Button,
  Form,
  Navbar,
  Nav,
  FormControl,
  Container,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "../client";

export default function Header() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [isUserLogin, setIsUserLogin] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  console.log(localStorage.getItem("username"));

  const onLoginFormSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      const values = {
        username: username,
        password: password,
      };
      console.log("Values are", values);
      try {
        const { token, userInfo, expiresAt } = await client("/authenticate", {
          values,
        });
        console.log("Token", token);
        console.log("userInfo", userInfo);
        console.log("expiresAt", expiresAt);

        localStorage.setItem("token", token);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        localStorage.setItem("username", username);

        localStorage.setItem("expiresAt", expiresAt);
        handleClose();
      } catch (err) {
        toast.error(err.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.warn("Please Fill Out all Fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const onLoginFormSubmit1 = async (e) => {
    e.preventDefault();
    if (username && password && role) {
      const values = {
        username: username,
        password: password,
        role: role,
      };
      console.log("Values are", values);
      try {
        const { token, userInfo, expiresAt } = await client("/signup", {
          values,
        });
        console.log("Token", token);
        console.log("userInfo", userInfo);
        console.log("expiresAt", expiresAt);

        localStorage.setItem("token", token);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        localStorage.setItem("username", username);
        localStorage.setItem("expiresAt", expiresAt);

        toast.success("Registered Successfully !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        handleClose1();
      } catch (err) {
        toast.warn(err.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.warn("Please fill out all fields !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("expiresAt");
    localStorage.removeItem("username");
    window.location.reload();
  };
  return (
    <div class="container-fluid">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
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
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Users</Nav.Link>
              <Nav.Link href="#action2">Tags</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-warning">Search</Button>
              {localStorage.getItem("token") ? (
                <>
                  <Link
                    to={`/profile/${localStorage.getItem("username")}`}
                    className="nav-link"
                  >
                    <p
                      style={{
                        marginLeft: "4px",
                        marginTop: "7px",
                        color: "#0080ff",
                      }}
                    >
                      {localStorage.getItem("username")}
                    </p>
                  </Link>
                  <Button
                    variant="primary"
                    onClick={logout}
                    style={{ marginLeft: "10px" }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="primary"
                    onClick={handleShow}
                    style={{ marginLeft: "10px" }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleShow1}
                    style={{ marginLeft: "10px" }}
                  >
                    Signup
                  </Button>
                </>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <div style={{ marginLeft: "170px" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
                class="rounded "
                alt="..."
                style={{ width: "120px", height: "100px" }}
              />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onLoginFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <div style={{ marginLeft: "170px" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
                class="rounded "
                alt="..."
                style={{ width: "120px", height: "100px" }}
              />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onLoginFormSubmit1}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>

            <br></br>
            <Button variant="primary" type="submit">
              Signup
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
