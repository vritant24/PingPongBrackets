import React from 'react';
import styled, {css} from 'styled-components';

export default function PersonScore(props) {
    console.log(props.color);
    return(
        <Person color={props.color} done={props.done}>
            <Name>
                {props.name}
            </Name>
            <Sets>
                <Score>{props.set1}</Score>
                <Score>{props.set2}</Score>
                <Score>{props.set3}</Score>
            </Sets>
        </Person>
    );
}

const Person = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.color};
    opacity: ${props=> props.done ? 1 : 0.5};

    width: 500px;

    @media only screen and (max-width: 600px) {
        width: 300px;
    }
`;

const Name = styled.div`
    color: #eee;
    background: #222;
   
    width: 40%;
    height: 40px;

    margin: 10px 0;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 10px;

    font-size: 1.3rem;
`;

const Sets = styled.div`
    color: #222;
    
    width: 45%;
    height: 40px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 10px;
`;

const Score = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    height: 40px;

    font-size: 1.3rem;

    background: #222;
    color: #eee;

    height: 100%;
    padding: 5px 10px;
`;