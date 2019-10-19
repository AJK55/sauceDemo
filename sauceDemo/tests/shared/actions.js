import {
  Selector
} from 'testcafe'
import Page from './page.js'

const page = new Page();

export async function clickLogin(t) {
  await t
    .click(page.loginButton)
};
