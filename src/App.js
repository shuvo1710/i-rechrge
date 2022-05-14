import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";
import Payment from "./Pages/Payment/Payment";
import Success from "./Pages/Success/Success";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect, useState } from "react";
import NotFound from "./Pages/NotFound/NotFound";
import FeaturePage from "./Pages/FeaturePage/FeaturePage";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import RechargePage from "./Pages/RechargePage/RechargePage";

function App() {
  const [loader, setLoader] = useState(false);
  const [loaderAnimation, setLoaderAnimation] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoaderAnimation(true);
    }, 2000);
  }, []);

  return (
    <>
      {loader ? (
        <div className={`preloader`}>
          <ScaleLoader color={"#0087db"} size={150} />
        </div>
      ) : (
        <div className={`${loaderAnimation && "animation"}`}>
          <AuthProvider>
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/order">
                  <Order />
                </Route>
                <Route path="/payment">
                  <Payment />
                </Route>
                <Route path="/success">
                  <Success />
                </Route>
                <Route path="/feature">
                  <FeaturePage />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/recharge">
                  <RechargePage />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </BrowserRouter>
          </AuthProvider>
        </div>
      )}
    </>
  );
}

export default App;
