import React from 'react';

function Button({ handler, text }) {
  return (
    <button onClick={handler}>{text}</button>
  );
};
export default Button;