import { test, expect } from '@playwright/test';
import { MovieListPage } from '../pages/movie-list.page';

test('finds the movie search field', async ({ page }) => {
  const movieListPage = new MovieListPage(page);

  await page.goto('http://localhost:3000');
  await expect(movieListPage.searchInput).toBeVisible();
  await expect(movieListPage.searchButton).toBeVisible();
  await expect(movieListPage.searchButton).toBeEnabled();
  await expect(movieListPage.movieListHeading).toBeVisible();
});

  // await page.getByRole('searchbox', { name: 'Search for a Movie' }).click();
  // await page.getByRole('searchbox', { name: 'Search for a Movie' }).fill('star wars');
  // await page.getByRole('button', { name: 'Send' }).click();
