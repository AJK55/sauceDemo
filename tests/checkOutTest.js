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
import Checkout from './shared/checkout.js'

const page = new Page();
const creds = new Creds();
const func = new Functions();
const inv = new Inventory();
const cart = new Cart();
const checkout = new Checkout();

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
    .hover(checkout.coYourInfo)
  await t
    .expect(checkout.coYourInfo.innerText).eql(checkout.coYourInfoText)

  var i;
  for (i = 0; i < inv.footerSocials.length; i++) {
    await t
      .hover(inv.footerSocials[i])
  }

  var b;
  for (b = 0; b < checkout.buttons.length; b++) {
    await t
      .hover(checkout.buttons[b])
  }

  var f;
  for (f = 0; f < checkout.formFields.length; f++) {
    await t
      .hover(checkout.formFields[f])
  }

  await t
    .expect(checkout.firstName.getAttribute('placeholder')).eql(checkout.firstNamePH)
  await t
    .expect(checkout.lastname.getAttribute('placeholder')).eql(checkout.lastnamePH)
  await t
    .expect(checkout.zipCode.getAttribute('placeholder')).eql(checkout.zipCodePH)


})


test('CheckOut Form Error Validation', async t => {

  await addRandomProduct(t)
  await t
    .click(checkout.continue)
  await t
    .expect(checkout.errorContainer.innerText).eql(checkout.firstNameReq)
  await t
    .typeText(checkout.firstName, creds.firstNameText)
  await t
    .expect(checkout.firstName.getAttribute('value')).eql(creds.firstNameText)
  //continue going through error messages
})
