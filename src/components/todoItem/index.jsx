import './style.css'

import { useThemeContext } from '../../context/ThemeContext'



 
const TodoItem = () => {

    const { theme } = useThemeContext()

    const bgColor = { backgroundColor: theme === 'dark'? 'hsl(235, 24%, 19%)' : '#fff'}

  return (
    <div className='item-container' >
      <div className='item-wrapper' style={bgColor}>
        <button className='done-btn'>ok</button>
        <div className="text-output">Helloooo</div>
        <button className='delete-btn'>X</button>
      </div>
    </div>
  )
}

export default TodoItem;