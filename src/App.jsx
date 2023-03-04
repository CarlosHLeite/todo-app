import './App.css'

import { Header, InputContainer } from './components'
import TodoItem from './components/todoItem'
import { useThemeContext } from './context/ThemeContext'


function App() {

    const { theme } = useThemeContext()
 

  return (
    <div className={`App ${theme === 'dark' ? "dark-theme": ""}`}>
      <Header />
      <InputContainer/>

      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default App
