import {
  Selector
} from 'testcafe';
import {
  clickLogin
} from './shared/actions.js'
import {
  standardLogin
} from './shared/actions.js'
import {
  loopsortItems
} from './shared/actions.js'

import Page from './shared/page.js'
import Creds from './shared/creds.js'
import Functions from './shared/functions.js'
import Inventory from './shared/inventory.js'

const page = new Page();
const creds = new Creds();
const func = new Functions();
const inv = new Inventory();

fixture `Standard User Tests - Item and Cart Testing`
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
    await standardLogin(t)


  })
  .afterEach(async t => {
    await t
      .click(inv.menuButton)
    await t
      .click(inv.menuLogout)
    await t
      .expect(func.getPageUrl()).eql(page.baseIndexUrl)
    await t
      .expect(page.pageTitle.innerText).eql(page.homeTitle)
  });


test("Hover Product Images Loop", async t => {

  var i;
  for (i = 0; i < inv.inventoryImgs.length; i++) {
    await t
      .hover(inv.inventoryImgs[i])
  }
});

test("Hover Product Links Loop", async t => {

  var i;
  for (i = 0; i < inv.inventoryLinks.length; i++) {
    await t
      .hover(inv.inventoryLinks[i])
  }
})

test("Hover Product 'Add To Cart' Loop", async t => {

  var i;
  for (i = 0; i < inv.inventoryAddCart.length; i++) {
    await t
      .hover(inv.inventoryAddCart[i])
  }
})

test("Click Product Img, Then Click Back", async t => {
  await t
    .click(inv.bikeLightImg)
  await t
    .expect(func.getPageUrl()).eql(inv.bikeLightUrl)
  await func.goBack()


  await t
    .click(inv.boltTshirtImg)
  await t
    .expect(func.getPageUrl()).eql(inv.boltTshirtUrl)
  await func.goBack()

  await t
    .click(inv.onesieImg)
  await t
    .expect(func.getPageUrl()).eql(inv.onesieUrl)
  await func.goBack()

  await t
    .click(inv.redTshirtImg)
  await t
    .expect(func.getPageUrl()).eql(inv.redTshirtUrl)
  await func.goBack()

  await t
    .click(inv.backpackImg)
  await t
    .expect(func.getPageUrl()).eql(inv.backpackUrl)
  await func.goBack()

  await t
    .click(inv.fleeceJacketImg)
  await t
    .expect(func.getPageUrl()).eql(inv.fleeceJacketUrl)
  await func.goBack()
})

test("Click Product Img, Then Click Back Button on Page", async t => {
  await t
    .click(inv.bikeLightImg)
  await t
    .expect(func.getPageUrl()).eql(inv.bikeLightUrl)
  await t
    .click(inv.prodPageBack)

  await t
    .click(inv.boltTshirtImg)
  await t
    .expect(func.getPageUrl()).eql(inv.boltTshirtUrl)
  await t
    .click(inv.prodPageBack)

  await t
    .click(inv.onesieImg)
  await t
    .expect(func.getPageUrl()).eql(inv.onesieUrl)
  await t
    .click(inv.prodPageBack)

  await t
    .click(inv.redTshirtImg)
  await t
    .expect(func.getPageUrl()).eql(inv.redTshirtUrl)
  await t
    .click(inv.prodPageBack)

  await t
    .click(inv.backpackImg)
  await t
    .expect(func.getPageUrl()).eql(inv.backpackUrl)
  await t
    .click(inv.prodPageBack)


  await t
    .click(inv.fleeceJacketImg)
  await t
    .expect(func.getPageUrl()).eql(inv.fleeceJacketUrl)
  await t
    .click(inv.prodPageBack)

})

test("Click Product Link, Then Click Back Function", async t => {
  await t
    .click(inv.bikeLightLink)
  await t
    .expect(func.getPageUrl()).eql(inv.bikeLightUrl)
  await func.goBack()


  await t
    .click(inv.boltTshirtLink)
  await t
    .expect(func.getPageUrl()).eql(inv.boltTshirtUrl)
  await func.goBack()


  await t
    .click(inv.onesieLink)
  await t
    .expect(func.getPageUrl()).eql(inv.onesieUrl)
  await func.goBack()


  await t
    .click(inv.redTshirtLink)
  await t
    .expect(func.getPageUrl()).eql(inv.redTshirtUrl)
  await func.goBack()


  await t
    .click(inv.backpackLink)
  await t
    .expect(func.getPageUrl()).eql(inv.backpackUrl)
  await func.goBack()


  await t
    .click(inv.fleeceJacketLink)
  await t
    .expect(func.getPageUrl()).eql(inv.fleeceJacketUrl)
  await func.goBack()

})

test("Click Product Link, Then Click Back Button on Page", async t => {
  await t
    .click(inv.bikeLightLink)
  await t
    .expect(func.getPageUrl()).eql(inv.bikeLightUrl)
  await t
    .click(inv.prodPageBack)

  await t
    .click(inv.boltTshirtLink)
  await t
    .expect(func.getPageUrl()).eql(inv.boltTshirtUrl)
  await t
    .click(inv.prodPageBack)


  await t
    .click(inv.onesieLink)
  await t
    .expect(func.getPageUrl()).eql(inv.onesieUrl)
  await t
    .click(inv.prodPageBack)


  await t
    .click(inv.redTshirtLink)
  await t
    .expect(func.getPageUrl()).eql(inv.redTshirtUrl)
  await t
    .click(inv.prodPageBack)


  await t
    .click(inv.backpackLink)
  await t
    .expect(func.getPageUrl()).eql(inv.backpackUrl)
  await t
    .click(inv.prodPageBack)


  await t
    .click(inv.fleeceJacketLink)
  await t
    .expect(func.getPageUrl()).eql(inv.fleeceJacketUrl)
  await t
    .click(inv.prodPageBack)

})
