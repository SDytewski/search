import { test, expect } from '@playwright/test';
import { MovieListPage } from '../pages/movie-list.page';

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('searches for a movie using the button', async ({ page }) => {
    const movieListPage = new MovieListPage(page);

    await movieListPage.searchForMovie('star wars');

    await expect(
      movieListPage.movieTitle('Star Wars: Episode IV - A New Hope')
    ).toBeVisible();
  });

  test('submits a movie search by pressing Enter', async ({ page }) => {
    const movieListPage = new MovieListPage(page);

    await movieListPage.searchInput.fill('star wars');
    await movieListPage.searchInput.press('Enter');

    await expect(
      movieListPage.movieTitle('Star Wars: Episode IV - A New Hope')
    ).toBeVisible();
  });
  
