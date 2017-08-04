export default function emptyArray (size) {
  return Array.apply(null, Array(size)).map(() => {})
}
