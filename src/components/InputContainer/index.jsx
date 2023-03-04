import './style.css'

import { useThemeContext } from '../../context/ThemeContext'

const Input = () => {

  const { theme } = useThemeContext()

  const bgColor = { backgroundColor: theme === 'dark'? 'hsl(235, 24%, 19%)' : '#fff'}
  


  return (
    <div className='input-container' >
      <div className='input-wrapper' style={bgColor}>
        <span className='circle'></span>
        <input className='input' style={bgColor} type="text" placeholder='Create a new todo...'></input>
      </div>
    </div>
  )
}

export default Input