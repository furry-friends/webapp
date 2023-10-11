import React from 'react';

import './Header.scss';
import SearchInput from './SearchInput';

const Header = (): JSX.Element => {
  const [isSearchbarVisible, setIsSearchbarVisible] =
    React.useState<boolean>(false);

  const createSearchInput = (className: string): JSX.Element => (
    <SearchInput className={className} />
  );

  return (
    <header className="header">
      {/* Search input for small screens */}
      <div className={`searchbar ${isSearchbarVisible ? 'flex' : 'hidden'}`}>
        {createSearchInput('grow')}
        <button
          onClick={(): void => {
            setIsSearchbarVisible(false);
          }}>
          Cancel
        </button>
      </div>
      <div className="container">
        <div className="title">
          <i className="icon-logo logo"></i>
          <span className="text">Furry Friends</span>
        </div>

        {/* Search toggle button for small screens */}
        <button
          className="icon-magnifier search-toggle"
          onClick={(): void => setIsSearchbarVisible(true)}
        />

        {/* Search input for screens wider than md */}
        {createSearchInput('hidden md:block')}
      </div>
    </header>
  );
};

export default Header;
