import {
  Selector
} from 'testcafe'


import Page from './page.js'

const page = new Page();

export default class Cart {
  constructor() {

    this.pageUrls = [
      this.cartUrl = page.baseUrl + 'cart.html',
    ]

    this.pageContents = [
      this.yourCart = Selector('#contents_wrapper > div.subheader'),
      this.qtyCart = Selector('#cart_contents_container > div > div.cart_list > div.cart_quantity_label'),
      this.description = Selector('#cart_contents_container > div > div.cart_list > div.cart_desc_label'),
    ]

    this.contentText = [
      this.yourCartText = 'Your Cart',
      this.qtyText = 'QTY',
      this.descriptionText = 'DESCRIPTION',
    ]

    this.cartButtons = [
      this.cShopButton = Selector('.cart_footer > a.btn_secondary'),
      this.checkoutButton = Selector('.cart_footer > a.btn_action.checkout_button'),
    ]

    this.cartButtonsLabels = [
      this.cShopText = 'CONTINUE SHOPPING',
      this.checkoutText = 'CHECKOUT'
    ]

  }
}
