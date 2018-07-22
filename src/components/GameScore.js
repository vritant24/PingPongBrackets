import React from 'react';
import PersonScore from './PersonScore';
import styled from 'styled-components';

export default function GameScore(props) {
    return (
        <Game>
            <PersonScore 
                name={props.o.p1} 
                set1={props.o.s1[0]} 
                set2={props.o.s1[1]}
                set3={props.o.s1[2]}
                done={props.o.d}
                color={"#ff678fff"}
            />
            <PersonScore 
                name={props.o.p2} 
                set1={props.o.s2[0]} 
                set2={props.o.s2[1]}
                set3={props.o.s2[2]}
                done={props.o.d}
                color={"#90ff94ff"}
            />
        </Game>
    );
}

const Game = styled.div`
    margin: 15px auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;