import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Form.css";


const SignupForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
    
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
      }
    return (
        <div className="signup">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email"> 
              <Form.Control style={{ border:"0px 5px" }} className ="input"
                autoFocus 
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password"> 
              <Form.Control className="input"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="confirmPassword">
              <Form.Control className="input"
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button className= "signupBtn" block size="lg" type="submit" >
              Register
            </Button>
          </Form>
        </div>
  
      );
};

export default SignupForm ;