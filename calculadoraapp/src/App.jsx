import React from 'react'
import "./App.css"


import ButtonC from './ButtonC'


function App() {



  return(
    <>
      <h1>Calculadora-App</h1>
      <div className='row'>
      <div className='col-12'>
        <input type="text" placeholder='Resultados' className='for-control'/>
      </div>

      <div className='col-12'>
        <input type="text" placeholder='0' className='for-control'/>
      </div>

      </div>
      <div className='row'>
      <div className='col-3'><ButtonC text='C' color='danger'/></div>
      <div className='col-3'><ButtonC text='Mod'/></div>
      <div className='col-3'><ButtonC text='Pot'/></div>
      <div className='col-3'><ButtonC text='/'/></div>
      </div>
      <div className='row'>
      <div className='col-3'><ButtonC text='7'/></div>
      <div className='col-3'><ButtonC text='8'/></div>
      <div className='col-3'><ButtonC text='9'/></div>
      <div className='col-3'><ButtonC text='*'/></div>
      </div>
      <div className='row'>
      <div className='col-3'><ButtonC text='4'/></div>
      <div className='col-3'><ButtonC text='5'/></div>
      <div className='col-3'><ButtonC text='6'/></div>
      <div className='col-3'><ButtonC text='-'/></div>
      </div>
      <div className='row'>
      <div className='col-3'><ButtonC text='1'/></div>
      <div className='col-3'><ButtonC text='2'/></div>
      <div className='col-3'><ButtonC text='3'/></div>
      <div className='col-3'><ButtonC text='+'/></div>
      </div>
      <div className='row'>
      <div className='col-3 '><ButtonC text='0'/></div>
      <div className='col-3'><ButtonC text='.'/></div>
      <div className='col-6'><ButtonC text='=' color='success'/></div>
      </div>
    </>
  )
}

export default App