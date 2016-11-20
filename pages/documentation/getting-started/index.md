---
title: Getting Started
---

It's not hard, you've just got to give it a try!

```javascript
if (true) {
  console.log('Yes I can!')
}
```

```bash
$ composer install geographer
```

```php
use MenaraSolutions\Geographer\Earth;
use MenaraSolutions\Geographer\Country;

// Default entry point is our beautiful planet
$earth = new Earth();

// Give me a list of all countries please
$earth->getCountries()->toArray();

// Oh, but please try to use short versions, eg. USA instead of United States of America
$earth->getCountries()->useShortNames()->toArray();

// Now please give me all states of Thailand
$thailand = $earth->getCountries()->findOne(['code' => 'TH']); // You can call find on collection
$thailand = $earth->findOne(['code' => 'TH']); // Or right away on division
$thailand = $earth->findOneByCode('TH'); // Alternative shorter syntax
$thailand->getStates()->toArray();

// Oh, but I want them in Russian
$thailand->getStates()->setLocale('ru')->toArray();

// Oh, but I want them inflicted to 'in' form (eg. 'in Spain')
$thailand->getStates()->setLocale('ru')->inflict('in')->toArray();

// Or if you prefer constants for the sake of IDE auto-complete
$thailand->getStates()->setLocale(TranslationAgency::LANG_RUSSIAN)->inflict(TranslationAgency::FORM_IN)->toArray();

// What's the capital and do you have a geonames ID for that? Or maybe latitude and longitude?
$capital = $thailand->getCapital();
$capital->getGeonamesCode();
$capital->getLatitude();
$capital->getLongitude();
```