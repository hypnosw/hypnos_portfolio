import photoshoot_bg_blur from "../Pictures/photoshoot_bg_blur.JPG";
import "./Homepage.css"
import "../style.css";

export const Homepage = ()=>{
    return(
        <div className={""}>
          <div className={"hw-img-container"}>
            <img className={"hw-cover-img"} alt="homePageCoverImage"
                 src={photoshoot_bg_blur}/>
            <div className={"hw-cover-names-container"}>
              <p className={"hw-cover-helloworld roboto-bold-italic"}>Hello World!</p>
              <p className={"hw-cover-name roboto-bold-italic"}>
                I'm <span>Hypnos</span>
              </p>
              <p className={"hw-cover-intro roboto-bold-italic"}>
                A
                <span> Fullstack Developer</span>
              </p>
              <a className={"roboto-bold"} href={"../Hypnos_Wu.pdf"} download={"Hypnos_Wu_Resume.pdf"}>
                Click to Download My Resume
              </a>
            </div>
          </div>
        </div>
    )
}
