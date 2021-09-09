import '../css/App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Profile from "./Profile";
import Blog from "./Blog";
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
           <Profile/>
        </Route>

        <Route path="/dashboard">
           <NavBar/>
           <Dashboard/>
        </Route>

        <Route path="/faq">
           <NavBar/>
           <Faq/>
        </Route>

        <Route path="/blog">
           <NavBar/>
           <Blog/>
        </Route>

        <Route path="/blogpost/:blogname">
           <NavBar/>
           <BlogPostPage/>
        </Route>

        <Route path="/">
           <NavBar/>
           <Home/>
        </Route>
       

      </Switch>
      

      
    </div>
    </Router>
  );
}

export default App;
