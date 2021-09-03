import "./app.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import Register from "./pages/register/Register";
import Terms from "./pages/terms/Terms";
import Payment from "./pages/payment/Payment";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App(){
  const { user } = useContext(AuthContext);
  console.log(user)

  return (
    <Router>
      <Switch>
            <Route exact path="/">
              <Home  />
            </Route>
            <Route exact path="/movies">
              <Home type="movie" />
            </Route>
            <Route exact path="/series">
              <Home type="series" />
            </Route>
            <Route exact path="/details">
              <MovieDetails />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/termsOfUse">
              <Terms />
            </Route>
            <Route exact path="/Payment">
              <Payment />
            </Route>
            <Route exact path="/watch">
              <Watch />
            </Route>
      
      </Switch>
    </Router>
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       {user ? <Home /> : <Redirect to="/register" />}
    //     </Route>
    //     {/* <Route path="/register">
    //       {!user ? <Register /> : <Redirect to="/" />}
    //     </Route> */}
    //     {/* <Route path="/login">
    //       {!user ? <Login /> : <Redirect to="/" />}
    //       </Route> */}
    //     {user && (
    //       <>
    //         <Route path="/movies">
    //           <Home type="movie" />
    //         </Route>
    //         <Route path="/series">
    //           <Home type="series" />
    //         </Route>
    //         <Route path="/details">
    //           <MovieDetails />
    //         </Route>
    //         <Route path="/login">
    //           <Login />
    //         </Route>
    //         <Route path="/register">
    //           <Register />
    //         </Route>
    //         <Route path="/termsOfUse">
    //           <Terms />
    //         </Route>
    //         <Route path="/Payment">
    //           <Payment />
    //         </Route>
    //         <Route path="/watch">
    //           <Watch />
    //         </Route>
    //       </>
    //     )}
    //   </Switch>
    // </Router>
  );
};

export default App;
