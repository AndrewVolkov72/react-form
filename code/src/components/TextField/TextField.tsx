import React, { FC } from 'react'
import { ITextField } from './interface'
import './textfield.css'

export const TextField:FC<ITextField> = (props) => {
  const {
    value,
    onChange,
    autoFocus = false,
    placeholder,
    required = false,
    helperText = '',
    errorText = '',
    isError = false,
    correctText = false
  } = props

  const errorClass = isError ? 'error' : ''

  return (
    <div>
      {required && <p className='input__required'><span className='required'>*</span> обязательное поле</p>}
      <textarea
        className={`textfield ${errorClass}`}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        placeholder={placeholder}
        required={required}
      />
      {isError &&
        <p className='input__error'>{errorText === '' ? 'Заполните поле' : errorText}</p>
      }
      <div className="input-other">
        {!isError && helperText && <p className='input__helper'>{helperText}</p>}
        {!isError && correctText && <p className='input__correct'>Поле заполнено верно</p>}
      </div>
    </div>
  )
}