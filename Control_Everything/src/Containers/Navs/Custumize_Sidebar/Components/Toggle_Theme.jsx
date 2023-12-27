import React from 'react'
import { ThemeState } from '../../../../Contexts/Theme_Context'

const Toggle_Theme = () => {

  const { 
    mode,
    handleDarkMode,
    handleLightMode,
    handleAutoMode
  } = ThemeState()

  return (
    <div className='Toggle_Theme'>
      <div className='Text'>
        <h1>Color Scheme</h1>
        <span>Choose the perfect color mode for your app.</span>
      </div> 
      <div className='Type_Of_Modes'>
        <div className={`Dark ${mode === 'dark' ? 'GreenBoxShadow' : ''}`} onClick={handleDarkMode}> 
          <span>Dark Mode</span>
        </div>
        <div className={`Ligth ${mode === 'light' ? 'GreenBoxShadow' : ''}`} onClick={handleLightMode}>
          <span>Light Mode</span>
        </div>
        <div className={`Auto ${mode === 'auto' ? 'GreenBoxShadow' : ''}`} onClick={handleAutoMode}>
          <span>Auto Mode</span>
        </div>
      </div>
    </div>
  )
}

export default Toggle_Theme;