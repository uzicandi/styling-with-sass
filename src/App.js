import React from 'react';
import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">Button</Button>
        <Button size="medium">Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="grey" size="large">
          Button
        </Button>
        <Button color="grey" size="medium">
          Button
        </Button>
        <Button color="grey" size="small">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">
          Button
        </Button>
        <Button color="pink" size="medium">
          Button
        </Button>
        <Button color="pink" size="small">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button outline={true} size="large">
          Button
        </Button>
        <Button color="grey" outline={true} size="medium">
          Button
        </Button>
        <Button color="pink" outline={true} size="small">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button fullWidth size="large" fullWidth className="customized-button">
          Button
        </Button>
        <Button color="grey" fullWidth size="large">
          Button
        </Button>
        <Button
          color="pink"
          fullWidth
          size="large"
          onClick={() => {
            console.log('클릭!');
          }}
          onMouseMove={() => {
            console.log('마우스무브!');
          }}
        >
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
