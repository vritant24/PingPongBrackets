import React, { Component } from 'react';
import Bracket from './components/Bracket'
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        <Title> Ping Pong Tournament Elimination Round</Title>
        <Bracket/>
      </div>
    );
  }
}

const Title = styled.h1`
  text-align: center;
  color: #f2df51ff;
  font-weight: 400;
  padding: 0 5px;
`;
export default App;
