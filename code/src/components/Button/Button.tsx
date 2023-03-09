import React, {FC} from 'react'
import { IButton } from './interface'
import './button.css'

export const Button:FC<IButton> = (props) => {
  const {onClick, children} = props

  return (
    <button className='btn' onClick={onClick}>
      {children}
    </button>
  )
}