import React from 'react';
import Button from '../Button';
import Input from '../Input';

function AutoControls({ handler, text, setFrequency, frequency }) {
  const minFrequency = 1;
  const maxFrequency = 100;

  const setFrequencyToParent = ({ target: { value } }) => {
    if (+value < minFrequency || +value > maxFrequency) return;
    setFrequency(+value);
  };
  
  return (
    <div>
      <span>Set frequency from {minFrequency} to {maxFrequency}</span>
      <Input value={frequency} handler={setFrequencyToParent} />
      <Button handler={handler} text={text} />
    </div>
  );
};
export default AutoControls;