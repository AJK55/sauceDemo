import {
  Selector
} from 'testcafe'
import Page from './page.js'
import Creds from './creds.js'
import Inventory from './inventory.js'
import Functions from './functions.js'
import Cart from './cart.js'


const page = new Page();
const creds = new Creds();
const inv = new Inventory();
const func = new Functions();
const cart = new Cart();

export async function clickLogin(t) {
  await t
    .click(page.loginButton)
};

export async function standardLogin(t) {
  await t
    .typeText(page.userName, creds.standard)
  await t
    .typeText(page.passWord, creds.passWordAll)
  await t
    .click(page.loginButton)
};

export async function loopsortItems(t) {
  var i;
  for (i = 0; i < inv.sortItems.length; i++) {
    await t
      .click(inv.sortSelect)
    await t
      .click(inv.sortItems[i])
  };
}

export async function goToCartPg(t) {
  await t
    .click(inv.cartButton)
  await t
    .expect(func.getPageUrl()).eql(cart.cartUrl)
};
