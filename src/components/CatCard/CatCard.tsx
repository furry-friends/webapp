import React, { useContext } from 'react';
import { Cat, CatContext } from 'frontend-lib';

import './CatCard.scss';
import catRepository from '../../repositories/catRepository';

interface CatCardProps {
  cat: Cat;
  onEdit: (cat: Cat) => void;
}

const CatCard: React.FC<CatCardProps> = ({ cat, onEdit }): JSX.Element => {
  const { deleteCat } = useContext(CatContext);

  const handleDelete = async (): Promise<void> => {
    deleteCat(cat.id);
    await catRepository.delete(cat.id);
  };

  return (
    <div className="cat-card">
      <div className="picture">
        {/* TODO: show a placehoder iamge here if the picture is broken */}
        <img src={cat.picture} alt="Cat" />
      </div>
      <div className="flex flex-col grow">
        <div className="grow">
          <div className="name">
            {cat.name}
            <sup className={`gender icon-${cat.gender}`}></sup>
          </div>
          <div className="birthday">Birthday: {cat.birthday}</div>
          <div className="bio">{cat.bio}</div>
        </div>
        <div className="buttons">
          <button
            className="icon-edit edit-button"
            onClick={(): void => onEdit(cat)}
          />
          <button
            className="icon-delete delete-button"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default CatCard;
