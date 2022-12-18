import { createBrowserRouter } from "react-router-dom"
import Main from "../LayOut/Main"
import FeaturePage from "../Pages/FeaturePage/FeaturePage"
import Home from "../Pages/Home/Home"
import NotFound from "../Pages/NotFound/NotFound"
import Payment from "../Pages/Payment/Payment"
import RechargePage from "../Pages/RechargePage/RechargePage"
import Success from "../Pages/Success/Success"

export  const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/home",
                element:<Home></Home>
            },
            {
                path:"/payment",
                element:<Payment></Payment>
            },
            {
                path:"/success",
                element:<Success></Success>
            },
            {
                path:"/feature",
                element:<FeaturePage></FeaturePage>
            },
            {
                path:"/recharge",
                element:<RechargePage></RechargePage>
            },
        ]
    }
])