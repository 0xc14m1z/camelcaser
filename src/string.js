const string = str =>
  uncapitalizeWord(
    join(
      capitalize(
        lowercase(
          split(
            removeSymbols(str)
          )
        )
      )
    )
  )

export default string

const removeSymbols = str =>
  str.replace(/[^a-zA-Z\d\s\_\-]/g, "")

const split = str =>
  flattenSplits(
    splitByNonAlphanumeric(str).map(splitBeforeCapitalLetter)
  )

const flattenSplits = arrayOfArray =>
  Array.prototype.concat(...arrayOfArray)

const splitByNonAlphanumeric = str =>
  str.split(/[^a-zA-Z\d]/g)

const splitBeforeCapitalLetter = str =>
  str.replace(/([a-z])([A-Z][a-z])/g, "$1 $2").split(" ")

const lowercase = arrayOfWords =>
  arrayOfWords.map(s => s.toLowerCase())

const capitalize = arrayOfWords =>
  arrayOfWords.map(capitalizeWord)

const capitalizeWord = str =>
  str.replace(/\b./, firstChar => firstChar.toUpperCase())

const uncapitalizeWord = str =>
  str.replace(/\b./, firstChar => firstChar.toLowerCase())

const join = arrayOfWords =>
  arrayOfWords.join("")
