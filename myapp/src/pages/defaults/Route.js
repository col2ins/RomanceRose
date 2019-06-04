
import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header/Header';

import Footer from './Footer';
import Contact from '../../components/Contact/Contact';
import HomePage from './HomePage';

import HeaderTopContent from './HomePage/TopContent';


import LeCuoi from './LeCuoi';
import HeaderTopContentLeCuoi from './LeCuoi/TopContent';

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./css/MyStyle.css";
import "./css/icons/webfont.css";
import "./css/icons/fontawesome-free-5.8.1-web/css/fontawesome.min.css";
import "./css/icons/fontawesome-free-5.8.1-web/css/all.min.css";


function RenderContent(route) {
    return (
        <Route
            exact
            path={route.path}
            render={props => (
                <div key={route.path}>
                    <Header content={route.topcontent} />
                    <route.component {...props} routes={route.routes} />
                    <Contact />
                    <Footer />
                </div>
            )}
        />
    );
}

const RouteList = [
    {
        path: "/",
        component: HomePage,
        topcontent: <HeaderTopContent />,
        routes: [],
        exact: true
    },
    {
        path: "/lecuoi",
        component: LeCuoi,
        topcontent: <HeaderTopContentLeCuoi />,
        routes: [],
        exact: true
    }
];

const Router = RouteList.map((route, i) => RenderContent(route));

export {
    Router
}