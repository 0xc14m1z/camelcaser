# camelcaser

[![Build Status](https://travis-ci.org/0xc14m1z/camelcaser.svg?branch=master)](https://travis-ci.org/0xc14m1z/camelcaser) [![Maintainability](https://api.codeclimate.com/v1/badges/b5dc2376d6251d38ca6a/maintainability)](https://codeclimate.com/github/0xc14m1z/camelcaser/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/0xc14m1z/camelcaser/badge.svg?branch=master)](https://coveralls.io/github/0xc14m1z/camelcaser?branch=master)

Convert strings and object keys to camelCase format.

## how to install

```
npm install --save camelcaser
```

## how to use it

```js
import CamelCaser from 'camelcaser'


CamelCaser.string("dashed-string")
// dashedString

CamelCaser.string("snake_string")
// snakeString

CamelCaser.string("PascalString")
// pascalString

CamelCaser.objectKeys({ first_key: 42, SecondKey: 43, "third-key": 44 })
// { firstKey: 42, secondKey: 43, thirdKey: 44 }

// object with deep keys
CamelCaser.objectKeys({ first_key: 42, SecondKey: 43, "third-key": 44, fourthKey: { "fifth_key": 45 } })
// { firstKey: 42, secondKey: 43, thirdKey: 44, fourthKey: { fifthKey: 45 } }

// array of objects
CamelCaser.objectKeys([{ first_key: 42 }, { SecondKey: 43 }, { "third-key": 44 }])
// [{ firstKey: 42 }, { secondKey: 43 }, { thirdKey: 44 }]
```
