import React from 'react'
import { NavLink } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo">
              {<NavLink to="/" exact>
                <div className="container">
                  Práctica.5
                </div>
              </NavLink>}
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>{<NavLink to="/" exact>Home</NavLink>}</li>
              <li>{<NavLink to="/bepl" exact>Bepl</NavLink>}</li>
              <li>{<NavLink to="/seguridad" exact>Seguridad</NavLink>}</li>
              <li>{<NavLink to="/empleado" exact>Empleado</NavLink>}</li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
