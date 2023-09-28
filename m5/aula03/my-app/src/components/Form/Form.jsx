import React from 'react'

const Form = () => {
  return (
    <form action="" className='formulario' >
      <label htmlFor="">Nome</label>
      <input type="text" />

      <label htmlFor="">Email</label>
      <input type="text" />

      <label htmlFor="mensagem">Mensagem</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>

      <button>Enviar</button>
    </form>

  )
}

export default Form