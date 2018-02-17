import CamelCaser from '..'

const objectKeys = obj =>
  isObject(obj) ?
  Object.keys(obj).reduce(objectKey(obj), {}) :
    Array.isArray(obj) ?
    objectsArrayKeys(obj) :
    obj

export default objectKeys

const objectKey = initialObject => (obj, key) =>
  Object.assign(
    obj,
    { [ CamelCaser.string(key) ]: objectKeys(initialObject[key]) }
  )

const objectsArrayKeys = arr =>
  arr.map(element => objectKeys(element))

const isObject = obj =>
  obj !== null &&
  typeof obj === "object" &&
  Object.getPrototypeOf(obj) === Object.prototype
