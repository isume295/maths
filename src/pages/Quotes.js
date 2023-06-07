import React from 'react';
import styled from 'styled-components';
import Quote from '../components/quote';

export default function Quotes() {
  return (
    <Div>
      <div className="quote-container">
        <Quote />
      </div>
    </Div>
  );
}

const Div = styled.div`
width: 100%;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
color: #031926;
.quote-container{
    width: 60%;
    text-align: center;
}
`;
