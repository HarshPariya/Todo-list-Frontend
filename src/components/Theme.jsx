import React, { useState } from 'react'

const Theme = () => {
  const [theme, setTheme] = useState('dark');

  const toggleB = () => {
    if(theme == 'light') {
        setTheme('dark')
        document.body.style.background.remove = "Black";
        document.body.style.background.add = "White";
    } else {
        setTheme('light')
        document.body.style.background.remove = "White";
        document.body.style.background.add = "Black";
    }
  }
  return (
    <div>
      <button onClick={() => toggleB}>Theme</button>
    </div>
  )
}

export default Theme