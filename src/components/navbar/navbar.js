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
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    console.log(this);
    this.setState((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
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
                <button className="nav-button">
                  <img src={navbarPhoto} alt="user" className="nav-photo" />
                  <span>profile</span>
                </button>
              </li>
            </ul>
          </nav>

          <div id="responsive-replacement">
            <Link to="/" className="nav-link">
              <img src={navbarPhoto} alt="user" className="nav-photo" />
            </Link>
            <button className="nav-button" onClick={this.toggleSidebar}>
              <span className="responsive-button">&#9776;</span>
            </button>
          </div>
        </div>

        <div
          id="side-nav"
          className={
            this.state.isSidebarOpen
              ? "sidebar-opened-styles"
              : "sidebar-closed-styles"
          }
        >
          <span onClick={this.toggleSidebar}>&times;</span>
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
          </ul>
        </div>
      </header>
    );
  }
}
