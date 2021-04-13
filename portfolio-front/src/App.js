//import logo from './logo.svg';
//import './App.css';
/************rafce for functional component with exports**************/
import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import Projects from './screens/Projects';
import Contact from './screens/Contact';


const App = () => {
  let [check, setCheck] = useState(false);

  const expandMenu = event => {
    setCheck(event.target.checked);
  };
  
  return (
    <>
    <Router>
      <Header check={check} expandMenu={expandMenu}/>
        <main>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/projects' component={Projects} exact />
          <Route path='/contact' component={Contact} exact />
        </main>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
