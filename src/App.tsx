import React from 'react';

import './App.scss';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content__box'>
        <img className='test__img' src="https://i.stack.imgur.com/SvWWN.png" alt="" />
        <div className='img__content'>
          <div>some textsome text</div>
          <button>some button</button>
        </div>
        <div className='test'>
          <div>text color test</div>
          <div>text color test</div>
          <div>text color test</div>
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
