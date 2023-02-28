import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  display: flex;
  margin-right: 15px;
  text-decoration: none;
  color: red;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  background-color: #4b5a20;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: #dba40e;
  }

  &.active {
    background-color: red;
  }
`;

function NavigationBar() {
  return (
    <nav>
      <Ul>
        <Li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/Blogs">Blogs</StyledNavLink>
        </Li>
      </Ul>
    </nav>
  );
}

export default NavigationBar;
