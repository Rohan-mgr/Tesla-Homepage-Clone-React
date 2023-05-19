import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationLinks.css";
import * as actions from "../../../store/actions/menu";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function NavigationLinks(props) {
  let navigate = useNavigate();
  function handleLogoClick() {
    props.onMenuClose();
    navigate("/");
  }

  function handleMenuClick() {
    props.onMenuClick();
  }

  return (
    <div className="Navigation__links">
      <img
        onClick={handleLogoClick}
        src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a.png"
        alt="telsa logo"
      />
      <ul>
        <li>
          <NavLink to="/models">Model S</NavLink>
        </li>
        <li>
          <NavLink to="/model3">Model 3</NavLink>
        </li>
        <li>
          <NavLink to="/modelx">Model X</NavLink>
        </li>
        <li>
          <NavLink to="/modely">Model Y</NavLink>
        </li>
        <li>
          <NavLink to="/solarroof">Solar Roof</NavLink>
        </li>
        <li>
          <NavLink to="/solarpanels">Solar Panels</NavLink>
        </li>
        <li>
          <a href="https://shop.tesla.com/">Shop</a>
        </li>
        <li>
          <a href="https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US">
            Account
          </a>
        </li>
        <li>
          <button onClick={handleMenuClick}>Menu</button>
        </li>
        <div className="slide"></div>
      </ul>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClick: () => dispatch(actions.clickMenu()),
    onMenuClose: () => dispatch(actions.closeMenu()),
  };
};

export default connect(null, mapDispatchToProps)(NavigationLinks);
