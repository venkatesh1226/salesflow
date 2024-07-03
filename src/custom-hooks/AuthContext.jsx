import { createContext, useReducer, useContext } from "react";
import { login, logout } from "../const/STRINGS";
// Define the initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

// Define the reducer
const reducer = (state, action) => {
  switch (action.type) {
    case login:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case logout:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

// Create the context
const AuthContext = createContext({});

// Export the provider as a functional component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
