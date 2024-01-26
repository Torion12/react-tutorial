// App.js
import './App.css';
import Button from './button';
import React from 'react';
import useNumber from './state';
import Title from './title';

function App() {
  const { increase, number, decrease, colorchange, text, setZero, hideShow, hide } = useNumber();

  return (
    <div className="App">
      <Button color="green" onClick={increase} title="Increase" />
      <Button color="red" onClick={decrease} title="Decrease" />
      <Button color="#fff" onClick={colorchange} title="change Color" />
      <Button color="#000" onClick={setZero} title="Set zero" />
      <Button color="yellow" onClick={hideShow} title="Hide / show" />
      {hide && <Title text={text} number={number} />}
    </div>
  );
}

export default App;
