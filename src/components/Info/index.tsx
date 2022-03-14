import { FC } from "react";
import styled from "styled-components";
import Button from "../Button";
import Loader from "../Loader";

interface InfoProps {
  error: boolean;
  loading: boolean;
  handleAgain: () => void
}
 
const Info: FC<InfoProps> = ({ error, loading, handleAgain }) => {
  return (
    <InfoWrapper>
      {!loading ? <Button handleClick={handleAgain} /> : <Loader />}
      {error && <ErrorInfo>Something went wrong. Click the button again.</ErrorInfo>}
    </InfoWrapper>
  )
    
}
 
export default Info;

// styled-components
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorInfo = styled.div`
  color: #f00;
`;