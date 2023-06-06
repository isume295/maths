/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Nav>
      <div>
        <span>Maths Magicians</span>
      </div>
      <ul className="links">
        <li><Link className="link" to="/">home</Link></li>
        <li><Link className="link" to="/calculator">calculator</Link></li>
        <li><Link className="link" to="/quotes">quotes</Link></li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
width: 100%;
height: 56px;
background-color: #031926;
display: flex;
justify-content: space-around;
align-items: center;
color: #DBEBC0;
.links {
    display: flex;
    list-style: none;
    gap: 2rem;
    .link {
      text-decoration: none;
      color: #DBEBC0;
    }
    .link:hover{
      color: rgba(219, 235, 192,0.5);
    }
}
`;
