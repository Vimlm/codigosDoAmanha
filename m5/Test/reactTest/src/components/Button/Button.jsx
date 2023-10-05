/* eslint-disable react/prop-types */

const Button = ({text, bg}) => {
  return (
    <>
      <button style={{background: bg}}>{text}</button>
    </>
  )
}

export default Button
