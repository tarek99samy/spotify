import React, { Component } from "react";
import authContext from "../../context/auth";
import { Link } from "react-router-dom";
// -------------------------------------
import logo from "../../assets/logo.png";
import navbarPhoto from "../../assets/navbarPhoto.png";
import "./navbar.css";

export default class Navbar extends Component {
  static contextType = authContext;
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
      isDropdownOpen: false,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleProfileDropdown = this.toggleProfileDropdown.bind(this);
  }

  toggleSidebar() {
    this.setState((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    }));
  }

  toggleProfileDropdown() {
    this.setState((state) => ({
      isDropdownOpen: !state.isDropdownOpen,
    }));
  }

  render() {
    return (
      <header className="header">
        <div className="subheader">
          <div className="logo-div">
            <Link to="/">
              <img src={logo} className="logo" alt="Spotify" />
            </Link>
          </div>

          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Premium
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Download
                </Link>
              </li>
              <li role="separator" className="verticalSeparator"></li>
              <li>
                <button
                  className="nav-button"
                  onClick={this.toggleProfileDropdown}>
                  <img src={navbarPhoto} alt="user" className="nav-photo" />
                  <span>profile</span>
                </button>
                {this.state.isDropdownOpen ? (
                  <div id="profile-dropdown-menu" className="profile-menu">
                    <ul className="menu">
                      <li className="nav-item">
                        <Link to="/" className="profile-item">
                          Account
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" className="profile-item">
                          Log out
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </li>
            </ul>
          </nav>

          <div id="responsive-replacement">
            <Link to="/" className="nav-link">
              <img src={navbarPhoto} alt="user" className="nav-photo" />
            </Link>

            <button className="nav-button" onClick={this.toggleSidebar}>
              <span className="open-sidebar-button">&#9776;</span>
            </button>
          </div>
        </div>

        {this.state.isSidebarOpen ? (
          <div className="responsive-overlay"></div>
        ) : null}

        <div
          id="side-nav"
          className={
            this.state.isSidebarOpen ? "sidebar-opened" : "sidebar-closed"
          }>
          <div className="close-sidebar-button">
            <span onClick={this.toggleSidebar}>&times;</span>
          </div>
          <ul>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Premium
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Download
              </Link>
            </li>
            <li role="separator" className="horizontal-separator"></li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Account
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
