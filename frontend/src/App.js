import React, { Suspense } from "react";
import { Link, Route, Switch } from "wouter";
import NavbarApp from './components/NavBar'
import Footer from './components/Footer'
import Cookies from './components/Cookies'
import './App.css';

const HomePage = React.lazy(() => import("./pages/Home"));

export function App() {
  return (
    <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            {/* <Link to="/">
              <figure className="App-logo">
                <img alt="Logo" src="/logo.png" />
              </figure>
            </Link> */}
            <NavbarApp/>
            <Switch>
                <Route component={HomePage} path="/" />
                {/* <Route
                    component={SearchResults}
                    path="/search/:keyword/:rating?"
                />
                <Route component={Detail} path="/gif/:id" />
                <Route component={Login} path="/login" />
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
