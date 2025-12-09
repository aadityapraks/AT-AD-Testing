import { test, expect } from '@playwright/test';
import { TextMessageTemplatesPage } from '../page-objects/text-message-templates-page';

test.describe('MFLP8: Text Message Templates', () => {
    let textMessageTemplatesPage: TextMessageTemplatesPage;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://ui-qa.collectlogic.net/login');
        textMessageTemplatesPage = new TextMessageTemplatesPage(page);
        // Login once before all tests in this describe block
        await textMessageTemplatesPage.login('CCMR3', 'ajayb@byteridge.com', 'Welcome1#');
    });

    test('MFLP8-TC1: Verify Navigation to Text Message Templates', async () => {
        // Navigate to Text Message Templates
        // The navigateToTextMessageTemplates method in the page object already waits for
        // a key element (tableHeaderTooltipIcon) on the target page.
        // Successful completion of this step implies the navigation was successful and the page loaded correctly.
        await textMessageTemplatesPage.navigateToTextMessageTemplates();
        // No explicit expect here; successful navigation is the assertion.
    });

    test('MFLP8-TC2: Verify Table Columns and Tooltip in Text Message Templates', async () => {
        // Navigate to Text Message Templates page
        await textMessageTemplatesPage.navigateToTextMessageTemplates();

        // Verify table column headers are visible using methods from the page object
        await textMessageTemplatesPage.isSelectAllHeaderVisible();
        await textMessageTemplatesPage.isActionHeaderVisible();
        await textMessageTemplatesPage.isTextNameHeaderVisible();
        await textMessageTemplatesPage.isStatusHeaderVisible();
        await textMessageTemplatesPage.isDescriptionHeaderVisible();

        // Hover the mouse over the table header icon and verify tooltip
        const tooltipText = await textMessageTemplatesPage.getTableHeaderTooltipText();
        expect(tooltipText).toContain('The list of Text Messages');
    });

    test.afterEach(async () => {
        // Logout after each test in this describe block
        await textMessageTemplatesPage.logout();
    });
}); 