import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Dashboard from './component/dashboard/Dashboard';
import ProjectDetails from './component/project/ProjectDetails';
import Signin from './component/auth/Signin';
import SignUp from './component/auth/SignUp';
import CreateProject from './component/project/CreateProject';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
