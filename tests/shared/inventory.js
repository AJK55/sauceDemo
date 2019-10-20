import {
  Selector
} from 'testcafe'

export default class Inventory {
  constructor() {

    this.pageUrls = [
      this.inventoryUrl = 'https://www.saucedemo.com/inventory.html'
    ]


    this.menu = [
      this.menuButton = Selector('#menu_button_container > div > div:nth-child(3) > div > button'),
      this.menuClose = Selector('#menu_button_container > div > div.bm-menu-wrap > div:nth-child(2) > div > button'),
      this.menuAll = Selector('#inventory_sidebar_link'),
      this.menuAbout = Selector('#about_sidebar_link'),
      this.menuLogout = Selector('#logout_sidebar_link'),
      this.menuReset = Selector('#logout_sidebar_link'),
    ]

    this.cart = [
      this.cartButton = Selector('#shopping_cart_container > a > svg > path')
    ]

    this.sort = [
      this.sortSelect = Selector('#inventory_filter_container > select')
    ]

    this.sortItems = [
      this.sortAZ = Selector('#inventory_filter_container > select > option:nth-child(1)'),
      this.sortZA = Selector('#inventory_filter_container > select > option:nth-child(2)'),
      this.sortLOHI = Selector('#inventory_filter_container > select > option:nth-child(3)'),
      this.sortHILO = Selector('#inventory_filter_container > select > option:nth-child(4)')
    ]

    this.sortOptions = [
      this.az = 'az',
      this.za = 'za',
      this.lohi = 'lohi',
      this.hilo = 'hilo'
    ]

    this.inventoryImgs = [
      this.bikeLightImg = Selector("#item_0_img_link"),
      this.boltTshirtImg = Selector("#item_1_img_link"),
      this.onesieImg = Selector("#item_2_img_link"),
      this.redTshirtImg = Selector("#item_3_img_link"),
      this.backpackImg = Selector("#item_4_img_link"),
      this.fleeceJacketImg = Selector("#item_5_img_link"),
    ]

    this.inventoryLinks = [
      this.bikeLightLink = Selector("#item_0_title_link"),
      this.boltTshirtLink = Selector("#item_1_title_link"),
      this.onesieLink = Selector("#item_2_title_link"),
      this.redTshirtLink = Selector("#item_3_title_link"),
      this.backpackLink = Selector("#item_4_title_link"),
      this.fleeceJacketLink = Selector("#item_5_title_link"),
    ]

    this.inventoryAddCart = [
      this.bikeLightAdd = Selector("#inventory_container > div > div:nth-child(2) > div.pricebar > button"),
      this.boltTshirtAdd = Selector("#inventory_container > div > div:nth-child(3) > div.pricebar > button"),
      this.onesieAdd = Selector("#inventory_container > div > div:nth-child(5) > div.pricebar > button"),
      this.redTshirtAdd = Selector("#inventory_container > div > div:nth-child(6) > div.pricebar > button"),
      this.backpackAdd = Selector("#inventory_container > div > div:nth-child(1) > div.pricebar > button"),
      this.fleeceJacketAdd = Selector("#inventory_container > div > div:nth-child(4) > div.pricebar > button"),
    ]

  }
}
