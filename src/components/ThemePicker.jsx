import { useThemeContext } from "../contexts/ThemeContext"

function ThemePicker() {
  const { availableThemes, theme, changeTheme } = useThemeContext()

  return (
    <div className="mx-auto my-8 sm:w-3/5">
      <h2 className="mb-4 text-center">Visualisation mode</h2>
      <div className="flex justify-center space-x-12">
        {availableThemes.map(value => (
          <div className="flex items-center mb-4 space-x-4" key={value}>
            <input
              type="radio"
              id={value}
              name="theme"
              value={value}
              defaultChecked={theme === value}
              className="w-6 h-6 cursor-pointer accent-golden"
              onChange={e => changeTheme(e.target.value)}
            />

            <label htmlFor={value} className="capitalize">
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThemePicker
