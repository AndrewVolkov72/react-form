import React, { FC, useEffect } from 'react'
import './alert.css'
import { IAlert } from './interface'

export const Alert:FC<IAlert> = (props) => {
  const {
    onClose,
    text,
    autoHideDirection = 1500
  } = props

  useEffect(()=>{
    const timer = setTimeout(() => {
      onClose()
    }, autoHideDirection)

    return () => clearTimeout(timer)
  },[])

  return (
    <div className='alert'>
      {text}
    </div>
  )
}