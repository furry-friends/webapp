import React, { useEffect, useState } from 'react';

import './CatEditor.scss';
import DropdownSelect from '../../components/DropdownSelect/DropdownSelect';

interface CatEditorProps {
  onClose: () => void;
  // TODO: use Cat data type
  catId?: string;
}

const CatEditor: React.FC<CatEditorProps> = ({
  onClose,
  catId,
}): JSX.Element => {
  // Add a simple fade in animation when the editor opens
  const [fadeIn, setFadeIn] = useState('');
  const isAddMode = !catId;

  useEffect((): void => {
    setFadeIn('fade-in');
  }, []);

  return (
    <div className={`cat-editor ${fadeIn}`}>
      <div className="editor-container">
        <div className="editor-header">
          <h1 className="editor-title">{isAddMode ? 'Add' : 'Edit'} Kitty</h1>
          <button className="icon-delete close-button" onClick={onClose} />
        </div>
        <form className="editor-form">
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" placeholder="Birthday" />
          </div>
          <div>
            <select>
              <option>Select gender</option>
              <option>Boy</option>
              <option>Girl</option>
            </select>
          </div>
          <div>
            <textarea placeholder="Bio" />
          </div>
          <DropdownSelect />
          <div className="buttons">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              {isAddMode ? 'Add' : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CatEditor;
