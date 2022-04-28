import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";
import Payment from "./Pages/Payment/Payment";
import PrivetRoute from "./Pages/PrivetRoute/PrivetRoute";
import Success from "./Pages/Success/Success";

function App() {


  return (
    <div>
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
                <Success/>
              </Route>
              <PrivetRoute path="">
              </PrivetRoute>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
