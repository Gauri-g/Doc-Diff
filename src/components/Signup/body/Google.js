import GoogleLogin from "react-google-login";
import React, { useState } from "react";

const Google = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async (googleData) => { 
      setEmail(googleData.profileObj.email);
      setPassword(googleData.googleId);
      setConfirmPassword(googleData.googleId);
    console.log(googleData.googleId);
    console.log(googleData.profileObj.email);
     const body = JSON.stringify({
        email,
        password,
        confirmPassword
      })
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      }
  
      const response = await fetch("http://localhost:5000/users/signup", requestOptions).then((response) => {
        const data = response.json();
        return data;
      })
        .then((data) => { console.log(data) })
        .catch((error) => {
          console.log(error.message);
        });
    if(response.status === 200)
    {
      // redirect here
      console.log("login succesful"); 
    }
    else
    {
      //  error
      console.log("login unsuccesful");
    }
  };
  return (
    <GoogleLogin
      clientId="411323907320-ha03ooc391sr04og9c52cc3glc3ofsnk.apps.googleusercontent.com"
      buttonText="Sign up with Google"
      onSuccess={handleLogin}
      className="google"
      onFailure={handleLogin}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default Google;
