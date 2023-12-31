import React, { useState } from 'react';

import AddCatButton from '../../components/AddCatButton/AddCatButton';
import CatEditor from './CatEditor';
import './ListPage.scss';
import CatList from './CatList';
import SortBy from './SortBy';
import { Cat, CatProvider } from 'frontend-lib';

interface ListPageProps {
  keyword: string;
}

const ListPage: React.FC<ListPageProps> = ({ keyword }): JSX.Element => {
  const defaultSortBy = 'id';
  const [catToEdit, setCatToEdit] = useState<Cat | null>(null);

  return (
    <CatProvider>
      {catToEdit && (
        <CatEditor cat={catToEdit} onClose={(): void => setCatToEdit(null)} />
      )}
      <div className="list-page">
        {/* Hide the sort by while the cat list is empty */}
        <SortBy initialValue={defaultSortBy} />
        <div className="cat-list">
          <CatList
            keyword={keyword}
            defaultSortBy={defaultSortBy}
            onEdit={(cat: Cat): void => setCatToEdit(cat)}
          />
          {keyword === '' && (
            <AddCatButton onClick={(): void => setCatToEdit(Cat.empty)} />
          )}
        </div>
      </div>
    </CatProvider>
  );
};

export default ListPage;
