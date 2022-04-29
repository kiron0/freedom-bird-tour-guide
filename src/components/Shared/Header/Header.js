import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase/Firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
import { RiMenu4Fill } from "react-icons/ri";
import {MdTravelExplore} from 'react-icons/md'

const Header = () => {
  const [user] = useAuthState(auth);
  const [navbar, setNavbar] = useState(false);

  const handleLogout = () => {
    signOut(auth);
  };

  const changeBackground = () =>{
    if(window.scrollY >= 100){
      setNavbar(true);
    }
      else{
        setNavbar(false);
      }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <Navbar
      // bg="light"
        sticky="top"
        expand="lg"
        collapseOnSelect
        variant="light"
        className={navbar ? 'navbar active' : 'navbar'}
      >
        <Container>
          <Navbar.Brand>
            <CustomLink to="/" className="fs-3 title">
             <MdTravelExplore className="logo"></MdTravelExplore> Freedom Bird Tour
            </CustomLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <RiMenu4Fill className="icon" />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ms-auto text-center nav-items">
              <CustomLink className="ms-2 fs-5 link" to="/home">
                Home
              </CustomLink>
              <CustomLink className="ms-2 fs-5 link" to="/blogs">
                Blogs
              </CustomLink>
              <CustomLink className="ms-2 fs-5 link" to="/about-me">
                About Me
              </CustomLink>
              {user?.email ? (
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              ) : (
                <CustomLink className="ms-2 fs-5 link" to="/login">
                  Login
                </CustomLink>
              )}
              {user?.photoURL ? (
                <CustomLink to="/">
                  <img src={user?.photoURL} alt="" className="profile-pic" />
                </CustomLink>
              ) : (
                <span></span>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
