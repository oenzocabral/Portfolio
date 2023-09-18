function Header() {
    return (
        <div className="header">
            <div class="container">
                <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="" class="nav-link" aria-current="page">Home</a></li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownSkills" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Skills
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownSkills">
                        {/* Dropdown items for Skills */}
                        <li><a class="dropdown-item" href="#">Python</a></li>
                        <li><a class="dropdown-item" href="#">Javascript</a></li>
                        <li><a class="dropdown-item" href="#">Databases</a></li>
                        <li><a class="dropdown-item" href="#">APIs</a></li>
                        {/* Add more dropdown items as needed */}
                    </ul>
                    </li>
                    <li class="nav-item"><a href="#" class="nav-link">Projects</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">About Me</a></li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownContact" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Contact
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownCpmtact">
                        {/* Dropdown items for Skills */}
                        <li>
                        <a class="dropdown-item" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                            LinkedIn
                        </a>
                        </li>
                        <li>
                        <a class="dropdown-item" href="https://twitter.com/oenzocabral">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                            Twitter
                        </a>
                        </li>
                        {/* Add more dropdown items as needed */}
                    </ul>
                    </li>
                </ul>
                </header>
            </div>
        </div>
    )
}

export default Header;