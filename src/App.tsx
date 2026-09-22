import React, {Suspense} from 'react';
import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import {Footer, Header} from '@/components/';

const Cart = React.lazy(() => import('./pages/Cart/Cart'));
const NotFound = React.lazy(() => import('./pages/NoFound'));

const App: React.FC = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={
                            <Suspense fallback={<div className='loader-line'></div>}>
                                <Cart />
                            </Suspense>
                        } />
                        <Route path="*" element={
                            <Suspense fallback={<div className='loader-line'></div>}>
                                <NotFound />
                            </Suspense>} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;