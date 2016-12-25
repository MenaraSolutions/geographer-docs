---
title: 'API города'
---

```php
$city->getCode(); // Это всегда код Geonames
$city = City::build($id); // Построить объект города по идентификатору Geonames
$city->getLatitude(); // Широта
$city->getLongitude(); // Долгота
$city->getPopulation(); // Население
```

На текущий момент единственный способ связать вашу модель данных с городом это код Geonames. 