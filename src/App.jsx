import './App.css'

import { Header, Input } from './components'
import { useThemeContext } from './context/ThemeContext'


function App() {

    const { theme } = useThemeContext()
 

  return (
    <div className={`App ${theme === 'dark' ? "dark-theme": ""}`}>
      <Header />
     
    </div>
  )
}

export default App
