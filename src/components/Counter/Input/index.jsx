import React from 'react';

function Input({ handler, value }) {
  return (
    <div>
      <input type="number" value={value} onChange={(e) => { handler(e) }} />
    </div>
  );
};
export default Input;