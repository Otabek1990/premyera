import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user, dispatch } = useContext(AuthContext);
const history=useHistory()
  const handleLogin = (e) => {
    e.preventDefault();
    // login({ email, password }, dispatch);
  };

  return (
    <div>
   <Navbar/>
    <div className="login">
      <div className="container">
        <form>
          <h1>Saytga kirish</h1>
          <input
            type="email"
            placeholder="Email yoki tel raqam"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Parol"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" 
          onClick={handleLogin}>
            Saytga kirish
          </button>
          <p>
            Saytda yangimisiz? Unda hoziroq 
            <b><span onClick={()=>history.push("/register")}>ruyhatdan o'tishingiz</span> 
            </b> mumkin.
          </p>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Ko'proq bilish uchun.</b>.
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}
