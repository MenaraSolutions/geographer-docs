---
title: Базовые методы
---

Мы стараемся поддерживать API интуитивно понятным. Смысл большинства методов понятен по их названию.

```php
use MenaraSolutions\Geographer\Earth;
use MenaraSolutions\Geographer\Country;

// Начнем работать с нашей красивой планеты
$earth = new Earth();

// Хочу список всех стран в массиве
$earth->getCountries()->toArray();

// Пожалуйста, дайте мне короткие названия по возможности, типа USA вместо United States of America
$earth->getCountries()->useShortNames()->toArray();

// А теперь мне нужны все области Таиланда
$thailand = $earth->getCountries()->findOne(['code' => 'TH']); // Можно сделать поиск по коллекции
$thailand = $earth->findOne(['code' => 'TH']); // Или вызвать напрямую на планете
$thailand = $earth->findOneByCode('TH'); // Или удобный метод
$thailand->getStates()->toArray();

// Ой, хочу их на русском
$thailand->getStates()->setLocale('ru')->toArray();

// Ой, хочу их в правильном склонении 'в' (типа 'в Испании')
$thailand->getStates()->setLocale('ru')->inflict('in')->toArray();

// Можете пользоваться константами, чтобы упростить жизнь IDE и не запоминать коды
$thailand->getStates()->setLocale(TranslationAgency::LANG_RUSSIAN)->inflict(TranslationAgency::FORM_IN)->toArray();

// Хочу столицу Таиланда, её код geonames. И еще координаты
$capital = $thailand->getCapital();
$capital->getGeonamesCode();
$capital->getLatitude();
$capital->getLongitude();
```