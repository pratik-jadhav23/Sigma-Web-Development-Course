import React, {useContext} from 'react'
import { counterContext } from '../context/context'

const Component2 = () => {
    const value = useContext(counterContext)
  return (
    <div>
      This is Component2 {value.count}
    </div>
  )
}

export default Component2
