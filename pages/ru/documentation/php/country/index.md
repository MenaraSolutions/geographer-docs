---
title: API страны
---

Объекты страны имеют следющие данные и методы:
```php
$country->getCode(); // Код ISO 3166-1 alpha-2 (двухзначный)
$country->getCode3(); // Код ISO 3166-1 alpha-3 (трёхзначный)
$country->getNumericCode(); // Цифровой код ISO 3166-1
$country->getGeonamesCode(); // Код Geonams
$country->getFipsCode(); // Код FIPS 
$country->getArea(); // Площадь в квадратных километрах
$country->getCurrencyCode(); // Код национальной валюты, например USD
$country->getPhonePrefix(); // Телефонный код, например 7 у России
$country->getPopulation(); // Население
$country->getLanguage(); // Официальный язык (первый, если их несколько)

$country->getStates(); // Коллекция всех областей
```

В своей модели данных вы можете сохранять страны как коды Geonames, ISO 3166-1 alpha-2 или alpha-3, или цифровой
код ISO 3166-1 (FIPS код есть, но не рекомендуется к использованию).
