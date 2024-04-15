import photoshoot_bg_blur from "../Pictures/photoshoot_bg_blur.JPG";
import "./Homepage.css"

export const Homepage = ()=>{
    return(
        <div>
          <img className={"hw-cover-img img-fluid"} src={photoshoot_bg_blur}/>
        </div>
    )
}