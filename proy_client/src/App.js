import './App.scss';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Admin from "./pages/Admin";
// import SignIn from "./pages/Admin/signIn";
// import Home from "./pages/home"
// import Contact from "./pages/contact"
import React from 'react';
import routes from "../src/config/routes";
console.log(routes);

function App() {
    return (
        <Router>
            <Routes>
                {
                    routes.map((route, index) => (
                        <Route 
                            key={index}
                            path={route.path}
                            element={
                                <route.layout>
                                    <route.component></route.component>
                                </route.layout>
                            }
                        />
                    ))
                }
            </Routes>
        </Router>
        // <React.Fragment>
        //     <BrowserRouter>
        //         {
        //             routes.map((route, index) => (
        //                 <AdminSubRoutesViews key={index} {...route}></AdminSubRoutesViews>
        //             ))}
        //     </BrowserRouter>
        // </React.Fragment>
        /*<BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/signing" element={<SignIn />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>*/
        // <React.Fragment>
        //     <Admin></Admin>
        //     <SignIn></SignIn>
        //     <Home></Home>
        //     <Contact></Contact>
        // </React.Fragment>        
        // <BrowserRouter>
        //     <Link to="/">Home</Link>
        //     <br />
        //     <Link to="/contact">Contact</Link>
        //     <br />
        //     <Link to="/users">Users</Link>
        //     <br />
        //     <Routes>
        //         <Route exact path='/' element={<Home />} />
        //         <Route exact path='contact' element={<Contact />} />
        //         <Route exact path='users' element={<Users />} />
        //         <Route exact path='*' element={<NotFound />} />
        //     </Routes>
        // </BrowserRouter>
    );
}

/* Creación de componentes */
// function Home() {
//     return <h2>Component Home works!</h2>
// }

// function Contact() {
//     return <h2>Component Contact works!</h2>
// }

function AdminSubRoutesViews(route) {
    console.log(route);
    return true;
}

function Users() {
    return <h2>Component Users works!</h2>
}

function NotFound() {
    return <h2>Component not found!</h2>
}

export default App;
