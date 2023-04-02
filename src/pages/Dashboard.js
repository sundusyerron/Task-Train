import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import NewTaskForm from '../components/Newtask';
import Tasklist from '../components/Tasklist';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #F2EAF2;
`;

const UpperSection = styled.div`
  background-color: #fff;
  padding: 20px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
`;

const ProfileCard = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

const NewTaskCard = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;


const Dashboard = ({ user }) => {
  return (
    <DashboardContainer>
      <UpperSection>
        <Navbar user={user} />
      </UpperSection>
      <CardsContainer>
        <ProfileCard>
          <Profile/>
        </ProfileCard>
        <NewTaskCard>
          <h2>Add New Task</h2>
          <NewTaskForm />
        </NewTaskCard>
        <ProjectCard>
          <h2>Projects</h2>
          

        </ProjectCard>
      </CardsContainer>
      <Footer />
    </DashboardContainer>
  );
};

export default Dashboard;
