import { act, render } from '@testing-library/react';
import App from './App';

test('redner app', async () => {
  render(<App />);

  await act(async () => {
    expect(true).toBe(true);
  });
});
