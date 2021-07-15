import './signupBody.css'
import img5 from "../../../images/signupimg.svg";
import Form from "./Form";


const signupbody = () => {
    return(
        <div className="row section1">
            <div className="col-lg-5">
                 <Form /> 
            <div className="vert"></div>
            </div>
            <div className="col-lg-7">
            <img src={img5} className=" " alt="timemator"/>
            </div>
        </div>
    )
}

export default signupbody;