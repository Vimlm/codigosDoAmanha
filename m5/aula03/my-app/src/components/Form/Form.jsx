import React from 'react'
import Button from '../Button/Button'

const Form = () => {
  return (
    <form action="" className='formulario' >
      <label htmlFor="">Nome</label>
      <input type="text" />

      <label htmlFor="">Email</label>
      <input type="text" />

      <label htmlFor="mensagem">Mensagem</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>

      <Button bg="tomato" texto="Enviar"/>
    </form>

  )
}

export default Form