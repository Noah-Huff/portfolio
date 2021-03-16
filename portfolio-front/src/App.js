//import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  let [check, setCheck] = useState(false);

  const expandMenu = event => {
    setCheck(event.target.checked);
  };
  
  return (
    <>
      <Header check={check} expandMenu={expandMenu}/>
        <main>
          <h1>Noah Huff</h1>
        </main>
      <Footer/>
    </>
  );
}

export default App;
