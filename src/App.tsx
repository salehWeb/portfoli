import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import Loader from './Tools/Loader';
const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const Main = React.lazy(() => import('./pages/Main'));
const Connect = React.lazy(() => import('./pages/Connect'));
const Project = React.lazy(() => import('./pages/Project'));

function App() {
  return (
    <AnimatePresence>
      <div className="w-full h-full min-h-[100vh] overflow-hidden">
        <React.Suspense fallback={<Loader />}>
          <Header />
        </React.Suspense>
        <Routes>
          <Route path='/' element={
            <React.Suspense fallback={<Loader />}>
              <Main />
            </React.Suspense>
          } />

          <Route path='/project' element={
            <React.Suspense fallback={<Loader />}>
              <Project />
            </React.Suspense>
          } />

          <Route path='/connect' element={
            <React.Suspense fallback={<Loader />}>
              <Connect />
            </React.Suspense>
          } />
        </Routes>
        <React.Suspense fallback={<Loader />}>
          <Footer />
        </React.Suspense>
      </div>
    </AnimatePresence>
  );
}

export default App;
