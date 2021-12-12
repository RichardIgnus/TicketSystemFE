import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function SideMenu() {
  return (
    <div className='position-fixed flex-column flex-shrink-0 p-3 bg-dark vh-100'
      style={{ width: "220px" }}
    >
      <Container className="position-start">
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link link-light">Placeholder</a>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link link-light">Placeholder</a>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link link-light">Placeholder</a>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link link-light">Placeholder</a>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link link-light">Placeholder</a>
          </li>
        </ul>
        <hr className='bg-light' />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link link-light">Placeholder</a>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link link-light">Placeholder</a>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/notifications" className="nav-link link-light">Notifications</a>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link link-light">Placeholder</a>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link link-light">Placeholder</a>
          </li>
        </ul>
        <hr className='bg-light' />
      </Container>
      <div className="dropdown position ">
        <a
          href="#"
          className="d-flex align-items-center link-secondary text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>User</strong>
        </a>
        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser2"
        >
          <li>
            <a className="dropdown-item" >
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" >
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
