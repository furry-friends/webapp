import React, { useContext } from 'react';
import { sortCatsBy, type SortBy as SortByType } from 'frontend-lib';

import { CatContext } from '../../states/cats';

interface SortByProps {
  initialValue: SortByType;
}

const SortBy: React.FC<SortByProps> = ({ initialValue }): JSX.Element => {
  const [sortBy, setSortBy] = React.useState(initialValue);
  const { cats, setCats } = useContext(CatContext);

  const handleSortBy = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const sortBy = e.target.value as SortByType;

    setSortBy(sortBy);
    setCats(sortCatsBy(cats, sortBy));
  };

  return (
    <div className="sort-by">
      <label>Sort by:</label>
      <select value={sortBy} onChange={handleSortBy}>
        <option value="">Default</option>
        <option value="name">Name</option>
        <option value="age">Age</option>
      </select>
    </div>
  );
};

export default SortBy;
