import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";
import Home from "../pages/home";
import Contact from "../pages/contact";

import NotFound from "../pages/notFound";
import LayoutGuess from "../layouts/LayoutGess";
import Guess from "../pages/Guess/guess";

// const routes = [
//     {
//         path: "/admin",
//         component: LayoutAdmin,
//         exact: false,
//         routes: [
//             {
//                 path: "/admin/admin",
//                 component: Admin,
//                 exact: true
//             },
//             {
//                 path: "/admin/login",
//                 component: SignIn,
//                 exact: true
//             }
//         ]
//     }
// ];

const routesAdmin = [
    {
        path: "/admin",
        layout: LayoutAdmin,
        component: AdminHome
    },
    {
        path: "/admin/login",
        layout: LayoutAdmin,
        component: AdminSignIn
    }
];

const routesClient = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home
    },
    {
        path: "/contact",
        layout: LayoutBasic,
        component: Contact
    }    
];

const routesGuess = [
    {
        path: "/guess",
        layout: LayoutGuess,
        component: Guess
    }
];

const routeNotFound = [
    {
        path: "*",
        layout: LayoutBasic,
        component: NotFound
    }
];

const routes = [...routesAdmin, ...routesClient, ...routeNotFound, ...routesGuess];

export default routes;