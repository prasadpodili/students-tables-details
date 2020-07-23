import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Route,Switch,withRouter} from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';
import Addstudent from './components/students/Addstudent';
import Editstudent from './components/students/Editstudent';
import Selectstudent from './components/students/Selectstudent';

function App(props) {
  return (
    <Router>
     <div className="App">
        
        <Switch>
          <Route exact path="/" component={Home}/>
          
          <Route exact path="/students/add" component={Addstudent}/>
          <Route exact path="/students/edit/:id" component={Editstudent}/>
          <Route exact path="/students/:id" component={Selectstudent}/>
          <Route component={Notfound}/>
        </Switch>
    </div>
  </Router>
    
  );
}

export default App;
