import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#card-mode')

  const wrap = page.locator('#card-mode')
  const actionMenu = wrap.locator('.tiny-action-menu')
  const visibleItem = actionMenu.locator('.tiny-action-menu__item')
  const moreItem = visibleItem.last()

  await expect(visibleItem).toHaveCount(4)
  await expect(moreItem).not.toHaveText(/更多/)
  // 三点图标
  const SvgPathReg = /^M2\.3 7\.78v.+219-1\.17Z$/
  await expect(moreItem.locator('.tiny-svg path').first()).toHaveAttribute('d', SvgPathReg)
})
