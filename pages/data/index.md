---
title: 'Geopolitical data'
---

### Repository

All geopolitical data and translations are kept in separate, plain JSON repositories. Therefore,
any modern programming language can consume this data. Moreover, corrections and contributions can be made directly 
to these individual repos.

### Current coverage: subdivisions

| Type | ISO 3166 | FIPS | Geonames | GENC |
|------|----------|------|----------|------|
| Countries | 100% | Coming soon | 100% | TBC |
| States | 100% | Coming soon | 100% | TBC |

Subdivision data is kept in a separate repo - [geographer-data](https://github.com/MenaraSolutions/geographer-data) so that it 
may be reused by different language SDKs. 

### Current coverage: translations

By default Geographer assumes that you use Packagist (Composer) to install language packages, therefore
we will expect them in vendor/ folder. There is no need to manually turn on an extra language, but if you
attempt to use a non-existing language – expect an exception.

| Language  |  Countries   |   States   |    Cities    | Package |
|-----------|--------------|------------|--------------|---------|
| English   | 100%         | 100%       | 100%         | [geographer-data](https://github.com/MenaraSolutions/geographer-data) |
| Russian   | 100%         | 100%       | 63%          | [geographer-ru](https://github.com/MenaraSolutions/geographer-ru) | 
| Ukrainian | ✓            | ✓         | ✓           | [geographer-uk](https://github.com/MenaraSolutions/geographer-uk) |           
| Spanish   | ✓            | ✓         | ✓           | [geographer-es](https://github.com/MenaraSolutions/geographer-es) |           
| Italian   | ✓            | ✓         | ✓           | [geographer-it](https://github.com/MenaraSolutions/geographer-it) |
| French    | ✓            | ✓         | ✓           | [geographer-fr](https://github.com/MenaraSolutions/geographer-fr) |
| German    | ✓            | ✓         | ✓           | [geographer-de](https://github.com/MenaraSolutions/geographer-de) |
| Chinese Mandarin | ✓            | ✓         | ✓           | [geographer-zh](https://github.com/MenaraSolutions/geographer-zh) |

English texts are included in the data package and are used as default metadata. 