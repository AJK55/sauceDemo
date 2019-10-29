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

fixture `Bad User Tests`
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

  });


test('Problem User', async t => {
  await t
    .typeText(page.userName, creds.problem)
  await t
    .typeText(page.passWord, creds.passWordAll)
  await clickLogin(t)
  ///Need to write out but first work on good user
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




test.skip('Problem User Image Check - Should Fail', async t => {
  await t
    .typeText(page.userName, creds.problem)
  await t
    .typeText(page.passWord, creds.passWordAll)
  await clickLogin(t)
  ///Need to write out but first work on good user
  await t
    .expect(inv.bikeLightItemImg.getAttribute('src')).eql(inv.bikeLightItemImgSrc)
  await t
    .expect(inv.boltTshirtItemImg.getAttribute('src')).eql(inv.boltTshirtItemImgSrc)
  await t
    .expect(inv.onesieItemImg.getAttribute('src')).eql(inv.onesieItemImgSrc)
  await t
    .expect(inv.redTshirtItemImg.getAttribute('src')).eql(inv.redTshirtItemImgSrc)
  await t
    .expect(inv.backpackItemImg.getAttribute('src')).eql(inv.backpackItemImgSrc)
  await t
    .expect(inv.fleeceJacketItemImg.getAttribute('src')).eql(inv.fleeceJacketItemImgSrc)

})
