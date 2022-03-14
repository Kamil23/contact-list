import { useCallback, FC } from "react";
import styled from "styled-components";

interface CardProps {
  data: {
    id: string;
    firstNameLastName: string;
    jobTitle: string;
    emailAddress: string;
  };
  isSelected: boolean,
  onClick: (id: string) => string
}
 
const Card: FC<CardProps> = (props) => {
  const {
    data: { id, firstNameLastName, jobTitle, emailAddress },
    isSelected,
    onClick,
  } = props;

  const handleClick = useCallback(() => {
    onClick(id);
  }, [onClick, id]);

  const getInitials = (name: string) => {
    return name.split(" ").map((n)=>n[0]).join("");
  }

  return ( 
    <CardWrapper className={isSelected ? "selected" : ""} onClick={handleClick}>
      <TopWrapper>
        <Initials>{getInitials(firstNameLastName)}</Initials>
        <NamePositionWrapper>
          <Name>{firstNameLastName}</Name>
          <Position>{jobTitle}</Position>
        </NamePositionWrapper>
      </TopWrapper>
      <BottomWrapper>
        <EmailInfo>{emailAddress}</EmailInfo>
      </BottomWrapper>
  </CardWrapper>
  );
}
 
export default Card;

// styled-components
const CardWrapper = styled.div`
  margin: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 360px;
  height: 120px;
  background-color: #fff;
  box-shadow: 2px 2px 5px #0000002c;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 10px #0000002c;
  }
  &.selected {
    border: 3px solid #aa17176f;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Initials = styled.div`
    border-radius: 50%;
    border: 1px solid #000;
    font-size: 16px;
    padding: 5px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NamePositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 8px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Position = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #d13030;
  text-transform: uppercase;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmailInfo = styled.div`
  margin: 16px 8px;
  color: #777;
`;
