import React from 'react';

import './AddCatButton.scss';

const AddCatButton: React.FC<{}> = (): JSX.Element => {
  return (
    <button className="add-cat-button">
      <i className="icon-add"></i>
      <div className="label">Add</div>
    </button>
  );
};

export default AddCatButton;
