import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../assets/DGL_WHITE.png";

// import { useSelector, useDispatch } from 'react-redux';

const MainNavigation = () => {
  // const dispatch = useDispatch();

  // const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  // const signInHandler = () => {
  //     dispatch(loginActions.login());
  // };

  // const signUpHandler = () => {};

  return (
    <>
      <header className={classes.header}>
        <img src={logo} alt="logo" />
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }>
                Contact Me
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* <div className={classes.dots} /> */}
    </>
  );
};

export default MainNavigation;
