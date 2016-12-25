---
title: API планеты
---

Объект Земли имеет следующие методы:
```php
$earth->getAfrica(); // Коллекция африканских стран
$earth->getEurope(); // Все европейские страны
$earth->getNorthAmerica(); // Дальше можно догадаться
$earth->getSouthAmerica(); 
$earth->getAsia();
$earth->getOceania();

$earth->getCountries(); // Все страны
$earth->withoutMicro(); // Страны с населением от 100,000 людей
```