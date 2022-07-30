import React from "react";
import "../ComponentView/Main.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  NavLink,
} from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <ul>
            <li>
              <NavLink className="header-router" to="/">
                Điểm chuẩn...
              </NavLink>
            </li>
            <li>
              <NavLink className="header-router" to="/FormSearch">
                Tra cứu...
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
