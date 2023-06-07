import React from 'react';
import styled from 'styled-components';
import Calculator from '../components/calculator';

export default function Calculate() {
  return (
    <Div>
      <h3>Lets Do some Maths!</h3>
      <Calculator />
    </Div>
  );
}

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 5rem;
gap: 1rem;
color: 031926;
`;
