import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import gymLogo from "../images/OppaFitnessGym.png";
import ProfileDropdownMenu from "./profileDropdownMenu";
const NavigationBar = () => {
  return (
    <div>
      <Nav className="navBar_Section">
        <div className="navBar_Logo">
          <Link to="/HomePage" className="navLink_Item">
            <img src={gymLogo} alt="oppa fitness gym logo" />
          </Link>
        </div>
        <div className="dropdown_menu">
          <ProfileDropdownMenu></ProfileDropdownMenu>
        </div>
      </Nav>
    </div>
  );
};

export default NavigationBar;
