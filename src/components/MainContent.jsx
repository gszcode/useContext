import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const MainContent = () => {
  const theme = useContext(ThemeContext)

  return (
    <main className="MainContent">
      <h2
        className={`Title ${
          theme === 'ligth' ? 'Title--ligth' : 'Title--dark'
        }`}
      >
        Welcome to my app!
      </h2>
      <p className={`Text ${theme === 'ligth' ? 'Text--ligth' : 'Text--dark'}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </main>
  )
}

export default MainContent
