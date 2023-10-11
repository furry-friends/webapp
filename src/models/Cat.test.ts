import Cat from './Cat';

test('constructor', () => {
  const cat = new Cat({
    id: 1,
    name: 'cat',
    gender: 'boy',
    birthday: new Date(),
    bio: 'bio',
  });

  expect(cat.id).toBe(1);
  expect(cat.name).toBe('cat');
  expect(cat.gender).toBe('boy');
  expect(cat.bio).toBe('bio');
  expect(cat.birthday).toBeInstanceOf(Date);
});

test('copyWith', () => {
  let cat = new Cat({
    id: 1,
    name: 'cat',
    gender: 'boy',
    birthday: new Date(),
    bio: 'bio',
  });

  cat = cat.copyWith({ id: 2, name: 'cat2' });
  expect(cat.id).toBe(2);
  expect(cat.name).toBe('cat2');
});

test('isNew', () => {
  const cat = new Cat({
    id: -1,
    name: '',
    gender: 'boy',
    birthday: new Date(),
    bio: '',
  });

  expect(cat.isNew).toBe(true);
});

test('empty static method', () => {
  const cat = Cat.empty();

  expect(cat.id).toBe(-1);
});
