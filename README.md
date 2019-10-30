# sauceDemo
https://www.saucedemo.com/index.html

[![Build Status](https://travis-ci.org/AJK55/sauceDemo.svg?branch=master)](https://travis-ci.org/AJK55/sauceDemo)

1.
https://blog.usejournal.com/how-to-create-a-simple-and-efficient-testing-project-with-testcafe-1273486fd0be
check out the scripts section for headless chrome

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
