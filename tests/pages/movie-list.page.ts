import type { Locator, Page, Response } from '@playwright/test';

export class MovieListPage {

    readonly page: Page;
    readonly searchInput: Locator;
    // readonly searcHeading: Locator;
    readonly searchButton: Locator;
    // readonly moviePosters: Locator;

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
    }

    async searchForMovie(title: string) {
        await this.searchInput.fill(title)
    };
}
