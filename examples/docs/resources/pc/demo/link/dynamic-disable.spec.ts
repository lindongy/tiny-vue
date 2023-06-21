import { test, expect } from '@playwright/test';

test('禁用', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull());
    await page.goto('http://localhost:7130/pc/link/dynamic-disable');
    const preview = page.locator('#preview');
    let anchor = preview.locator('a').filter({ hasText: '默认链接' });
    await expect(anchor).toHaveCSS('cursor', 'not-allowed');
    await anchor.hover();
    await expect(anchor).toHaveCSS('color', 'rgb(191, 191, 191)');
    anchor = preview.locator('a').filter({ hasText: '主要链接' });
    await expect(anchor).toHaveCSS('cursor', 'not-allowed');
    await anchor.hover();
    await expect(anchor).toHaveCSS('color', 'rgb(191, 191, 191)');
    anchor = preview.locator('a').filter({ hasText: '成功链接' });
    await expect(anchor).toHaveCSS('cursor', 'not-allowed');
    await anchor.hover();
    await expect(anchor).toHaveCSS('color', 'rgb(191, 191, 191)');
    anchor = preview.locator('a').filter({ hasText: '警告链接' });
    await expect(anchor).toHaveCSS('cursor', 'not-allowed');
    await anchor.hover();
    await expect(anchor).toHaveCSS('color', 'rgb(191, 191, 191)');
    anchor = preview.locator('a').filter({ hasText: '危险链接' });
    await expect(anchor).toHaveCSS('cursor', 'not-allowed');
    await anchor.hover();
    await expect(anchor).toHaveCSS('color', 'rgb(191, 191, 191)');
    anchor = preview.locator('a').filter({ hasText: '信息链接' });
    await expect(anchor).toHaveCSS('cursor', 'not-allowed');
    await anchor.hover();
    await expect(anchor).toHaveCSS('color', 'rgb(191, 191, 191)');
})