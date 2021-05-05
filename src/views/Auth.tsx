import { Redirect, useParams } from "react-router-dom";

// Model for Route Param
import { ModelAuth } from "models/routeAuth";

// Import Forms
import Register from "components/Auth/Register";
import Login from "components/Auth/Login";
import Logout from "components/Auth/Logout";

//Layout
import FormsLayout from "layout/Forms";

// Here the code is Executed
function Auth() {
  const { typeAuth }: ModelAuth = useParams();
  switch (typeAuth) {
    case "register":
      return (
        <FormsLayout>
          <Register />
        </FormsLayout>
      );
    case "login":
      return (
        <FormsLayout>
          <Login />
        </FormsLayout>
      );
    case "logout":
      return (
        <FormsLayout>
          <Logout />
        </FormsLayout>
      );
    default:
      return <Redirect to="/home" />;
  }
}

export default Auth;
