import React from "react";
import styled from "styled-components";

const TaskCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0 0 8px;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 0 0 16px;
`;

const TimeCreated = styled.p`
  font-size: 12px;
  margin: 0 0 8px;
  color: #999;
`;

const Button = styled.button`
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
`;

const EditButton = styled(Button)`
  background-color: #4caf50;
  margin-right: 8px;
`;

const DeleteButton = styled(Button)`
  background-color: #f44336;
`;

const TaskList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <TaskCard key={project.id}>
          <Title>{project.title}</Title>
          <Description>{project.description}</Description>
          <TimeCreated>Created on {project.timecreated}</TimeCreated>
          <EditButton>Edit</EditButton>
          <DeleteButton>Delete</DeleteButton>
        </TaskCard>
      ))}
    </div>
  );
};

export default TaskList;


 