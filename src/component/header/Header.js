import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import "./Header.css";
import HeaderNav from "./HeaderNav";
import Menu from '../menu/Menu'

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: "red",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <div className="header_logo">
              <NavLink to="/">
                <div className=" header_logo_top">Dev</div>
                <div className="header_logo_bottom"> Art</div>
              </NavLink>
              <div className="logo_desc">Art made with code</div>
            </div>
            <HeaderNav
              firstLink="signin"
              first="Sign In"
              secondLink="gallery"
              second="Gallery"
            />
            <HeaderNav
              firstLink="language"
              first="Language"
              secondLink="about"
              second="About"
            />
            <HeaderNav
              firstLink="rules"
              first="Competition Rules"
              secondLink="creators"
              second="Young Creators"
            />
          </Toolbar>
          <Menu />
        </AppBar>
      </div>
    );
  }
}

export default Header;
