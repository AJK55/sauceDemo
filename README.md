# sauceDemo
https://www.saucedemo.com/index.html

[![Build Status](https://travis-ci.org/AJK55/sauceDemo.svg?branch=master)](https://travis-ci.org/AJK55/sauceDemo)

1.
https://blog.usejournal.com/how-to-create-a-simple-and-efficient-testing-project-with-testcafe-1273486fd0be
check out the scripts section for headless chrome

1a.
Using the Firefox addon in headless mode #
Starting with version 56, Firefox can be used in “headless” mode, which is suitable for driving browser-based tests using Selenium and other tools. Headless mode can be enabled using the MOZ_HEADLESS environment variable:
# Add to .travis.yml file

env:
  global:
    - MOZ_HEADLESS=1
addons:
  firefox: latest

2.
add firefox to .travis.yml
https://devexpress.github.io/testcafe/documentation/continuous-integration/travis.html
dist: trusty
sudo: required

addons:
  firefox: latest
  apt:
    sources:
     - google-chrome
    packages:
     - google-chrome-stable fluxbox

before_script:
  - "export DISPLAY=:99.0"
  - "sh -e /etc/init.d/xvfb start"
  - sleep 3
  - fluxbox >/dev/null 2>&1 &
