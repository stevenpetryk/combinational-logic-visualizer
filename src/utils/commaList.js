export default function commaList (list) {
  list = [...list] // immutability

  if (list.length <= 1) {
    return list[0]
  } else if (list.length <= 2) {
    return `${list[0]} and ${list[1]}`
  } else {
    let last = list[list.length - 1]
    return `${list.splice(0, list.length - 1).join(', ')} and ${last}`
  }
}
