import { useMemo } from "react"
import classNames from "classnames"
import paths from "./data/paths.json"
import { pathsToTree } from "./utils/pathsToTree"
import Tree from "./components/Tree"
import ThemePicker from "./components/ThemePicker"
import { useThemeContext } from "./contexts/ThemeContext"

function App() {
  const treeStructure = useMemo(() => pathsToTree(paths))

  const { theme } = useThemeContext()

  const treeWrapper = classNames({
    "border-l pl-8": theme === "tree"
  })

  return (
    <div className="min-h-screen font-mono text-light bg-onyx">
      <main className="container p-12 mx-auto lg:p-24">
        <h1 className="mb-8 text-xl font-semibold text-center uppercase text-golden">
          File Viewer
        </h1>
        <ThemePicker />
        <div className="mx-auto md:w-4/5 lg:w-3/5">
          {theme === "tree" && <span className="-ml-4">root</span>}
          <div className={treeWrapper}>
            <Tree fileStructure={treeStructure} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
