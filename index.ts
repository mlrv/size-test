import { filterMap, makeBy } from "fp-ts/Array"
import { some } from "fp-ts/Option"

const a = filterMap(
  (x: number) => some(x+ 1)
)([1, 2, 3])

const b = makeBy(10, _ => 1)

console.log(a)
console.log(b)