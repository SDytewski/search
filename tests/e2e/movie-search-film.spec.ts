import { test, expect } from '@playwright/test';
import { MovieListPage} from '../pages/movie-list.page';

test('searching for a movie', async ({ page }) => {
  const movieListPage = new MovieListPage(page);

  await page.goto('http://localhost:3000/');
  await movieListPage.searchForMovie('star wars');
  await expect(movieListPage.movieTitle('Star Wars: Episode IV - A New Hope')).toBeVisible();
  await expect(movieListPage.searchInput).toHaveValue('');

  // await page.pause();
});

 test('submits a movie search by pressing Enter', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  const movieListPage = new MovieListPage(page);
  await movieListPage.searchInput.fill('star wars');

 });