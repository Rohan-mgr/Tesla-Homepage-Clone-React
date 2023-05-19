import React, { useState, useEffect } from "react";
import "./Menu.css";
import Backdrop from "./Backdrop/Backdrop";
import * as actions from "../../../store/actions/menu";
import { connect } from "react-redux";
import { MdClose } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import SubMenu from "./SubMenu";
import { NavLink } from "react-router-dom";

function Menu({ MenuStatus, onMenuClose }) {
  const [languageMenu, ToggleLanguageMenu] = useState(false);
  useEffect(() => {
    // console.log(document.querySelector(".menu"));
    // document.querySelector(".menu").scrollTo(0, 0);
    window.scroll(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function handleMenuClose() {
    onMenuClose();
  }
  return (
    <>
      <Backdrop show={MenuStatus} closeBackdrop={handleMenuClose} />
      <div
        className="menu"
        style={{
          transform: MenuStatus ? "translateX(0)" : "translateX(100vw)",
        }}
      >
        <div className="Menu__buttons">
          <p
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "0.8rem",
              fontWeight: "500",
              cursor: "pointer",
              opacity: languageMenu ? "1" : "0",
              pointerEvents: languageMenu ? "auto" : "none",
            }}
            onClick={() => ToggleLanguageMenu(false)}
          >
            <BsChevronLeft style={{ marginTop: "2px" }} />
            Back
          </p>
          <MdClose
            style={{
              fontSize: "1.5rem",
              padding: "8px",
              alignSelf: "baseline",
            }}
            onClick={handleMenuClose}
          />
        </div>
        <ul>
          {window.innerWidth <= 1200 && (
            <>
              <li>
                <NavLink to="/models" onClick={handleMenuClose}>
                  Model S
                </NavLink>
              </li>
              <li>
                <NavLink to="/model3" onClick={handleMenuClose}>
                  Model 3
                </NavLink>
              </li>
              <li>
                <NavLink to="/modelx" onClick={handleMenuClose}>
                  Model X
                </NavLink>
              </li>
              <li>
                <NavLink to="/modely" onClick={handleMenuClose}>
                  Model Y
                </NavLink>
              </li>
              <li>
                <NavLink to="/solarroof" onClick={handleMenuClose}>
                  Solar Roof
                </NavLink>
              </li>
              <li>
                <NavLink to="/solarpanels" onClick={handleMenuClose}>
                  Solar Panels
                </NavLink>
              </li>
            </>
          )}
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-In</a>
          </li>
          <li>
            <a href="#">Test Drive</a>
          </li>
          <li>
            <a href="#">Insurance</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Powerwall</a>
          </li>
          <li>
            <a href="#">commercial Energy</a>
          </li>
          <li>
            <a href="#">Utilities</a>
          </li>
          <li>
            <a href="#">Find Us</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>

          <div
            className="site__language"
            onClick={() => ToggleLanguageMenu(true)}
          >
            <p>
              <BsGlobe2 />
              <span style={{ marginLeft: "10px", padding: 0 }}>
                United States
              </span>
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "#393c41",
                margin: 0,
                marginLeft: "25px",
                padding: 0,
                width: "fit-content",
              }}
            >
              English
            </p>
          </div>
        </ul>
        {languageMenu && <SubMenu />}
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClose: () => dispatch(actions.closeMenu()),
  };
};

export default connect(null, mapDispatchToProps)(Menu);
