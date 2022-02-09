// import './styles';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h2>App Working</h2>
        {/* Todo -> Main Application starts here */}
        {/* ------ Here it is the sample code ------ */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/profile">
            <Profile />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
