import React, { Component, useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import Logo from "../../resources/Group 1327.png";
import UserIcon from "../../resources/Group 1349.png";
import BasketIcon from "../../resources/Group 1442.png";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div
          className={this.state.clicked ? "burger-menu" : "burger-menu hidden"}
        >
          <div className="close-menu" onClick={this.handleClick}>
            X
          </div>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <div className="LeftItemsNav">
          <img
            className="navbar-logo"
            src={Logo}
            alt="Gelato and donuts logo"
          />

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="RightItemsNav">
          <ul className="users-actions">
            <li>
              <a className="user-action">
                <img src={UserIcon} alt="user icon" />
                Account
              </a>
            </li>
            <li>
              <a className="user-action">
                <img src={BasketIcon} alt="basket icon" />
                Basket
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
