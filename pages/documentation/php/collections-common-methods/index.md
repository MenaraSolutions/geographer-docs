---
title: Collections and common methods
---

### Collections

Arrays of administrative divisions (countries, states or cities) are returned as collections – a modern
way of implementing arrays. Some of the available methods are:

```php
$states->sortBy('name'); // States will be sorted by name
$states->setLocale('ru')->sortBy('name'); // States will be sorted by Russian translations/names
$states->find(['code' => 472039]); // Find 1+ divisions that match specified parameters 
$states->findOne(['code' => 472039]); // Return the first match only
$states->findOneByCode(472039); // Convenience magic method
```

### Common methods on division objects

All objects can do the following:
```php
$object->toArray(); // Return a flat array with all data
$object->parent(); // Return a parent (city returns a state, state returns a country)
$object->getCode(); // Get default unique ID
$object->getShortName(); // Get short (colloquial) name of the object
$object->getLongName(); // Get longer name
$object->getCodes(); // Get a plain array of all available unique codes
```

You can access information in a number of ways, do whatever you are comfortable with:
```php
$object->getName(); // Get object's name (inflicted and shortened when necessary)
$object->name; // Same effect
$object['name']; // Same effect
$object->toArray()['name']; // Same effect again
```

### Subdivision standards

By default, we will use ISO-3166-1 country and ISO 3166-2 state classification. Therefore, countries or states that don't have ISO codes are not visible by default.
Please note that FIPS 10-4 is a deprecated (abandoned) standard. It's better not to rely on it – new states and/or countries won't appear in FIPS.

You can change subdivision standard with ```setStandard``` method:

```php
$country->setStandard(DefaultManager::STANDARD_ISO); // ISO subdivisions
$country->setStandard(DefaultManager::STANDARD_FIPS); // FIPS 10-4 subdivisions
$country->setStandard(DefaultManager::STANDARD_GEONAMES); // Geonames subdivisions
```

This will affect ```getStates()``` and ```getCountries()``` output.