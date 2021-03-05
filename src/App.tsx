import React, { Suspense, lazy } from "react"; // React Core and Utils
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // Web Router
import "./scss/style.scss"; // Import of the Styles of the app

const Views = "./views/"; // Path of Views

// Code Splitting
const Home = lazy(() => import(Views + "Home")); // Homepage view
const About = lazy(() => import(Views + "About")); // About Section

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
