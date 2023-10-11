import React from 'react';

import './AddCatButton.scss';

interface AddCatButtonProps {
  onClick: () => void;
}

const AddCatButton: React.FC<AddCatButtonProps> = ({
  onClick,
}): JSX.Element => {
  return (
    <button className="add-cat-button" onClick={onClick}>
      <i className="icon-add"></i>
      <div className="label">Add</div>
    </button>
  );
};

export default AddCatButton;
