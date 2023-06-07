import React from 'react';
import styled from 'styled-components';

export default function Home() {
  return (
    <Div>
      <div className="container">
        <h1>Welcome to our page</h1>
        <p>
          Welcome to Math Magician, where math becomes magical! Our website is dedicated to
          helping children and students of all ages improve their arithmetic skills and
          develop a love for mathematics.
          Math Magician is a fun and educational game that challenges players to solve a
          series of math problems in a race against the clock. With three difficulty
          levels to choose from, players can practice their basic addition, subtraction,
          multiplication,
          and division skills while having fun and competing with their friends.But Math
          Magician is more
          than just a game. Its a powerful tool for improving your math skills and building
          your confidence in mathematics. By practicing your arithmetic skills regularly,
          you will be able
          to solve more complex math problems with ease and tackle new challenges with confidence.
        </p>

        <p>
          Welcome to Math Magician, where math becomes magical! Our website is dedicated to
          helping children and students of all ages improve their arithmetic skills and
          develop a love for mathematics.
          Math Magician is a fun and educational game that challenges players to solve a
          series of math problems in a race against the clock. With three difficulty
          levels to choose from, players can practice their basic addition, subtraction,
          multiplication,
          and division skills while having fun and competing with their friends.But Math
          Magician is more
          than just a game. Its a powerful tool for improving your math skills and building
          your confidence in mathematics. By practicing your arithmetic skills regularly,
          you will be able
          to solve more complex math problems with ease and tackle new challenges with confidence.
        </p>
      </div>
    </Div>
  );
}

const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2rem;
color: #031926;
.container{
 width: 65%;
}
`;
