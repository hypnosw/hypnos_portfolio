import "./Navbar.css";
import {Link} from "react-router-dom";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {CiMenuBurger} from "react-icons/ci";

export const Navbar = ()=>{

  return(
      <nav className={"hw-navbar-wrapper"}>
        {/*Desktop Version */}
        <div className={" d-none d-sm-none d-md-flex  hw-navbar "
                        + "justify-content-between  align-items-center"}>
          <div className={""}>
            <Link className={"ms-2 hw-nav-link roboto-bold"} to={""}>
              Home
            </Link>
          </div>
          <ol className={" my-1 d-flex justify-content-around "
                         + "list-unstyled"}>
            <li className={"mx-3"}>
              <Link to={"/about"} className={"hw-nav-link roboto-bold"}>
                About
              </Link>
            </li>
            <li className={"mx-3"}>
              <Link to={"/projects"} className={"hw-nav-link roboto-bold"}>
                Projects
              </Link>
            </li>
            <li className={"mx-3"}>
              <Link to={"/gallery"} className={"hw-nav-link roboto-bold"}>
                Gallery
              </Link>
            </li>
            <li className={"mx-3"}>
              <Link to={"/contact"} className={"hw-nav-link roboto-bold"}>
                Contact Me
              </Link>
            </li>
          </ol>
          <div className={" my-1 d-flex justify-content-end"}>
            <div className={"d-flex justify-content-between"}>
              <a className={"me-3 hw-navicon"} href={process.env.REACT_APP_GITHUB_URL} target={"_blank"}>
                <FaGithub />
              </a>
              <a className={"me-3 hw-navicon"} href={process.env.REACT_APP_LINKEDIN_URL} target={"_blank"}>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile App Version */}
        <div className={"d-flex d-sm-flex d-md-none hw-navbar align-items-center "
                        + "justify-content-between"}>

          <Link className={"ms-2 hw-nav-link roboto-bold"} to={""}>
            Home
          </Link>
          <div className={"d-flex justify-content-between align-items-center"}>
            <div className={"dropdown"}>
              <button  className="btn me-3 hw-navicon " type="button"
                       id="navDropdownBtn" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                <CiMenuBurger />
              </button>
              <div className={"dropdown-menu hw-navbar-dropdown-menu" } aria-labelledby={"dropdownMenuButton"}
              >
                <Link to={"/about"} className={"hw-nav-link roboto-bold dropdown-item"}>
                  About
                </Link>
                <Link to={"/projects"} className={"hw-nav-link roboto-bold dropdown-item"}>
                  Projects
                </Link>
                <Link to={"/gallery"} className={"hw-nav-link roboto-bold dropdown-item"}>
                  Gallery
                </Link>
                <Link to={"/contact"} className={"hw-nav-link roboto-bold dropdown-item"}>
                  Contact Me
                </Link>
              </div>
            </div>
            <div className={"d-flex justify-content-between"}>
              <a className={"me-3 hw-navicon"} href={process.env.REACT_APP_GITHUB_URL} target={"_blank"}>
                <FaGithub />
              </a>
              <a className={"me-3 hw-navicon"} href={process.env.REACT_APP_LINKEDIN_URL} target={"_blank"}>
                <FaLinkedin />
              </a>
            </div>

          </div>


        </div>
      </nav>
  )
}