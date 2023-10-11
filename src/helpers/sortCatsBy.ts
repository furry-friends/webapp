import Cat from '../models/Cat';

const sortCatsBy = (cats: Cat[], sortBy: string): Cat[] => {
  const clone = [...cats];

  clone.sort((a, b): number => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'age':
        return b.age - a.age;
      default:
        return a.id - b.id;
    }
  });

  return clone;
};

export default sortCatsBy;
