---
title: 'Данные'
---

### Репозиторий

Все данные об административных делениях хранятся в отдельных репозиториях в формате JSON. Таким образом, файлы
можно использовать в любом современном языке программирования. Исправления и добавления можно вносить напрямую
в JSON репозитории.

### Текущее покрытие: административные деления

| Type | ISO 3166 | FIPS | Geonames | GENC |
|------|----------|------|----------|------|
| Страны | 100% | В процессе | 100% | TBC |
| Области | 100% | В процессе | 100% | TBC |

Деления находятся в отдельном репозитории - [geographer-data](https://github.com/MenaraSolutions/geographer-data), так чтобы
данными было легко пользоваться в любом языке. 

### Текущее покрытие: переводы

По умолчанию предполагается, что Географ и языковые репо будут установлены через Packagist (Composer),
поэтому пакеты с переводами ожидаются в папке vendor/. Включать языки нет необходимости, но если Вы запросите
перевод из неуставленного языка – пакет выдаст исключение.

| Язык  | Страны   |  Области   |    Города    | Пакет |
|-----------|--------------|------------|--------------|---------|
| Английский   | 100%         | 100%       | 100%         | [geographer-data](https://github.com/MenaraSolutions/geographer-data) |
| Русский   | 100%         | 100%       | 63%          | [geographer-ru](https://github.com/MenaraSolutions/geographer-ru) | 
| Украинский | ✓            | ✓         | ✓           | [geographer-uk](https://github.com/MenaraSolutions/geographer-uk) |           
| Испанский   | ✓            | ✓         | ✓           | [geographer-es](https://github.com/MenaraSolutions/geographer-es) |           
| Итальянский  | ✓            | ✓         | ✓           | [geographer-it](https://github.com/MenaraSolutions/geographer-it) |
| Французский   | ✓            | ✓         | ✓           | [geographer-fr](https://github.com/MenaraSolutions/geographer-fr) |
| Немецкий   | ✓            | ✓         | ✓           | [geographer-de](https://github.com/MenaraSolutions/geographer-de) |
| Китайский  | ✓            | ✓         | ✓           | [geographer-zh](https://github.com/MenaraSolutions/geographer-zh) |

Английские тексты включены в основном пакете и используются по умолчанию. 

### Пример метаданных страны

```json
  {
    "languages": [
      "it"
    ],
    "ids": {
      "iso_3166_1": [
        "IT",
        "ITA",
        "380"
      ],
      "fips": "IT",
      "geonames": 3175395
    },
    "long": {
      "default": "Italy"
    },
    "area": 301230,
    "currency": "EUR",
    "phone": "39",
    "continent": "EU",
    "population": 60340328
  }
```