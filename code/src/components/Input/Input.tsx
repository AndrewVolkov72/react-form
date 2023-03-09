import React, {FC} from 'react'
import { IInput } from './interface'
import './input.css'

export const Input:FC<IInput> = (props) => {
  const {
    value,
     onChange,
    placeholder,
    autoFocus = false,
    type = 'text',
    pattern,
    errorText = '',
    helperText = '',
    isError,
    required = false,
    maxLength,
    correctText = false
  } = props

  const errorClass = isError ? 'error' : ''

  return (
    <div>
      {required && <p className='input__required'><span className='required'>*</span> обязательное поле</p>}
      <input
        className={`input ${errorClass}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        type={type}
        pattern={pattern}
        required={required}
        maxLength={maxLength}
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