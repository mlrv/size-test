import { filterMap } from "fp-ts/Array"
import { some } from "fp-ts/Option"

const a = filterMap(
  (x: number) => some(x+ 1)
)([1, 2, 3])

console.log(a)