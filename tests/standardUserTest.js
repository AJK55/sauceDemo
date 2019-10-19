import {
  Selector
} from 'testcafe';
import {
  clickLogin
} from './shared/actions.js'

import Page from './shared/page.js'
import Creds from './shared/creds.js'
import Functions from './shared/functions.js'
import Inventory from './shared/inventory.js'

const page = new Page();
const creds = new Creds();
const func = new Functions();
const inv = new Inventory();

fixture `Invalid Login Tests`
  .page `https://www.saucedemo.com/`
  .beforeEach(async t => {
    await t
      .maximizeWindow()
    await t
      .navigateTo(page.baseUrl)
    await t
      .expect(func.getPageUrl()).eql(page.baseUrl)
    await t
      .expect(page.pageTitle.innerText).eql(page.homeTitle)
  })
  .afterEach(async t => {
    await t
      .expect(func.getPageUrl()).eql(page.baseIndexUrl)
    await t
      .expect(page.pageTitle.innerText).eql(page.homeTitle)
  });



test('Standard User', async t => {
  await t
    .typeText(page.userName, creds.standard)
  await t
    .typeText(page.passWord, creds.passWordAll)
  await clickLogin(t)
  await t
    .expect(page.pageTitle.innerText).eql(page.homeTitle)
  await t
    .expect(func.getPageUrl()).eql(inv.inventoryUrl)
  await t
    .click(inv.menuButton)
  await t
    .click(inv.menuClose)
  await t
    .click(inv.menuButton)
  await t
    .click(inv.menuLogout)


})
