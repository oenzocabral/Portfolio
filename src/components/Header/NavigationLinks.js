import SkillsDropdown from "./SkillsDropdown";
import ContactDropdown from "./ContactDropdown";
import { Link } from 'react-router-dom';

function NavigationLinks() {
  return (
    <ul className="nav nav-pills d-flex justify-content-center">
      <li className="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownSkills" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Skills
          </a>
        <SkillsDropdown />
      </li>
      <li className="nav-item"><Link to={"/projects"} className="nav-link">Projects</Link></li>
      <li className="nav-item"><Link to={"/"} className="nav-link">Home</Link></li>
      <li className="nav-item"><Link to={"/about"} className="nav-link">About Me</Link></li>
      <li className="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownContact" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact
        </a>
        <ContactDropdown />
      </li>
    </ul>
  );
}

export default NavigationLinks;
