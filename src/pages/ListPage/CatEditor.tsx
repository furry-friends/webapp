import React, { useContext, useEffect, useState } from 'react';

import DropdownSelect from '../../components/DropdownSelect/DropdownSelect';
import catRepository from '../../repositories/catRepository';
import base64Encode from '../../helpers/base64Encode';
import { Cat, CatContext, type Gender } from 'frontend-lib';

import './CatEditor.scss';

interface CatEditorProps {
  onClose: () => void;
  cat: Cat;
}

const CatEditor: React.FC<CatEditorProps> = ({
  onClose,
  cat: initialData,
}): JSX.Element => {
  // Add a simple fade in animation when the editor opens
  const [fadeIn, setFadeIn] = useState('');
  const [cat, setCat] = useState(initialData);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const { saveCat } = useContext(CatContext);

  useEffect((): void => {
    setFadeIn('fade-in');
  }, []);

  const updateName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCat(cat.copyWith({ name: e.target.value }));
  };

  const updateBirthday = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCat(cat.copyWith({ birthday: e.target.value }));
  };

  const updateGender = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setCat(cat.copyWith({ gender: e.target.value as Gender }));
  };

  const updateBio = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setCat(cat.copyWith({ bio: e.target.value }));
  };

  const submit = async (): Promise<void> => {
    if (!cat.name || cat.gender === '' || !cat.birthday || !cat.bio) {
      alert('Please fill out all fields');
      return;
    }

    if (cat.isNew && !selectedImage) {
      alert('Please select an image');
      return;
    }

    if (Cat.isValidBirthday(cat.birthday) === false) {
      alert('Birthday must be in the format YYYY-MM-DD');
      return;
    }

    let catWithPicture = cat;

    // TODO(Zhiguang):
    // Upload the image to a server and store the URL in the database.
    if (selectedImage) {
      catWithPicture = cat.copyWith({
        picture: await base64Encode(selectedImage),
      });
    }

    saveCat(await catRepository.addOrUpdate(catWithPicture));
    onClose();
  };

  return (
    <div className={`cat-editor ${fadeIn}`}>
      <div className="editor-container">
        <div className="editor-header">
          <h1 className="editor-title">{cat.isNew ? 'Add' : 'Edit'} Kitty</h1>
          <button className="icon-delete close-button" onClick={onClose} />
        </div>
        <form className="editor-form">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={cat.name}
              onChange={updateName}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Birthday"
              value={cat.birthday}
              onChange={updateBirthday}
            />
          </div>
          <div>
            <select value={cat.gender} onChange={updateGender}>
              <option value="">Select gender</option>
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
            </select>
          </div>
          <div>
            <textarea placeholder="Bio" value={cat.bio} onChange={updateBio} />
          </div>
          <DropdownSelect onSelected={setSelectedImage} />
          <div className="buttons">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="submit-button" onClick={submit}>
              {cat.isNew ? 'Add' : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CatEditor;
