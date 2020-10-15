import React,{Component} from 'react';
import {Route,Switch,HashRouter} from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import New from './views/New';
class App extends Component {
  constructor(props){
    super(props);
    this.stat={};
  }
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route component={Home} exact path="/"/>
          <Route component={About} path="/about"/>
          <Route component={New} path="/new"/>
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
