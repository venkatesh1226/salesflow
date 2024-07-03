import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/landing-page/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main-page/MainPage";
import { useAuth } from "./custom-hooks/AuthContext";

function App() {
  const { state } = useAuth();
  return (
    <>
      <ToastContainer />
      {/* <LandingPage /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={state.isAuthenticated ? <Main /> : <LandingPage />}
          />
          {/* <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Main />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
