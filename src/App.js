import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { NoMatch } from './pages/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

import './App.css';

class App extends Component {
  render() {

  
  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron/>
        <Layout>


      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>

      </Layout>

    </React.Fragment>
  );
}
}

export default App;
