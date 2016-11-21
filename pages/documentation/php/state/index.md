---
title: 'State API'
---

At this moment Geographer only keeps cities with population above 50,000 for the sake of performance.

```php
$state->getCode(); // Get default code (currently Geonames)
$state->getIsoCode(); // Get ISO 3166-2 code  
$state->getFipsCode(); // Get FIPS code
$state->getGeonamesCode(); // Get Geonames code

$state->getCities(); // A collection of all cities
$state = State::build($id); // Instantiate a state directly, based on $id provided (Geonames) 
```

Geonames, ISO 3166-2 and FIPS are all unique codes so all three can be used to reference states in your data store.
