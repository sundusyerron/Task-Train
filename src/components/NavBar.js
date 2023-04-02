import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  height: 80px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.h1`
  color: #fff;
  margin: 0;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;


const Navbar = ({ user }) => {
  const renderAvatar = () => {
    if (user && user.avatar) {
      return <Avatar src={user.avatar} alt={`${user.name}'s avatar`} />;
    }
    return null;
  };

  return (
    <Nav>
      <Logo>TaskTrain</Logo>
      {renderAvatar()}
    </Nav>
  );
};

export default Navbar;
