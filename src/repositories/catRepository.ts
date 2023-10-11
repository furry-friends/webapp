import Cat from '../models/Cat';

const catRepository = {
  async query({ name }: { name?: string } = {}): Promise<Cat[]> {
    return [];
  },

  async addOrUpdate(cat: Cat): Promise<Cat> {
    return cat;
  },
};

export default catRepository;
