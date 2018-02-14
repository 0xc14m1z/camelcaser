const string = s => 
  uncapitalizeWord(
    join(
      capitalize(
        lowercase(
          split(
            removeSymbols(s)
          )
        )
      )
    )
  )

export default string

const removeSymbols = s =>
  s.replace(/[^a-zA-Z\d\s\_\-]/g, "")

const split = s =>
  flattenSplits(
    splitByNonAlphanumeric(s).map(splitBeforeCapitalLetter)
  )

const flattenSplits = arrayOfArray =>
  Array.prototype.concat(...arrayOfArray)

const splitByNonAlphanumeric = s =>
  s.split(/[^a-zA-Z\d]/g)

const splitBeforeCapitalLetter = s =>
  s.replace(/([a-z])([A-Z][a-z])/g, "$1 $2").split(" ")

const lowercase = arrayOfWords =>
  arrayOfWords.map(s => s.toLowerCase())

const capitalize = arrayOfWords =>
  arrayOfWords.map(capitalizeWord)

const capitalizeWord = s =>
  s.replace(/\b./, firstChar => firstChar.toUpperCase())

const uncapitalizeWord = s =>
  s.replace(/\b./, firstChar => firstChar.toLowerCase())

const join = arrayOfWords =>
  arrayOfWords.join("")