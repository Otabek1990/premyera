import "./app.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import UzbekFilms from "./pages/uzbekFilms/UzbekFilms";
import UzbekSerials from "./pages/uzbekSerials/UzbekSerials";
import KidFilms from "./pages/kidFilms/KidFilms";
import ChetelFilms from "./pages/chetelFilms/ChetelFilms";
import Konserts from "./pages/konserts/Konserts";
import Register from "./pages/register/Register";
import Terms from "./pages/terms/Terms";
import Payment from "./pages/payment/Payment";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App(){
  const { user } = useContext(AuthContext);

  return (
    <div>
    <HashRouter >
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
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/termsOfUse">
              <Terms />
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
            <Route exact path="/watch">
              <Watch />
            </Route>
            <Route exact path="/:type/:title">
              <MovieDetails/>
            </Route>
            <Route exact path="/uzbekFilms/:title">
              <UzbekFilms/>
            </Route>
            <Route exact path="/uzbekSerials/:title">
              <UzbekSerials/>
            </Route>
            <Route exact path="/kidFilms/:title">
              <KidFilms/>
            </Route>
            <Route exact path="/chetelFilms/:title">
              <ChetelFilms/>
            </Route>
            <Route exact path="/konserts/:title">
              <Konserts/>
            </Route>
           
           
      
      </Switch>
    </HashRouter>
    </div>
  );
};

export default App;

    // {/* // <Router>
    // //   <Switch>
    // //     <Route exact path="/">
    // //       {user ? <Home /> : <Redirect to="/register" />}
    // //     </Route>
    // //     {/* <Route path="/register">
    // //       {!user ? <Register /> : <Redirect to="/" />}
    // //     </Route> */}
    // //     {/* <Route path="/login">
    // //       {!user ? <Login /> : <Redirect to="/" />}
    // //       </Route> */}
    //      {user && (
    // //       <> */}
    // //         <Route path="/movies">
    // //           <Home type="movie" />
    // //         </Route>
    // //         <Route path="/series">
    // //           <Home type="series" />
    // //         </Route>
    // //         <Route path="/details">
    // //           <MovieDetails />
    // //         </Route>
    // //         <Route path="/login">
    // //           <Login />
    // //         </Route>
    // //         <Route path="/register">
    // //           <Register />
    // //         </Route>
    // //         <Route path="/termsOfUse">
    // //           <Terms />
    // //         </Route>
    // //         <Route path="/Payment">
    // //           <Payment />
    // //         </Route>
    // //         <Route path="/watch">
    // //           <Watch />
    // //         </Route>
    // //       </>
    // //     )}
    // //   </Switch>
    // // </Router>