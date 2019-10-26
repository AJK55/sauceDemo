import {
  Selector
} from 'testcafe'

import Page from './page.js'

const page = new Page();

export default class Checkout {
  constructor() {

    this.pageUrls = [
      this.checkOutUrl = page.baseUrl + 'checkout-step-one.html',
    ]

    this.pageContents = [
  this.coYourInfo = Selector('#contents_wrapper > div.subheader'),
]

    this.contentText = [
      this.coYourInfoText = 'Checkout: Your Information',
    ]

    this.buttons = [
      this.cancel = Selector('.checkout_buttons > a'),
      this.continue = Selector('.checkout_buttons > input'),
]

    this.buttonsText = [
      this.cancelText = 'CANCEL',
      this.continueText = 'CONTINUE',
    ]

    this.formFields = [
      this.firstName = Selector('#first-name'),
      this.lastname = Selector('#last-name'),
      this.zipCode = Selector('#postal-code'),
    ]

    this.formPlaceHolders = [
      this.firstNamePH = 'First Name',
      this.lastnamePH = 'Last Name',
      this.zipCodePH = 'Zip/Postal Code',
    ]

    this.errorMsgContainer = [
      this.errorContainer = Selector('#checkout_info_container > div > form > h3'),
      ]

    this.errorMessages = [
      this.firstNameReq = 'Error: First Name is required',
      this.lastNameReq = 'Error: Last Name is required',
      this.postCodeReq = 'Error: Postal Code is required',
    ]

  }
}
