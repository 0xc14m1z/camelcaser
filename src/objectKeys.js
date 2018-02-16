import CamelCaser from '..'

const objectKeys = o =>
  Object
    .keys(o)
    .reduce(
      (result, key) => 
        Object.assign(
          {}, 
          result, 
          { 
            [CamelCaser.string(key)]: isObject(o[key]) ? objectKeys(o[key]) : o[key]
          }
        ),
      {}
    )

export default objectKeys

const isObject = o =>
  o !== null && 
  (
    typeof obj === "object" || 
    Object.getPrototypeOf(o) == Object.prototype
  )