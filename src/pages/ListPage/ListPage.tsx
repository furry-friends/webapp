import React, { useState } from 'react';

import CatCard from '../../components/CatCard/CatCard';
import AddCatButton from '../../components/AddCatButton/AddCatButton';
import CatEditor from './CatEditor';
import './ListPage.scss';
import Cat from '../../models/Cat';

const ListPage = (): JSX.Element => {
  const [catToEdit, setCatToEdit] = useState<Cat | null>(null);

  return (
    <>
      {catToEdit && (
        <CatEditor cat={catToEdit} onClose={(): void => setCatToEdit(null)} />
      )}
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
          <AddCatButton onClick={(): void => setCatToEdit(Cat.empty)} />
        </div>
      </div>
    </>
  );
};

export default ListPage;
