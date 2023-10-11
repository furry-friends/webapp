import React, { useState } from 'react';

import CatCard from '../../components/CatCard/CatCard';
import AddCatButton from '../../components/AddCatButton/AddCatButton';
import CatEditor from './CatEditor';
import './ListPage.scss';

const ListPage = (): JSX.Element => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <>
      {isEditorOpen && (
        <CatEditor onClose={(): void => setIsEditorOpen(false)} />
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
          <AddCatButton onClick={(): void => setIsEditorOpen(true)} />
        </div>
      </div>
    </>
  );
};

export default ListPage;
