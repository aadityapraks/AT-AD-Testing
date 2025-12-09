import { Page } from '@playwright/test';

export class Helpers {
    static async waitForPageLoad(page: Page) {
        await page.waitForLoadState('networkidle');
    }

    static async waitForElement(page: Page, selector: string, timeout = 5000) {
        await page.waitForSelector(selector, { timeout });
    }

    static generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
} 