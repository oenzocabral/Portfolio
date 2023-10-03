import ContactDropdown from "./ContactDropdown";
import { Link } from 'react-router-dom';

function NavigationLinks() {
  return (
    <ul className="nav nav-pills d-flex justify-content-center">
      <li className="nav-item"><Link to={"/projects"} className="nav-link">Projects</Link></li>
      <li className="nav-item"><Link to={"/Portfolio"} className="nav-link">Home</Link></li>
      <li className="nav-item"><Link to={"/about"} className="nav-link">About Me</Link></li>
      <li className="nav-item dropdown">
        <p class="nav-link dropdown-toggle" id="navbarDropdownContact" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact
        </p>
        <ContactDropdown />
      </li>
    </ul>
  );
}

export default NavigationLinks;
