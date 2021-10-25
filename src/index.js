import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import { AuthContextProvider } from "./authContext/AuthContext";
import {Provider} from "react-redux";
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
   
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <App />
//     </AuthContextProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
