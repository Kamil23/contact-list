import { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  handleClick: () => void
} 

const Button: FC<ButtonProps> = ({ handleClick }) => {
  return (
    <Btn onClick={handleClick}>Load more...</Btn>
  )
} 
 
export default Button;

// styled-components
const Btn = styled.button`
  margin: 16px;
  padding: 8px 16px;
  font-size: 14px;
  background: #fff;
  border: 1px solid;
  cursor: pointer;
`;