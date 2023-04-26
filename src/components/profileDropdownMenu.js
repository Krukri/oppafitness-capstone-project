import Dropdown from "react-bootstrap/Dropdown";
import "../css/profileDropdown.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const ProfileDropdownMenu = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          className="dropdown_menu"
          id="dropdown-basic"
          style={{
            backgroundColor: "transparent",
            borderColor: "transparent",
            display: "flex",
            justifyContent: "space-evenly",
            width: "5em",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.75rem"
            height="1.75rem"
            fill="#ffb703"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/ProfilePage" className="profile_item">
              Profile
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/ProfilePage" className="profile_item">
              Chat with Coach
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/LocationPage" className="profile_item">
              Location
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/ProfilePage" className="profile_item">
              Settings
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/ProfilePage" className="profile_item">
              Logout
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ProfileDropdownMenu;
