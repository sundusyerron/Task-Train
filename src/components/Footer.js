import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00003B;
  height: 80px;
  color: #fff;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
    </FooterContainer>
  );
};

export default Footer;
