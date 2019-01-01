import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Toolbar } from "@material-ui/core";

import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <Toolbar style={{backgroundColor: 'coral'}}>
        <div className="search">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <InputBase placeholder="Search…" className="inputRoot" />
        </div>
        <div style={{display: 'flex', width: '100%'}}>
            <div className="menuLink">Languages</div>
            <div className="menuLink">Toolkits</div>
            <div className="menuLink">Platforms</div>
            <div className="menuLink">Apis</div>
            <div className="menuLink">Project Types</div>
        </div>
        
      </Toolbar>
    );
  }
}

export default Menu;
