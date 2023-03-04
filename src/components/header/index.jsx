import './header.css'

import { useThemeContext } from '../../context/ThemeContext'

import imgLight from '../../assets/bg-desktop-light.jpg'
import imgDark from '../../assets/bg-desktop-dark.jpg'

import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

const Header = () => {

    const { theme, toggleTheme } = useThemeContext()



  return (
    <header className='header' style={{backgroundImage: `url(${theme === 'dark' ? imgDark : imgLight })`}}>
        <div className="header-container">
          <h1>TODO</h1>
          <button className='btn' onClick={toggleTheme}>{ theme === "light" ? <BsSunFill color='#fff' size='1.6rem'/> : <BsFillMoonFill color='#fff' size='1.6rem'/>}</button>
        </div>
    </header>
  )
}

export default Header