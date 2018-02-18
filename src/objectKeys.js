import CamelCaser from '..'

const objectKeys = obj =>
  isObject(obj) ?
  Object.keys(obj).reduce(objectKey(obj), {}) :
    Array.isArray(obj) ?
    obj.map(element => objectKeys(element)) :
    obj

export default objectKeys

const objectKey = initialObject => (obj, key) =>
  Object.assign(
    obj,
    { [ CamelCaser.string(key) ]: objectKeys(initialObject[key]) }
  )

const isObject = obj =>
  !!obj &&
  typeof obj === "object" &&
  Object.getPrototypeOf(obj) === Object.prototype
