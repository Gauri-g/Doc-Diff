import './loginBody.css'
import img4 from "../../../images/loginimg.svg";


const loginBody = () => {
    return(
        <div className="row section1">
            <div className="col-lg-5">
                 <form></form>
            <div className="vert"></div>
            </div>
            <div className="col-lg-7">
            <img src={img4} className=" " alt="timemator"/>
            </div>
        </div>
    )
}

export default loginBody;