import React from 'react'
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { ApiService } from './services/ApiService';
import { HomeComponent, EmpleadoComponent, BpelComponent, SeguridadComponent } from './components';

declare var M: any;

export interface IAppState {
  service: ApiService;
}

export default class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      service: new ApiService()
    }
  }

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="center">
          {
            <Switch>
              <Route exact path="/" component={HomeComponent} />
              <Route exact path="/bepl" render={() => <BpelComponent service={this.state.service} />} />
              <Route exact path="/seguridad" render={() => <SeguridadComponent service={this.state.service} />} />
              <Route exact path="/empleado" render={() => <EmpleadoComponent service={this.state.service} />} />
            </Switch>
          }
        </div>
      </div>
    );
  }
}

