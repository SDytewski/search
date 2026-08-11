import { test, expect } from '@playwright/test';
import { MovieListPage } from '../pages/movie-list.page';

test('searching for a movie', async ({ page }) => {
  const movieListPage = new MovieListPage(page);

  await page.goto('https://movie-favorites-d8693.web.app/');
  await movieListPage.searchForMovie('star wars');
  await movieListPage.searchButton.click();
  await expect(movieListPage.moviePosters).toHaveCount(10);
});
