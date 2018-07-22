import React from 'react';
import GameScore from './GameScore';
import games from '../tally';
import styled from 'styled-components';

export default function(props) {
    const gameComponents = games.map((elem) => 
        <GameScore o={elem}/>
    );
    return (
        <Bracket>
            {gameComponents}
        </Bracket>
    )
}

const Bracket = styled.div`
    width: 400px;
    margin: 0 auto;
`;