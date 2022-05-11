import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderClosed, faFolderOpen } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useThemeContext } from "../contexts/ThemeContext"
import classNames from "classnames"

function Folder({ name, children }) {
  const { theme } = useThemeContext()
  const [isOpen, setIsOpen] = useState(false)

  const childrenWrapper = classNames("pl-8 space-y-2", {
    "border-l": theme === "tree"
  })

  return (
    <div>
      <div className="flex items-end mt-2">
        {theme === "tree" && <hr className="w-8 mb-2 mr-1 -ml-8 border-b"></hr>}
        <span
          className="cursor-pointer"
          onClick={() => {
            if (theme === "explorer") {
              setIsOpen(prevVal => !prevVal)
            }
          }}>
          {" "}
          {theme === "explorer" && (
            <FontAwesomeIcon icon={isOpen ? faFolderOpen : faFolderClosed} />
          )}{" "}
          {name}
        </span>
      </div>
      {theme === "explorer" ? (
        isOpen && <div className={childrenWrapper}>{children}</div>
      ) : (
        <div className={childrenWrapper}>{children}</div>
      )}
    </div>
  )
}

export default Folder
