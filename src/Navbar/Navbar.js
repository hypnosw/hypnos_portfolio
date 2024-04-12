import "./Navbar.css";
import {Link} from "react-router-dom";
import {FaGithub, FaLinkedin} from "react-icons/fa";



export const Navbar = ()=>{

    return(
        <nav className={"hw-navbar-wrapper"}>
            {/*Desktop Version */}
            <div className={"d-none d-sm-none d-md-flex hw-navbar "
                            + "justify-content-between row align-items-center"}>
                <div className={"col-2"}>
                    <Link className={"ms-2 hw-nav-link"} to={""}>
                        Home
                    </Link>
                </div>
                <ol className={"col-auto my-1 d-flex justify-content-around "
                               + "list-unstyled"}>
                    <li className={"mx-3"}>
                        <Link to={"/about"} className={"hw-nav-link"}>
                            About
                        </Link>
                    </li>
                    <li className={"mx-3"}>
                        <Link to={"/projects"} className={"hw-nav-link"}>
                            Projects
                        </Link>
                    </li>
                    <li className={"mx-3"}>
                        <Link to={"/gallery"} className={"hw-nav-link"}>
                            Gallery
                        </Link>
                    </li>
                    <li className={"mx-3"}>
                        <Link to={"/contact"} className={"hw-nav-link"}>
                            Contact Me
                        </Link>
                    </li>
                </ol>
                <div className={"col-2 my-1 d-flex justify-content-end"}>
                    <div className={"d-flex justify-content-between"}>
                        <a className={"me-3"} href={"https://github.com/hypnosw"} target={"_blank"}>
                            <FaGithub />
                        </a>
                        <a className={"me-3"} href={"https://www.linkedin.com/in/hypnosw/"} target={"_blank"}>
                            <FaLinkedin />
                        </a>
                    </div>

                </div>
            </div>

            {/* Mobile App Version */}
            <div className={"d-sm-flex d-md-none"}>
                <p>Mobile</p>
            </div>
        </nav>

    )
}