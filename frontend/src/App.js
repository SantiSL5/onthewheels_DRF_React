import React, { Suspense } from "react";
import { Link, Route, Switch } from "wouter";
import NavbarApp from './components/NavBar'
import Footer from './components/Footer'
import Cookies from './components/Cookies'
import './App.css';

const HomePage = React.lazy(() => import("./pages/Home"));
const LoginPage = React.lazy(() => import("./pages/Login"));
const StationsPage = React.lazy(() => import("./pages/StationsPage"));
const PrivCookies = React.lazy(() => import("./pages/Cookies"));


export function App() {
  return (
    <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            {/* <Link to="/">
              <figure className="App-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="black" className="bi bi-bicycle" viewBox="0 0 16 16">
                        <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"/>
                    </svg>
              </figure>
            </Link> */}
            <NavbarApp/>
            <Switch>
                <Route component={HomePage} path="/" />
                <Route component={LoginPage} path="/login" />
                <Route component={StationsPage} path="/stations" />
                <Route component={PrivCookies} path="/cookies" />
                {/* <Route
                    component={SearchResults}
                    path="/search/:keyword/:rating?"
                />
                <Route component={Detail} path="/gif/:id" />
                <Route component={Register} path="/register" />
                <Route component={ErrorPage} path="/:rest*" /> */}
            </Switch>
            <Footer/>
            <Cookies/>
          </section>
        </Suspense>
      </div>
  );
}

export default App;
