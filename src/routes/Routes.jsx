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
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element:<AllToys></AllToys>,
                loader:() =>fetch('https://bricks-universe-server.vercel.app/allToys')
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
                element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://bricks-universe-server.vercel.app/toy/${params.id}`)
            },
            {
                path:'/updateToy/:id',
                element:<UpdateToy></UpdateToy>,
                loader: ({params}) => fetch(`https://bricks-universe-server.vercel.app/toy/${params.id}`)
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            }

        ]
    }
])
export default router;