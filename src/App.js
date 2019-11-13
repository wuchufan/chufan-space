import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import Posts from './containers/Posts/Posts';

class App extends Component{
  render(){
    return(
      <div>
        <Layout>
          <Switch>
            <Route path='/posts'  component={Posts}/>
            <Route path='/' exact component={HomePage}/>
          </Switch>

        </Layout>
      </div>
    );
  }
}

export default App;
