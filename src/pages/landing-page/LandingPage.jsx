import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import default styles
import "./LandingPage.css";
import SignUp from "./../../components/signup/SignUp";
import Login from "./../../components/login/Login";
import About from "../../components/about/About";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="about-app">
        <About />
      </div>
      <div className="form-section">
        <Tabs>
          <TabList>
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <SignUp />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default LandingPage;
