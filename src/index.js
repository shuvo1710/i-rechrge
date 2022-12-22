import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "bootstrap/dist/css/bootstrap.min.css";
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.render(
  <React.Fragment>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </React.Fragment>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();

