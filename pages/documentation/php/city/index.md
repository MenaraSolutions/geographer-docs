---
title: 'City API'
---

```php
$city->getCode(); // This is always a Geonames code for now
$city = City::build($id); // Instantiate a city directly, based on $id provided (Geonames) 
$city->getLatitude(); // City's latitude
$city->getLongitude(); // City's longitude
$city->getPopulation(); // Population
```

Geonames ID is currently the only viable option to reference a city in your data store. 