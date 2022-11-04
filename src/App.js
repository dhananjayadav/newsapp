import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";

class App extends Component {
 
  render() {
    return (
      <Router>
      <div>
        
        <Navbar/>
        <Routes>
                <Route exact path="/" element={ <News country='in' category='general' pageSize={6} key={'Qey'}/>}></Route>
                <Route path="/business" element={ <News country='in' category='business' pageSize={6} key={'Qey2'}/>}></Route>
                <Route path="/entertainment" element={ <News country='in' category='entertainment' pageSize={6} key={'Qey3'}/>}></Route>
                <Route path="/health" element={ <News country='in' category='Health' pageSize={6} key={'Qey4'}/>}></Route>
                <Route path="/science" element={ <News country='in' category='science' pageSize={6} key={'Qey5'}/>}></Route>
                <Route path="/technology" element={ <News country='in' category='technology' pageSize={6} key={'Qey6'}/>}></Route>                
        </Routes>
        
      </div>
    </Router>
    );
  }
}

export default App;
