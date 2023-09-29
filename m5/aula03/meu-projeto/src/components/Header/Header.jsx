import React from 'react'

const Header = () => {
  return (
    <header className='cabecalho'>
      <img className='headerImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1245px-Logo_of_Twitter.svg.png" alt="" />
      <ul className='menu'>
        <li><a href="">Sobre</a></li>
        <li><a href="">Posts</a></li>
        <li><a href="">Minha Conta</a></li>
      </ul>
    </header>
  )
}

export default Header