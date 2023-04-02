import React from 'react';
import styled from 'styled-components';
import Avatar from '../assets/Avatar.svg'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const AvatarImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Label = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

const Profile = ({ name, username, email }) => {
  return (
    <Card>
      <Label>Profile</Label>
      <AvatarImg src={Avatar} alt="Avatar" />     
      <Label>Username:</Label>
      <p>{username}</p>
      <Label>Email:</Label>
      <p>{email}</p>
    </Card>
  );
};

export default Profile;
