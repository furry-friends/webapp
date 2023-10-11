interface CatPropos {
  id: number;
  name: string;
  gender: 'boy' | 'girl';
  birthday: Date;
  bio: string;
}

class Cat implements CatPropos {
  id: number;
  name: string;
  gender: 'boy' | 'girl';
  birthday: Date;
  bio: string;

  constructor({ id, name, gender, birthday, bio }: CatPropos) {
    this.id = id;
    this.gender = gender;
    this.name = name;
    this.birthday = birthday;
    this.bio = bio;
  }

  /**
   * Returns true if the cat is new which has not been saved to the database.
   */
  get isNew(): boolean {
    return this.id === -1;
  }

  copyWith = (props: Partial<CatPropos>): Cat =>
    new Cat({
      ...this,
      ...props,
    });

  static empty = (): Cat =>
    new Cat({
      id: -1,
      name: '',
      gender: 'boy',
      birthday: new Date(),
      bio: '',
    });
}

export default Cat;
