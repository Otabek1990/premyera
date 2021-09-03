import axios from "axios";
import { useState,useRef } from "react";
import { useHistory,Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
      history.push("/payment");

    // try {
    //   await axios.post("auth/register", { email,username, password });
    //   history.push("/payment");
    // } catch (err) {
    //   console.log(err)
    // }
  };
  return (
    <div>
      <Navbar/>
    <div className="register">
          <div className="container">
        <form>
          <h1>Ro'yhatdan o'tish</h1>
          <label>E-mail yoki telefon raqami:</label>
          <input
            type={"email" || "text"}
            placeholder="Email yoki tel raqami "
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Parol:</label>
          <input
            type="password"
            placeholder="parol"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <label>Parolni takrorlang:</label>
          <input
            type="password"
            placeholder="Parolni takrorlang"
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          <label>Ism:</label>
          <input
            type="text"
            placeholder="Ism"
            onChange={(e) => setUsername(e.target.value)}
          />
         
          <label>Telefon:</label>
          <input
            type="text"
            placeholder="Tel raqami"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="verify_terms">
            <input type="checkbox" />
            <p>
              <Link to="/termsOfUse">
              Xizmat ko'rsatish tartib va shartlariga 
              </Link>
               <span>roziman</span>
              </p>

          </div>
          
          <button 
         onClick={handleSignUp}
          className="loginButton">
            Ro'yxatdan o'tish
          </button>
    
        </form>
      </div>
        
        {/* {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )} */}
      </div>
    </div>
  );
}
