import React, { Suspense, lazy } from 'react';
import { HashRouter, Route } from 'react-router-dom';

// import About from '../pages/About';
import Home from '../pages/Home';

const About = lazy(() => import('../pages/About'));

export default function AppRouter() {
    return (
        <HashRouter>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <Suspense fallback={<div>loading...</div>}>
                    <About />
                </Suspense>
            </Route>
        </HashRouter>
    );
}
