import React, {useContext} from 'react'
import Component2 from './Component2'
import { counterContext } from '../context/context'

const Button = () => {
    const value = useContext(counterContext)
    console.log(value)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Component2/></span> This is button click here</button>
    </div>
  )
}

export default Button
