import React, { useState, useEffect } from "react";
import "../css/Login.css";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "../firebase";
import { useStateValue } from "../Stateprovider";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);

  const signin = (e) => {
    e.preventDefault();
    var newemail = email.replace(/\s+/g, "");

    if (newemail && password) {
      // db.collection('users').doc(username).get().then(doc=>{

      //     if(doc.exists&&(doc.data().email===email)){

      auth
        .signInWithEmailAndPassword(newemail, password)
        .then((userCredential) => {
          // console.log(userCredential.uid);
          // Signed in
          var useruser = userCredential.u;
          dispatch({
            type: "SET_USER",
            user: useruser,
          });
          console.log(useruser.src.uid);
          db.collection("users")
            .where("userId", "==", useruser.src.uid)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                console.log(doc.data());
                dispatch({
                  type: "SET_PROFILE",
                  profile: doc.data(),
                });
              });
            })
            .catch((error) => console.log(error));
        })
        .then((auth) => {
          history.push("/");
        })
        .catch((error) => console.log(error));
    } else {
      alert("email/password is missing");
    }
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  }, [open]);
  return (
    <div className="login">
      <div className="login__container">
        <h1>sign in</h1>

        <form>
          <h5>Email</h5>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
          ></input>

          <h5>Password</h5>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          ></input>
          <button type="submit" onClick={signin} className="login__button">
            Sign in
          </button>
        </form>

        <button
          onClick={() => history.push("/forgotpassword")}
          className="login__forgotpasswordbutton"
        >
          Forgot Password?
        </button>
        <button
          onClick={() => history.push("/register")}
          className="login__registerButton"
        >
          Create account
        </button>
      </div>
      {/* {open&&<div className="login__popup">
             <h1>Thanks for signing up! You can Login now!</h1>
            </div>} */}
    </div>
  );
}

export default Login;
