import React, { lazy, Suspense } from "react"; // React Core and Utils
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Web Router
import "./scss/style.scss"; // Import of the Styles of the app
import Loading from "./views/Loading"; // Fallback, this goes from a traditional import

const Views = "./views/"; // Path of Views

// Code Splitting
const Header = lazy(() => import("./components/Header")); // Header Section
const Footer = lazy(() => import("./components/Footer")); // Footer Section
const MessageBox = lazy(() => import("./components/MessageBox")); // Box for Message
const Home = lazy(() => import(Views + "Home")); // Homepage view
const About = lazy(() => import(Views + "About")); // About Section
const Auth = lazy(() => import(Views + "Auth")); // About Section

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Header />
        <MessageBox />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Route path="/auth/:typeAuth" component={Auth} />
          <Route path="*">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
