import React, { useState, useEffect } from 'react'
import { Alert } from '../Alert/Alert'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { TextField } from '../TextField/TextField'
import './form.css'

export const Form = () => {
  const [name, setName] = useState('')
  const [isNameError, setNameError] = useState(false)
  const [isNameCorrect, setNameCorrect] = useState(false)

  const [phone, setPhone] = useState('')
  const [isPhoneError, setPhoneError] = useState(false)
  const [isPhoneCorrect, setPhoneCorrect] = useState(false)
  
  const [messages, setMessages] = useState('')
  const [isMessagesError, setMessagesError] = useState(false)
  const [isMessagesCorrect, setMessagesCorrect] = useState(false)

  const [isAlertOpen, setAlertOpen] = useState(false)

  const sendForm = () => {

    if(phone[0] === '7' || phone[0] === '8' && phone.length === 11){
      setPhoneError(false)
      setPhoneCorrect(true)
    } else {
      setPhoneError(true)
      setPhoneCorrect(false)
    }

    if(name.trim() === '') {
      setNameError(true)
      setNameCorrect(false)
    } else {
      setNameError(false)
      setNameCorrect(true)
    }
    
    if(messages.trim() === '') {
      setMessagesError(true)
      setMessagesCorrect(false)
    } else {
      setMessagesError(false)
      setMessagesCorrect(true)
    }

    if(isNameCorrect && isPhoneCorrect && isMessagesCorrect) {
      let validationPhone = phone.split('').map((x,i)=>i==0 ? '+7' : x).join('')

      const myData = {
        name,
        phone:validationPhone,
        messages
      }

      const fileName = "anyName"
      const json = JSON.stringify(myData, null, 2)
      const blob = new Blob([json], { type: "application/json" })
      const href = URL.createObjectURL(blob)

      const link = document.createElement("a")
      link.href = href
      link.download = fileName + ".json"
      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link)
      URL.revokeObjectURL(href)

      setAlertOpen(true)
      setName('')
      setPhone('')
      setMessages('')

    }
  }

  useEffect(()=>{
    if(phone[0] === '7' || phone[0] === '8' && phone.length === 11){
      setPhoneCorrect(true)
    } else {
      setPhoneCorrect(false)
    }
  },[phone])

  useEffect(()=>{
    if(name.trim() === '') {
      setNameCorrect(false)
    } else {
      setNameCorrect(true)
    }
  },[name])

  useEffect(()=>{
    if(messages.trim() === '') {
      setMessagesCorrect(false)
    } else {
      setMessagesCorrect(true)
    }
  },[messages])
  
  return (
    <>
      <form className='form' onSubmit={e=>e.preventDefault()}>
        <p className='form__title'>Форма обратной связи</p>
        <Input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          autoFocus
          placeholder='Введите Имя'
          isError={isNameError}
          required
          helperText='Не используйте спец. символы'
          errorText=''
          correctText={isNameCorrect}
        />
        <Input
          value={phone}
          onChange={(e)=>setPhone(e.target.value.replace(/\D/g, ''))}
          placeholder='Введите номер телефона'
          type='tel'
          isError={isPhoneError}
          helperText='79999999999'
          required
          errorText='Номер должен быть 79999999999'
          maxLength={11}
          correctText={isPhoneCorrect}
        />
        <TextField
          value={messages}
          onChange={(e)=>setMessages(e.target.value)}
          placeholder='Введите сообщение'
          required
          isError={isMessagesError}
          helperText='Не используйте спец. символы'
          errorText=''
          correctText={isMessagesCorrect}
        />
        <Button onClick={sendForm}>
          Отправить форму
        </Button>
      </form>
      {isAlertOpen && <Alert text='Форма успешно отправилась!' onClose={()=>setAlertOpen(false)} />}
    </>
  )
}