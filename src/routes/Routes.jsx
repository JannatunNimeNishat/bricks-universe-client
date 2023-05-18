import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/AllToys/AllToys";
import AddaToy from "../pages/AddaToy/AddaToy";
import MyToys from "../pages/MyToys/MyToys";
import ViewDetails from "../pages/ViewDetails/ViewDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        // errorElement:
        children:[
            {

                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/allToys',
                element:<AllToys></AllToys>
            },
            {
                path:'/myToys',
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path:'/addAToy',
                element:<PrivateRoute><AddaToy></AddaToy></PrivateRoute>
            },
            {
                path:`/viewDetails/:id`,
                element:<ViewDetails></ViewDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
            }

        ]
    }
])
export default router;