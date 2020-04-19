---
title: Basic usage
---

We are trying to keep our API fluent and expressive. Most methods are self explanatory.

```js
const Earth = require('geographer-js')

// Default entry point is our beautiful planet
const planet = Earth()

// Give me a list of all countries please
const countries = Earth().getCountries()

// Now please give me all states of Thailand
const thailand = Earth().getCountries().find(country => country.getCode() == 'TH')
const states = thailand.getStates()

// Oh, but I want them in Russian
const states = thailand.getStates().setLocale('ru')

// Oh, but I want them inflicted to 'in' form (eg. 'in Spain')
const states = thailand.getStates().setLocale('ru').inflict('in')

// What's the capital and do you have a geonames ID for that? Or maybe latitude and longitude?
const capital = thailand.getCapital()
capital.GeonamesCode()
capital.getLatitude()
capital.getLongitude()
```