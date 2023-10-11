import Cat from '../models/Cat';

const CATS_KEY = 'cats';

class CatRepository {
  /**
   * Returns all cats in the local storage.
   */
  private listAll(): Cat[] {
    const cats = localStorage.getItem(CATS_KEY);
    if (!cats) {
      return [];
    }

    try {
      return JSON.parse(cats).map(
        (cat: string): Cat => Cat.fromJson(JSON.parse(cat)),
      );
    } catch (e) {
      return [];
    }
  }

  /**
   * Saves the cats to the local storage.
   */
  private saveCat(cats: Cat[]): void {
    const catsJsonString = JSON.stringify(
      cats.map((e): string => e.toString()),
    );

    localStorage.setItem(CATS_KEY, catsJsonString);
  }

  /**
   * Returns all the cats or the cats name contains the given keyword.
   */
  async query({ keyword }: { keyword?: string } = {}): Promise<Cat[]> {
    const cats = this.listAll();

    if (!keyword) {
      return cats;
    }

    return cats.filter((e: Cat): boolean => e.name.includes(keyword));
  }

  /**
   * Deletes the cat with the given id.
   */
  async delete(id: number): Promise<void> {
    const cats = this.listAll();
    const index = cats.findIndex((e: Cat): boolean => e.id === id);
    cats.splice(index, 1);
    this.saveCat(cats);
  }

  /**
   * Adds or updates the given cat.
   */
  async addOrUpdate(cat: Cat): Promise<Cat> {
    const cats = this.listAll();

    if (cat.isNew) {
      cat.id = cats.length + 1;
      cats.push(cat);
    } else {
      const index = cats.findIndex((e): boolean => e.id === cat.id);
      cats[index] = cat;
    }

    this.saveCat(cats);
    return cat;
  }
}

const catRepository = new CatRepository();

export default catRepository;
