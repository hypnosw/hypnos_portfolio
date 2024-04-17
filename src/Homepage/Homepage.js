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
              <p className={"hw-cover-fname roboto-black-italic"}>Hypnos</p>
              <p className={"hw-cover-lname roboto-black-italic"}>Wu</p>
            </div>
          </div>
          <h1>Contents</h1>
        </div>
    )
}