import "./section3.css";
import img3 from "../../../images/img3.svg";
import wave from "../../../images/wave.svg";


const section3 = () => {
  return (
    <>
      <div className="section3 " id="aboutus">
        <h1 className="blue sec2head extra-bold">About Us</h1>
        <div className="row">
          <div className="col-lg-6 sec3txt">
            <p className="txt">Indian Society for Technical Education or ISTE is a national, professional, non-profit making Society registered under the Societies Registration Act of 1860. The major objective of ISTE is to assist and contribute to the production and development of top-quality professional engineers and technicians required by industries and other organizations.</p>
          </div>
          <div className="col-lg-6">
            <img src={img3} className="container img3" alt="timemator" />
          </div>
        </div>
      </div>
        <img src={wave} className="wave" alt="timemator" />
    </>
  );
};

export default section3;

