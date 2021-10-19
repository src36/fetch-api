import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./components/Home";
import RestaurantsCreate from "./components/RestaurantsCreate";
import RestaurantsDetails from "./components/RestaurantsDetails";
import RestaurantsList from "./components/RestaurantsList";
import RestaurantsSearch from "./components/RestaurantsSearch";
import RestaurantsUpdate from "./components/RestaurantsUpdate";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/list">List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/create">Create</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/search">Search</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/details">Details</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/update">Update</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/login">Login</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        

        <Route path="/create">
          <RestaurantsCreate />
        </Route>
        <Route path="/list">
          <RestaurantsList />
        </Route>
        <Route path="/search">
          <RestaurantsSearch />
        </Route>
        <Route path="/update/:id"
          render={props=>(<RestaurantsUpdate {...props} />
          )}
          >
          
        </Route>
        <Route path="/login"
          render={props=>(<Login {...props} />
          )}
          >
          
        </Route>
        <Route path="/details">
          <RestaurantsDetails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
