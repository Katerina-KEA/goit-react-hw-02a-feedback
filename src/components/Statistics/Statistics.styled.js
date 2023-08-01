import styled from 'styled-components';

export const StatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
`;

export const StatItem = styled.p`
  font-size: 20px;
  align-items: center;
  color: ${props => props.color};
`;

export const StatValue = styled.span`
  /* font-size: bold; */
`;
