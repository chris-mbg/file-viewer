import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import { useThemeContext } from "../contexts/ThemeContext"

function File({ name }) {
  const { theme } = useThemeContext()

  const wrapperClasses = classNames("flex items-end", {
    "relative h-8 mb-4": theme === "tree",
    "mt-2": theme === "explorer"
  })

  const fileClasses = classNames("ml-2 place-self-end top-4", {
    absolute: theme === "tree",
    "space-x-2": theme === "explorer"
  })

  return (
    <div className={wrapperClasses}>
      {theme === "tree" && <hr className="w-8 -ml-8 border-b"></hr>}
      <p className={fileClasses}>
        {theme === "explorer" && <FontAwesomeIcon icon={faFile} />}
        <span className="">{name}</span>
      </p>
    </div>
  )
}

export default File
