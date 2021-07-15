import { Route, Switch, Redirect} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() { 
  
  return ( 
     <Router>
        <Switch>
          <Route exact path="/"  >
            <Home />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/signup"  >
            <Signup />
          </Route>  
          <Route path="" render={props => {
            return <Redirect to="/" />
          }}
        />
        </Switch>
      </Router>
  );
}

export default App;
