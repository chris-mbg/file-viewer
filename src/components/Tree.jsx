import { sortByName } from "../utils/sortbyName"
import File from "./File"
import Folder from "./Folder"

function Tree({ fileStructure }) {
  fileStructure.sort(sortByName)

  return fileStructure.map((item, index) => {
    return item.isFile ? (
      <File name={item.name} key={`${item.name}-${index}`} />
    ) : (
      <Folder name={item.name} key={`${item.name}-${index}`}>
        <Tree fileStructure={item.children} />
      </Folder>
    )
  })
}

export default Tree
