import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appoinment";
import Dashboard from "./components/DashBoard/Dashboard/Dashboard";
import AddDoctor from "./components/AddDoctor/AddDoctor";
import AllPatient from "./components/AllPatient/AllPatient";
import { createContext, useState } from "react";
import LogIn from "./components/LogIn/LogIn";
import PrivateRoute from "./components/LogIn/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Home/Services/Services";
import Contract from "./components/Home/Contract/Contract";
import Footer from "./components/ShareComonComponents/Footer/Footer";
import Navbars from "./components/ShareComonComponents/Navbars/Navbars";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbars/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Route path="/contract">
            <Contract/>
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addDoctor">
            <AddDoctor />
          </PrivateRoute>
          <PrivateRoute path="/allPatient">
            <AllPatient />
          </PrivateRoute>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
