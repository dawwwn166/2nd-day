// App.js
import React from 'react';
import Button from './component/button';
import Greeting from './component/greeting';
import Counter from './component/counter';

function App() {
  return (
    <div className="app">
      <Greeting />
      <Button />
      <Counter />
    </div>
  );
}

export default App;