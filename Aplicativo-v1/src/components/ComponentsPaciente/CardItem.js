import React from 'react';
import styled from 'styled-components/native';

const CardContainer = styled.View`
  background-color: #e3f2fd;
  padding: 16px;
  margin: 12px 20px;
  border-radius: 10px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000; /* Preto para melhor legibilidade */
`;

const Description = styled.Text`
  font-size: 16px;
  color: #000;
  margin-top: 6px;
`;

export default function CardItem({ title, description }) {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
}

