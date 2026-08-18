import { test, expect } from '@playwright/test';
import { MovieListPage } from '../pages/movie-list.page';

test('finds the title of movies after search', async ({ page }) => {
  const movieListPage = new MovieListPage(page);

  await page.goto('http://localhost:3000');
  await movieListPage.searchForMovie('battle');
  await expect(movieListPage.movieTitle('Battle Royale')).toBeVisible();
});
