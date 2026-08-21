import type { Locator, Page } from '@playwright/test';

export class MovieListPage {

    readonly page: Page;
    readonly searchInput: Locator;
    readonly moviesHeading: Locator;
    readonly searchButton: Locator;
    readonly moviePosters: Locator;
    readonly movieListHeading: Locator;

    constructor(page: Page) {

        this.page = page;
        this.searchInput = page.getByRole('searchbox', {
            name: 'Search for a Movie',
        });
        //  Codegen await page.getByRole('searchbox', { name: 'Search for a Movie' }).click();
        this.searchButton = page.getByRole('button', {
            name: 'Send',
        });
        // Codegen await page.getByRole('button', { name: 'Send' }).click()
        this.moviesHeading = page.getByRole('heading', {
            name: 'Movies',
        });
        this.movieListHeading = page.getByRole('heading', {
            name: 'Movie List',
        });


        this.moviePosters = page.locator('#slider img');
    }
    async searchForMovie(title: string) {
        await this.searchInput.fill(title);
        await this.searchButton.click();
    }
    movieTitle(title: string): Locator {
        return this.page
            .locator('#slider')
            .getByText(title, { exact: true });
    }
}
