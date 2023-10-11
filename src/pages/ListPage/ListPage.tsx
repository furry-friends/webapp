import React, { useState } from 'react';

import AddCatButton from '../../components/AddCatButton/AddCatButton';
import CatEditor from './CatEditor';
import './ListPage.scss';
import Cat from '../../models/Cat';
import { CatProvider } from '../../states/cats';
import CatList from './CatList';

const ListPage = (): JSX.Element => {
  const [catToEdit, setCatToEdit] = useState<Cat | null>(null);

  return (
    <CatProvider>
      {catToEdit && (
        <CatEditor cat={catToEdit} onClose={(): void => setCatToEdit(null)} />
      )}
      <div className="list-page">
        <div className="sort-by">
          <label>Sort by:</label>
          <select>
            <option value="name">Name</option>
            <option value="age">Age</option>
          </select>
        </div>
        <div className="cat-list">
          <CatList onEdit={(cat: Cat): void => setCatToEdit(cat)} />
          <AddCatButton onClick={(): void => setCatToEdit(Cat.empty)} />
        </div>
      </div>
    </CatProvider>
  );
};

export default ListPage;
