import {
  Selector
} from 'testcafe'
import Page from './page.js'
import Creds from './creds.js'

const page = new Page();
const creds = new Creds();

export async function clickLogin(t) {
  await t
    .click(page.loginButton)
};

export async function standardLogin(t) {
  await t
    .typeText(page.userName, creds.standard)
  await t
    .typeText(page.passWord, creds.passWordAll)
};
