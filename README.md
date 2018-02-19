# kamelcaser

[![Build Status](https://travis-ci.org/0xc14m1z/kamelcaser.svg?branch=master)](https://travis-ci.org/0xc14m1z/kamelcaser) [![Coverage Status](https://coveralls.io/repos/github/0xc14m1z/kamelcaser/badge.svg?branch=master)](https://coveralls.io/github/0xc14m1z/kamelcaser?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/71529a56fad691ed2c10/maintainability)](https://codeclimate.com/github/0xc14m1z/kamelcaser/maintainability)

Convert strings and object keys to camelCase format.

## how to install

```
$ npm install --save kamelcaser
```

## how to use it

```js
import KamelCaser from "kamelcaser"
// or var KamelCaser = require("kamelcaser")


KamelCaser.string("dashed-string")
// dashedString

KamelCaser.string("snake_string")
// snakeString

KamelCaser.string("PascalString")
// pascalString

KamelCaser.keys({ first_key: 42, SecondKey: 43, "third-key": 44 })
// { firstKey: 42, secondKey: 43, thirdKey: 44 }

// object with deep keys
KamelCaser.keys({ first_key: 42, SecondKey: 43, "third-key": 44, fourthKey: { "fifth_key": 45 } })
// { firstKey: 42, secondKey: 43, thirdKey: 44, fourthKey: { fifthKey: 45 } }

// array of objects
KamelCaser.keys([{ first_key: 42 }, { SecondKey: 43 }, { "third-key": 44 }])
// [{ firstKey: 42 }, { secondKey: 43 }, { thirdKey: 44 }]
```
