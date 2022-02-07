import React, { Suspense } from "react";
import { Link, Route, Switch } from "wouter";
import Navbar from './components/NavBar'
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
            <Navbar/>
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
          </section>
        </Suspense>
      </div>
  );
}

export default App;
