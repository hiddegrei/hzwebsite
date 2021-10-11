import "../css/App.css";
import React, { useEffect } from "react";
import { db, auth } from "../firebase";
import NavBar from "./NavBar";
import Home from "./Home";
import Profile from "./Profile";
import Blog from "./Blog";
import SideBar from "./SideBar";
import Faq from "./Faq";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import BlogPostPage from "./BlogPostPage";
import Login from "./Login";
import Reset from "./Reset";
import ForgotPassword from "./ForgotPassword";
import backImg from "../images/ictback.jpg";
import Register from "./Register";
import { useStateValue } from "../Stateprovider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      auth.onAuthStateChanged((authUser) => {
        // console.log('the user is:',authUser);
        if (authUser) {
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    }
    return () => (isSubscribed = false);
  }, [user]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .where("userId", "==", user.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log( doc.data());
            dispatch({
              type: "SET_PROFILE",
              profile: doc.data(),
            });
          });
        })
        .catch((error) => console.log(error));
    }
  }, [user]);
  return (
    <Router>
      <div className="app">
        <img alt="backgroundImage" src={backImg} className="app__background" />
        <Switch>
          <Route path="/profile">
            <NavBar />
            <div style={{ display: "flex" }}>
              <SideBar />
              <Profile />
            </div>
          </Route>

          <Route path="/dashboard">
            <NavBar />
            <div style={{ display: "flex" }}>
              <SideBar />
              <Dashboard />
            </div>
          </Route>

          <Route exact path="/forgotpassword">
            <NavBar />
            <ForgotPassword />
          </Route>

          <Route path="/login">
            <NavBar />

            <Login />
          </Route>

          <Route exact path="/register">
            <NavBar />
            <Register />
          </Route>

          <Route path="/faq">
            <NavBar />
            <div style={{ display: "flex" }}>
              <SideBar />
              <Faq />
            </div>
          </Route>

          <Route path="/blog">
            <NavBar />
            <div style={{ display: "flex" }}>
              <SideBar />
              <Blog />
            </div>
          </Route>

          <Route path="/blogpost/:blogname">
            <NavBar />
            <div style={{ display: "flex" }}>
              <SideBar />
              <BlogPostPage />
            </div>
          </Route>

          <Route path="/__/auth/action">
            <Reset />
          </Route>

          <Route path="/">
            <NavBar />
            <div style={{ display: "flex" }}>
              <SideBar />
              <Home />
            </div>
          </Route>
        </Switch>
        <div className="app__logo">By Hidde Greijdanus</div>
      </div>
    </Router>
  );
}

export default App;
