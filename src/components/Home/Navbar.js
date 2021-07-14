import logo from "../../images/Logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg "> 

 <a href="/" className="logo-margin">
   <img src={logo} className="logo-" alt="timemator"/>
 </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a className="nav-link dot px-5" href="/#">      ●      </a>
      <a class="nav-item nav-link" href="#">How it works</a>
      <a className="nav-link dot px-5" href="/#">      ●      </a>
      <a class="nav-item nav-link" href="#">About us</a>  
    </div>
  </div>
      <button className="nav-link btn button1 " href="#otherresources"> Sign Up 
      </button>
      <button className="nav-link btn button2" href="#otherresources"> 
      Login
      </button> 
</nav>
  );
};

export default Navbar;
