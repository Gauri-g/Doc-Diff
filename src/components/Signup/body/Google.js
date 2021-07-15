import GoogleLogin from "react-google-login";

const Google = () => {
  const handleLogin = async (googleData) => {

    const body = JSON.stringify({ tokenId: googleData.tokenId })

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    }

    await fetch("http://localhost:5000/users/google/signup", requestOptions).then((response) => {
      const data = response.json();
      return data;
    }).then((data) => {

      if (data.status === 200) {
        // Redirect here
        console.log("Login Successful");
        window.location.href = "http://localhost:3000/"
      } else {
        // Error handling
        console.log("Login Unsuccessful");
      }
    })
      .catch((error) => { console.log(error.message); });
  };

  return (
    <GoogleLogin
      clientId="386647217720-lmsafghdplskeosdav51kdh0tu6c2sdq.apps.googleusercontent.com"
      buttonText="Sign up with Google"
      onSuccess={handleLogin}
      className="google"
      onFailure={(error) => { console.log(error) }}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default Google;
