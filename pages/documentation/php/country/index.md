---
title: Country API
---

Country objects got the following encapsulated data:
```php
$country->getCode(); //ISO 3166-1 alpha-2 (2 character) code
$country->getCode3(); // ISO 3166-1 alpha-3
$country->getNumericCode(); // ISO 3166-1 numeric code
$country->getGeonamesCode(); // Geonames ID
$country->getFipsCode(); // FIPS code
$country->getArea(); // Area in square kilometers
$country->getCurrencyCode(); // National currency, eg. USD
$country->getPhonePrefix(); // Phone code, eg. 7 for Russia
$country->getPopulation(); // Population
$country->getLanguage(); // Country's first official language

$country->getStates(); // A collection of all states
```

Geonames, ISO 3166-1 alpha-2, alpha-3 and numeric codes are four viable options to reference country in your data store.