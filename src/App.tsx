import React, { lazy, Suspense } from "react"; // React Core and Utils
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Web Router
import "./scss/style.scss"; // Import of the Styles of the app
import Loading from "./views/Loading"; // Fallback, this goes from a traditional import

import Header from "./components/Header";
import MessageBox from "./components/MessageBox";
import Footer from "./components/Footer";

const Views = "./views/"; // Path of Views
// Code Splitting
const Home = lazy(() => import(Views + "Home")); // Homepage view
const About = lazy(() => import(Views + "About")); // About Section
const Auth = lazy(() => import(Views + "Auth")); // About Section

const App = () => {
  return (
    <Router>
      <Header />
      <MessageBox />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Route path="/auth/:typeAuth" component={Auth} />
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
