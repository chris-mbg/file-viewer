export const sortByName = (a, b) => {
  if (a.name > b.name) {
    return 1
  }
  if (a.name < b.name && !a.isFile) {
    return -1
  }
  return 0
}
