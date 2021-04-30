import React, { lazy, Suspense } from "react"; // React Core and Utils
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Web Router
import "scss/style.scss"; // Import of the Styles of the app
import Loading from "views/Loading"; // Fallback, this goes from a traditional import
import refreshToken from "helpers/refreshToken";
import authStore from "store/Auth";
import userStore from "store/User";

import Header from "components/Header";
import MessageBox from "components/MessageBox";
import Footer from "components/Footer";

import About from "views/About";
import { getMyInfo } from "./api/user"; // This is the first view

// Code Splitting
const Home = lazy(() => import("views/Home")); // Homepage view
const Auth = lazy(() => import("views/Auth")); // About Section
const Profile = lazy(() => import("views/Profile")); // About Section
const BookDetail = lazy(() => import("views/BookDetail")); // Book detail
const UploadBook = lazy(() => import("views/UploadBook")); // Upload book
const Verify = lazy(() => import("views/Verify")); // Upload book
const Terms = lazy(() => import("views/Terms")); // Upload book

// Check if Github Actions works

const App = () => {
  const { access_token, refresh_token, isAuthenticated } = authStore();
  const { name } = userStore();
  if (isAuthenticated) {
    refreshToken(access_token, refresh_token).then((data: any) =>
      data ? authStore.setState(data) : null
    );
    if (!name) {
      getMyInfo(access_token).then((response) => userStore.setState(response));
    }
  }
  return (
    <Router>
      <Header />
      <MessageBox />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Route path="/auth/verify/:token" component={Verify} />
          <Route path="/auth/:typeAuth" component={Auth} />
          <Route path="/profile" component={Profile} />
          <Route path="/book/:id" component={BookDetail} />
          <Route path="/upload" component={UploadBook} />
          <Route path="/terms" component={Terms} />
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
