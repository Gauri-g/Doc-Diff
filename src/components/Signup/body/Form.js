
const Form = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit(event) {
      event.preventDefault();
      const requestOptions = {
        method: 'POST', 
        body:  
          email,
          password,
          confirmPassword
        }
        fetch(" ",requestOptions ).then((response) =>{
            const data = response.json();
            return data;
          })
          .then((data)=>{console.log(data)}) 
        .catch((error) => {
          console.log(error.message);
        });
    }
    return (

        <div className="Login">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email"> 
              <Form.Control style={{ border:"0px 5px" }} className ="input"
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label  style={{ padding:"0px 0px 20px 0px" }}>Password:</Form.Label>
              <Form.Control className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="confirmPassword">
              <Form.Label  style={{ padding:"0px 0px 20px 0px" }}>Confirm Password:</Form.Label>
              <Form.Control className="input"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button className= "loginbutton" block size="lg" type="submit" >
              Login
            </Button>
          </Form>
        </div>
  
      );
};

export default Form ;