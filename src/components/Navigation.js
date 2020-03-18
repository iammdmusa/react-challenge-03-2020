// export a navigation component (use react-router-dom)
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <ul>
          <li>
            <NavLink activeClassName="active" to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/modeler" exact>
              Modeler
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/frameworks" exact>
              Framework
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
