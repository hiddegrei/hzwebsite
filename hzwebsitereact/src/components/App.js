import '../css/App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Profile from "./Profile";
import Blog from "./Blog";
import SideBar from "./SideBar"
import Faq from "./Faq"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Dashboard from './Dashboard';
import BlogPostPage from './BlogPostPage'

function App() {
  return (
    <Router>
      <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <div className="app">
      <Switch>
        

         <Route path="/profile">
           <NavBar/>
           <div style={{display:'flex'}}>
             <SideBar/>
           <Profile/>
           </div>
        </Route>

        <Route path="/dashboard">
           <NavBar/>
           <SideBar/>
           <Dashboard/>
        </Route>

        <Route path="/faq">
           <NavBar/>
           <SideBar/>
           <Faq/>
        </Route>

        <Route path="/blog">
           <NavBar/>
           <SideBar/>
           <Blog/>
        </Route>

        <Route path="/blogpost/:blogname">
           <NavBar/>
           <SideBar/>
           <BlogPostPage/>
        </Route>

        <Route path="/">
           <NavBar/>
           <SideBar/>
           <Home/>
        </Route>
       

      </Switch>
      

      
    </div>
    </Router>
  );
}

export default App;
