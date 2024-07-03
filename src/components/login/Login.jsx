import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./../signup/SignUp.css";
import { userPool } from "../../const/aws-exports";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { useAuth } from "../../custom-hooks/AuthContext";
import { login } from "../../const/STRINGS";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signInUtil(formData.email, formData.password);
  };

  function signInUtil(email, password) {
    const authenticationData = {
      Username: email,
      Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userData = {
      Username: email,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        console.log("access token + " + result.getAccessToken().getJwtToken());
        // Use the idToken for Logins Map when Federating user pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer
        console.log("idToken + " + result.idToken.jwtToken);
        dispatch({
          type: login,
          payload: {
            user: email,
            token: result.idToken.jwtToken,
          },
        });
        navigate("/");
        toast.success("Login Successful");
      },
      onFailure: function (err) {
        console.error(err);
        toast.error("Login Failed " + err.message);
      },
    });
  }

  return (
    <div className="container">
      <div className="signup-container">
        <h2 className="signup-title">Sign In</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Password"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
