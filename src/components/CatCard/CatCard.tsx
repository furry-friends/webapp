import React from 'react';

import './CatCard.scss';

interface CatCardProps {}

const CatCard: React.FC<CatCardProps> = (): JSX.Element => {
  return (
    <div className="cat-card">
      <div className="picture">
        <img src="https://placekitten.com/200/260" alt="Cat" />
      </div>
      <div className="flex flex-col grow">
        <div className="grow">
          <div className="name">
            Name
            <sup className="gender icon-boy"></sup>
          </div>
          <div className="birthday">Birthday: 2021-12-21</div>
          <div className="bio">Description</div>
        </div>
        <div className="buttons">
          <button className="icon-edit edit-button" />
          <button className="icon-delete delete-button" />
        </div>
      </div>
    </div>
  );
};

export default CatCard;
