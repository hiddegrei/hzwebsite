import React, { useEffect, useState } from "react";
import "../css/ForgotPassword.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function ForgotPassword() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  }, [open]);

  const handleReset = (e) => {
    e.preventDefault();

    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        setOpen(true);
      })
      .catch(function (error) {
        alert(error);
      });
  };
  return (
    <div className="login" style={{ marginTop: "50px" }}>
      <div className="login__container">
        <h1>Reset Password</h1>
        <form>
          <h5>Email</h5>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
          ></input>
          {email && (
            <button
              type="submit"
              onClick={handleReset}
              className="forgot__forgotpasswordbutton"
            >
              Send Reset Mail
            </button>
          )}
        </form>
      </div>

      {open && (
        <div className="login__popup">
          <h1>Reset Mail send!</h1>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
