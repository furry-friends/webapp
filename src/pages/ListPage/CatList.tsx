import { useContext, useEffect } from 'react';
import { CatContext } from '../../states/cats';
import CatCard from '../../components/CatCard/CatCard';
import Cat from '../../models/Cat';
import catRepository from '../../repositories/catRepository';

interface CatListProps {
  onEdit: (cat: Cat) => void;
}

const CatList: React.FC<CatListProps> = ({ onEdit }): JSX.Element => {
  const { cats, setCats } = useContext(CatContext);

  useEffect((): void => {
    (async (): Promise<void> => {
      const cats = await catRepository.query();

      setCats(cats);
    })();
  }, [setCats]);

  return (
    <>
      {cats.map(
        (cat: Cat): JSX.Element => (
          <CatCard key={cat.id} cat={cat} onEdit={onEdit} />
        ),
      )}
    </>
  );
};

export default CatList;
