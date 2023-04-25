import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Header = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext)

  return (
    <header className="Header">
      <nav className="Nav">
        <h1 className="Logo">My App</h1>
        <button className="Button" onClick={toggleTheme}>
          {theme === 'ligth' ? 'dark' : 'ligth'} Mode
        </button>
      </nav>
    </header>
  )
}

export default Header
