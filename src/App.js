import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Title = styled.h1`
  color: #838383;
`;

const Card = styled.div`
  width: 300px;
  height: 450px;
  background-color: white;
  border-radius: 20px;
`;

const Top = styled.div`
  background-color: #838383;
  color: white;
`;

const Bottom = styled.div`
  color: #838383;
  background-color: white;
`;

// inspo - https://www.uplabs.com/posts/minimal-weather-app-8bea15b9-540a-4667-a584-053897e2f7ca

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>Weather App</Title>
      </header>
      <div>
        <Card>
          <Top />
          <Bottom>
          <p>Temperature</p>
          <p>City</p>
          <p>Date & Time </p>
          </Bottom>
        </Card>
      </div>
    </div>
  );
}

export default App;
