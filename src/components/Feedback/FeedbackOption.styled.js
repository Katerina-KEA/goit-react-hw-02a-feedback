import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  margin-bottom: 20px;
  gap: 25px;
  list-style: none;
`;
export const FeedbackBtn = styled.button`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 0.7em 1.7em;
  font-size: 15px;
  border-radius: 0.5em;
  background: ${props => props.color};
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  &:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
  }
`;