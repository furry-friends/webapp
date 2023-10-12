import { useContext, useEffect } from 'react';
import { Cat, SortBy, sortCatsBy } from 'frontend-lib';

import { CatContext } from '../../states/cats';
import CatCard from '../../components/CatCard/CatCard';
import catRepository from '../../repositories/catRepository';

interface CatListProps {
  defaultSortBy: SortBy;
  onEdit: (cat: Cat) => void;
  keyword: string;
}

const CatList: React.FC<CatListProps> = ({
  onEdit,
  keyword,
  defaultSortBy,
}): JSX.Element => {
  const { cats, setCats } = useContext(CatContext);

  useEffect((): void => {
    (async (): Promise<void> => {
      const cats = await catRepository.query({ keyword });

      setCats(sortCatsBy(cats, defaultSortBy));
    })();
  }, [setCats, defaultSortBy, keyword]);

  return (
    <>
      {keyword !== '' && cats.length === 0 ? (
        <div className="italic text-gray-600">
          No cats with keyword "
          <span className="text-primary-dark font-bold">{keyword}</span>" found.
        </div>
      ) : (
        cats.map(
          (cat: Cat): JSX.Element => (
            <CatCard key={cat.id} cat={cat} onEdit={onEdit} />
          ),
        )
      )}
    </>
  );
};

export default CatList;
