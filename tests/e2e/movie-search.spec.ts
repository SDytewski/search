import { test, expect } from '@playwright/test';
import { MovieListPage } from '../pages/movie-list.page';

test('finds the movie search field', async ({ page }) => {
  const movieListPage = new MovieListPage(page);

  await page.goto('https://movie-favorites-d8693.web.app/');
  await expect(movieListPage.searchInput).toBeVisible();
});
