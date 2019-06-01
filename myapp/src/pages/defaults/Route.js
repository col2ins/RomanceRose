
import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';
import OurSuccess from './OurSuccess/OurSuccess';
import Showcases from './Showcases/Showcases';
import PartyPreparing from './PartyPreparing/PartyPreparing';
import Products from './Products/Products';
import Testimonials from './Testimonials/Testimonials';
import Blog from './Blog/Blog';
import Partners from './Partners/Partners';
import Contact from './Contact/Contact';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Footer from './Footer';

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./css/MyStyle.css";
import "./css/icons/webfont.css";
import "./css/icons/fontawesome-free-5.8.1-web/css/fontawesome.min.css";
import "./css/icons/fontawesome-free-5.8.1-web/css/all.min.css";

function DefaultContent({ routes }) {
    return (
        <div>
            <Header />
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </div>
    );
}

function HomeContent({ routes }) {
    return (
        <div>
            <Header />
            <AboutUs />
            <Services />
            <OurSuccess />
            <Showcases />
            <PartyPreparing />
            <Products />
            <Testimonials />
            <Blog />
            <Partners />
            <Contact />
            <Footer />
            <HomePage />
        </div>
    );
}

function RouteWithSubRoutes(route) {
    return (
        <Route
        exact
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

const RouteList = [
    {
        path: "/app",
        component: DefaultContent,
        exact: true,
        routes: [
            {
                path: "app/home",
                component: HomePage
            }
        ]
    }, {
        path: "/login",
        component: LoginPage,
        routes: [],
        exact: true
    }, {
        path: "/",
        component: HomeContent,
        routes: [],
        exact: true
    }
];

const Router = RouteList.map((route, i) => (
    <RouteWithSubRoutes key={i} {...route} />
));

export {
    Router
}