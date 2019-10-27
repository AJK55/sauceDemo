import {
  Selector
} from 'testcafe';
//import {
//  clickLogin
//} from './shared/actions.js'
import {
  standardLogin
} from './shared/actions.js'
//import {
//  loopsortItems
//} from './shared/actions.js'
import {
  goToCartPg
} from './shared/actions.js'
import {
  addRandomProduct
} from './shared/actions.js'

import Page from './shared/page.js'
import Creds from './shared/creds.js'
import Functions from './shared/functions.js'
import Inventory from './shared/inventory.js'
import Cart from './shared/cart.js'
import CO from './shared/cOut.js'

const page = new Page();
const creds = new Creds();
const func = new Functions();
const inv = new Inventory();
const cart = new Cart();
const co = new CO();

fixture `Testing of Checkout Page Functionality`
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


test('Checkout Page Element Check Adding Random Product', async t => {
  await addRandomProduct(t)
  await t
    .hover(co.coYourInfo)
  await t
    .expect(co.coYourInfo.innerText).eql(co.coYourInfoText)

  var i;
  for (i = 0; i < inv.footerSocials.length; i++) {
    await t
      .hover(inv.footerSocials[i])
  }

  var b;
  for (b = 0; b < co.buttons.length; b++) {
    await t
      .hover(co.buttons[b])
  }

  var f;
  for (f = 0; f < co.formFields.length; f++) {
    await t
      .hover(co.formFields[f])
  }

  await t
    .expect(co.firstName.getAttribute('placeholder')).eql(co.firstNamePH)
  await t
    .expect(co.lastname.getAttribute('placeholder')).eql(co.lastnamePH)
  await t
    .expect(co.zipCode.getAttribute('placeholder')).eql(co.zipCodePH)


})


test('CheckOut Form Error Validation', async t => {

  await addRandomProduct(t)
  await t
    .click(co.continue)
  await t
    .expect(co.errorContainer.innerText).eql(co.firstNameReq)
  await t
    .typeText(co.firstName, creds.firstNameText)
  await t
    .expect(co.firstName.getAttribute('value')).eql(creds.firstNameText)
  //continue going through error messages
})
