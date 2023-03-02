import './header.css'

import { useThemeContext } from '../../context/ThemeContext'

import imgLight from '../../assets/background-light.jpg'
import imgDark from '../../assets/background-dark.jpg'

const Header = () => {

    const { theme, toggleTheme } = useThemeContext()



  return (
    <header className='header' style={{backgroundImage: `url(${theme === 'dark' ? imgDark : imgLight })`}}>
        <div className="header-container">
          <h1>TODO</h1>
          <button onClick={toggleTheme}>Click</button>
        </div>
    </header>
  )
}

export default Header