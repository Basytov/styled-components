
import styled from "styled-components";


export const ExpenseItem = ({ date, title, price }) => {
  return (
    <StyledItem>
      <StyledItem2>
        <p>{date.toString()}</p>
      </StyledItem2>
      <StyledItem3>
        <StyledTagP>{title}</StyledTagP>
        <StyledTagP>{price}</StyledTagP>
      </StyledItem3>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  border: 1px solid;
  border-radius: 12px;
  border: none;
  padding: 7px;
  background-color: rgb(59, 58, 58);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledItem2 = styled.div`
  border: 1px solid;
  width: 170px;
  height: 110px;
  text-align: center;
  border-radius: 10px;
  background-color: rgb(36, 35, 35);
`;

const StyledItem3 = styled.div`
  display: flex;
  gap: 20rem;
`;

const StyledTagP = styled.p`
  margin-right: 5rem;
  border: 1px solid violet;
  width: 90px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  background-color: rgb(48, 22, 71);
`;