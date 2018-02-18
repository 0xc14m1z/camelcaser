import KamelCaser from '..'

const keys = obj =>
  isObject(obj) ?
  Object.keys(obj).reduce(key(obj), {}) :
    Array.isArray(obj) ?
    obj.map(element => keys(element)) :
    obj

export default keys

const key = initialObject => (obj, k) =>
  Object.assign(
    obj,
    { [ KamelCaser.string(k) ]: keys(initialObject[k]) }
  )

const isObject = obj =>
  !!obj &&
  Object.getPrototypeOf(obj) === Object.prototype
