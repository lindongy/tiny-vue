import { test, expect } from '@playwright/test'

test('比率渲染器', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-renderer#renderer-inner-renderer-rate')
  const redCell = page.getByRole('cell', { name: '200.0000%' }).first().locator('.tiny-grid__rate-chart')
  await expect(redCell).toHaveCSS('background-color', 'rgb(242, 48, 48)')
  const yellowCell = page.getByRole('cell', { name: '34.4500%' }).nth(1).locator('.tiny-grid__rate-chart')
  await expect(yellowCell).toHaveCSS('background-color', 'rgb(255, 136, 0)')
  const blueCell = page.getByRole('cell', { name: '60.0500%' }).nth(1).locator('.tiny-grid__rate-chart')
  await expect(blueCell).toHaveCSS('background-color', 'rgb(25, 25, 25)')
})
