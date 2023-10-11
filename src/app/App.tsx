import React from 'react';
import ListPage from '../pages/ListPage/ListPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto px-2 sm:px-4">
        <ListPage />
      </div>
      <Footer />
    </div>
  );
};

export default App;
