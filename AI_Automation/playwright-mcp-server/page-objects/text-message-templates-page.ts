import { Page, expect } from '@playwright/test';

export class TextMessageTemplatesPage {
    public page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private readonly clientCodeInput = 'input[name="tenantCode"]';
    private readonly emailInput = 'input[name="userId"]';
    private readonly passwordInput = 'input[name="password"]';
    private readonly loginButton = 'button[type="submit"]';
    private readonly operationsMenu = 'text=Operations';
    private readonly adminControlMenu = 'text=Admin Control';
    private readonly pickListMenu = 'text=Pick List';
    private readonly templatesMenu = 'text=Templates';
    private readonly textMessageTemplateOption = 'text=Text Message Template';
    private readonly userAvatar = 'span.fui-Avatar[role="img"]';
    private readonly signOutButton = 'text=Sign out';
    public readonly tableHeaderTooltipIcon = 'div:has(p:text-is("Text Messages Templates")) + svg';
    private readonly tableHeaderTooltipContent = 'div[role="tooltip"]';

    // Table Column Header Locators
    private readonly selectAllHeaderCheckbox = 'div.ag-header-cell[col-id="checkbox"]';
    private readonly actionHeader = '.ag-header-cell-text:has-text("Action")';
    private readonly textNameHeader = '.ag-header-cell-text:has-text("Text Name")';
    private readonly statusHeader = '.ag-header-cell-text:has-text("Status")';
    private readonly descriptionHeader = '.ag-header-cell-text:has-text("Description")';

    async login(clientCode: string, email: string, password: string) {
        await this.page.waitForSelector(this.clientCodeInput);
        await this.page.fill(this.clientCodeInput, clientCode);
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
        await this.page.waitForLoadState('networkidle');
    }

    async navigateToTextMessageTemplates() {
        await this.page.waitForSelector(this.operationsMenu, { timeout: 60000 });
        await this.page.click(this.operationsMenu);
        await this.page.waitForSelector(this.adminControlMenu);
        await this.page.click(this.adminControlMenu);
        await this.page.waitForSelector(this.pickListMenu);
        await this.page.click(this.pickListMenu);
        await this.page.waitForSelector(this.templatesMenu);
        await this.page.click(this.templatesMenu);
        await this.page.waitForSelector(this.textMessageTemplateOption);
        await this.page.click(this.textMessageTemplateOption);
        await this.page.waitForSelector(this.tableHeaderTooltipIcon, { timeout: 30000 });
    }

    async logout() {
        await this.page.waitForSelector(this.userAvatar, { timeout: 60000 });
        await this.page.click(this.userAvatar);
        await this.page.waitForSelector(this.signOutButton);
        await this.page.click(this.signOutButton);
        await this.page.waitForSelector(this.clientCodeInput, { timeout: 30000 });
    }

    async getTableHeaderTooltipText(): Promise<string | null> {
        await this.page.hover(this.tableHeaderTooltipIcon);
        await this.page.waitForSelector(this.tableHeaderTooltipContent, { state: 'visible', timeout: 5000 });
        const tooltipText = await this.page.textContent(this.tableHeaderTooltipContent);
        return tooltipText;
    }

    // Methods to verify column header visibility
    async isSelectAllHeaderVisible(): Promise<void> {
        await expect(this.page.locator(this.selectAllHeaderCheckbox)).toBeVisible();
    }

    async isActionHeaderVisible(): Promise<void> {
        await expect(this.page.locator(this.actionHeader)).toBeVisible();
    }

    async isTextNameHeaderVisible(): Promise<void> {
        await expect(this.page.locator(this.textNameHeader)).toBeVisible();
    }

    async isStatusHeaderVisible(): Promise<void> {
        await expect(this.page.locator(this.statusHeader)).toBeVisible();
    }

    async isDescriptionHeaderVisible(): Promise<void> {
        await expect(this.page.locator(this.descriptionHeader)).toBeVisible();
    }
} 