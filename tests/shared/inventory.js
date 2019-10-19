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

  }
}
