import { CatRepository } from 'frontend-lib';

const cartRepository = new CatRepository({
  storage: {
    async getItem(key: string): Promise<string | null> {
      return localStorage.getItem(key);
    },

    async setItem(key: string, value: string): Promise<void> {
      return localStorage.setItem(key, value);
    },
  },
});

export default cartRepository;
