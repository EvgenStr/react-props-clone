import React from 'react'

function Button(props) {
  const { handler, text } = props;
  return (
    <button onClick={handler}>{text}</button>
  )
}
export default Button;