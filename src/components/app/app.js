import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';

// DummySwapiService Mock for testing
import DummySwapiService from '../../services/dummy-swapi-service';
import SwapiService from '../../services/swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from '../pages';
import { StarshipDetails } from '../star-wars-components'
import './app.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import ErrorBoundry from '../error-boundry';

export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    showRandomPlanet: true,
    hasError: false,
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log("swiched to", Service.name);

      return {
        swapiService: new Service()
      };
    })
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({hasError: true})
  }


  render() {

    const { isLoggedIn } = this.state;

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="container-fluid">
              <Header onServiceChange={this.onServiceChange} />
              {planet}
              {/* <div className="mb-3">
                <button
                  className="toggle-planet btn btn-warning shadow-none mr-3"
                  onClick={this.toggleRandomPlanet}>
                  Toggle Random Planet
                </button>
              </div> */}

              <Switch>
                <Route path="/react-StarWars-app"
                  render={() => (
                    <div className="jumbotron">
                      <h2 className="text-center text-success">Welcome to Star Wars Database</h2>
                    </div>)}
                  exact={true} />
                <Route path="/react-StarWars-app/people/:id?" component={PeoplePage} />
                <Route path="/react-StarWars-app/planets" component={PlanetsPage} />
                <Route path="/react-StarWars-app/starships" exact component={StarshipsPage} />
                <Route path="/react-StarWars-app/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params
                    //console.log(match)
                    return <StarshipDetails itemId={id} />
                  }} />
                <Route
                  path="/react-StarWars-app/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin}
                    />
                  )}
                />
                <Route
                  path="/react-StarWars-app/secret"
                  render={() => (<SecretPage isLoggedIn={isLoggedIn} />)}
                />

                {/* if page not found 404 */}
                {/* <Redirect to="/react-StarWars-app" /> */}
                {/* or */}
                <Route render={() => <h2 className="text-warning text-center">Page not found</h2>}/>
              </Switch>

              {/* <ErrorBoundry>
                <PeoplePage />
              </ErrorBoundry>*/}
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
