import React from 'react';

import ListPage from '../pages/ListPage/ListPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const App = (): JSX.Element => {
  const [keyword, setKeyword] = React.useState<string>('');

  const handleSearch = (value: string): void => {
    setKeyword(value);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <div className="container mx-auto px-2 sm:px-4">
        <ListPage keyword={keyword} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
