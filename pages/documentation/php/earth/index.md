---
title: Earth API
---

Earth object got the following convenience methods:
```php
$earth->getAfrica(); // Get a collection of African countries
$earth->getEurope(); // Get a collection of European countries
$earth->getNorthAmerica(); // You can guess
$earth->getSouthAmerica(); 
$earth->getAsia();
$earth->getOceania();

$earth->getCountries(); // A collection of all countries
$earth->withoutMicro(); // Only countries that have population of at least 100,000
```