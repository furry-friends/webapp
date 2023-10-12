import React from 'react';

import SearchInput from './SearchInput';

import './Header.scss';
import { debounce } from 'frontend-lib';

interface HeaderProps {
  onSearch: (value: string) => void;
}

const debounceSearch = debounce(300);

const Header: React.FC<HeaderProps> = ({ onSearch }): JSX.Element => {
  const [keyword, setKeyword] = React.useState<string>('');

  const [isSearchbarVisible, setIsSearchbarVisible] =
    React.useState<boolean>(false);

  const handleSearch = (value: string): void => {
    setKeyword(value);

    debounceSearch((): void => {
      // TODO(Zhiguang):
      // Trigger navigation to list page with search keyword in the future.
      onSearch(value);
    });
  };

  const createSearchInput = (className: string): JSX.Element => (
    <SearchInput
      value={keyword}
      className={className}
      onChange={handleSearch}
    />
  );

  return (
    <header className="header">
      {/* Search input for small screens */}
      <div className={`searchbar ${isSearchbarVisible ? 'flex' : 'hidden'}`}>
        {createSearchInput('grow')}
        <button
          onClick={(): void => {
            setIsSearchbarVisible(false);
            handleSearch('');
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
