import "./Navbar.css";
import {Link} from "react-router-dom";
import {FaGithub, FaLinkedin} from "react-icons/fa";



export const Navbar = ()=>{

    return(
        <div>
            {/*Desktop Version */}
            <div className={"d-none d-sm-none d-md-flex hw-navbar "
                            + "justify-content-between row align-items-center"}>
                <div className={"col-lg-3 col-md-2"}>
                    <Link className={"ms-2 hw-nav-link"} to={""}>
                        Home
                    </Link>
                </div>
                <div className={"col-lg-6 col-md-8 mt-1 mb-1 d-flex justify-content-around"}>
                    <Link to={"/about"} className={"hw-nav-link"}>
                        About
                    </Link>
                    <Link to={"/projects"} className={"hw-nav-link"}>
                        Projects
                    </Link>
                    <Link to={"/gallery"} className={"hw-nav-link"}>
                        Gallery
                    </Link>
                    <Link to={"/contact"} className={"hw-nav-link"}>
                        Contact Me
                    </Link>
                </div>
                <div className={"col-2 col-md-2 col-lg-3 mt-1 mb-1 d-flex justify-content-end"}>
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
        </div>

    )
}