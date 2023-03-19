import NavBar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';




function App() {
  return (
    <Router>
    <div className="App">
      {/* navbar */}
      <NavBar />
      <div className="content">
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/create">
            <Create/>
          </Route>

          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>
          
        </Switch>
      </div>
    </div>
    </Router>
  );
}

//Always need to import a function/ component afterwards
export default App;