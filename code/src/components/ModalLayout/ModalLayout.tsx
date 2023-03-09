import React, { FC } from 'react'
import { IModalLayout } from './interface'
import './modal.css'

export const ModalLayout:FC<IModalLayout> = (props) => {
  const {onClose, children} = props
  
  return (
    <div className="modal" onClick={onClose}>
      <div onClick={e=>e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}