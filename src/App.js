
import './App.css';
// import Paragraph from './components/Body';
// import ClassState from './components/class';
// import Counterfunctional from './components/countdownfunctional';
// import Addnumber from './components/abfunction';
// import Sample from './components/conditional';
import Home from './blog/Home';
// import abdi from './'
// import Safe from './blog/abdi';
// import axios from 'axios';
import Navbar from './blog/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './components/Create';
import About from './about';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogDetails from './components/blogdetails.js/BlogDetails';

function App() {
  return (
        <Router>
          <div className="App">
            < Navbar/>
            <div className='content'>
            <Switch>
                <Route exact path="/">
                  <Home/> 
                </Route>
                <Route path="/create">
                  <Create/>
                </Route>
                <Route path="/About">
                  <About/>
                </Route>
                <Route path="/BlogDetails/:id">
                  <BlogDetails/>
                </Route>
              </Switch> 
            </div>
          </div>
        </Router>
      )
  };
export default App;
