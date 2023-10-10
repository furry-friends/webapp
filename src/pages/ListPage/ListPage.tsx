import React from 'react';

import './ListPage.scss';
import CatCard from '../../components/CatCard/CatCard';
import AddCatButton from '../../components/AddCatButton/AddCatButton';

const ListPage = (): JSX.Element => {
  return (
    <div className="list-page">
      <div className="sort-by">
        <label>Sort by:</label>
        <select>
          <option value="name">Name</option>
          <option value="birthday">Birthday</option>
        </select>
      </div>
      <div className="cat-list">
        <CatCard />
        <CatCard />
        <CatCard />
        <CatCard />
        <AddCatButton />
      </div>
    </div>
  );
};

export default ListPage;
