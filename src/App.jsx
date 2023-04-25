import { useState } from 'react'
import { ThemeContext } from './components/ThemeContext'
import Header from './components/Header'
import MainContent from './components/MainContent'
import './App.css'

function App() {
  const [theme, setTheme] = useState('ligth')

  const toggleTheme = () => {
    setTheme(theme === 'ligth' ? 'dark' : 'ligth')
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App ${theme === 'ligth' ? 'App--ligth' : 'App--dark'}`}>
        <Header toggleTheme={toggleTheme} />
        <MainContent />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
