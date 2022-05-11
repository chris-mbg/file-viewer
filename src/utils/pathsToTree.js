const checkExistingPath = (array, key, value) => {
  let indexOfValue = -1

  array.forEach((item, index) => {
    if (item[key] === value) {
      indexOfValue = index
    }
  })

  return indexOfValue > -1 ? array[indexOfValue] : false
}

export const pathsToTree = pathArray => {
  const tree = []

  pathArray.forEach(fullPath => {
    const parts = fullPath.split("/")
    let currentLevel = tree

    parts.forEach(part => {
      const pathExists = checkExistingPath(currentLevel, "name", part)

      if (pathExists) {
        currentLevel = pathExists.children
      } else {
        const newPart = {
          name: part,
          isFile: part.includes("."),
          children: []
        }
        currentLevel.push(newPart)
        currentLevel = newPart.children
      }
    })
  })

  return tree
}
