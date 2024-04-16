import photoshoot_bg_blur from "../Pictures/photoshoot_bg_blur.JPG";
import "./Homepage.css"

export const Homepage = ()=>{
    return(
        <div className={""}>
          <div className={"hw-img-container"}>
            <img className={"hw-cover-img"} alt="homePageCoverImage" src={photoshoot_bg_blur}/>
          </div>
          <h1>Contents</h1>
        </div>
    )
}