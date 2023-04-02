import React from 'react';
import styled from 'styled-components';
import todoListImage from '../assets/todo-list-svgrepo-com.svg';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #00003B;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;

const Button = styled.button`
  border: none;
  background-color: #BC8F8F;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #FA8072;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
  background-color: #F2EAF2;
`;

const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin-right: 2rem;
  background-color: #ecdfec;

`;

const CardTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  width: 100%;
`;

const FormButton = styled(Button)`
  width: 100%;
`;

const ScreenshotCard = styled.div`
  background-color: #ecdfec;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  width: 400px;
  height: 400px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ScreenshotImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LandingPage = () => {
  return (
    <div>
      <Navbar>
        <Logo>TaskTrain</Logo>
        <div>
          <Button>Sign Up</Button>
          <Button>Log In</Button>
        </div>
      </Navbar>
      <MainContainer>
        <LoginCard>
          <CardTitle>Log In</CardTitle>
          <FormInput type="text" placeholder="Email" />
          <FormInput type="password" placeholder="Password" />
          <FormButton>Log In</FormButton>
        </LoginCard>
        <ScreenshotCard>
        <ScreenshotImage src={todoListImage} alt="Todo List" />
        </ScreenshotCard>
      </MainContainer>
    </div>
  );
};

export default LandingPage;
