
import styled from "styled-components";


const ExpensesFilter = ({ value, onChange }) => {
  return (
    <StyledExpenseFilter>
      <StyledExpenseFilterControl>
        <StyledLabel>Filter by year</StyledLabel>
        <StyledSelect value={value} onChange={onChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </StyledSelect>
      </StyledExpenseFilterControl>
    </StyledExpenseFilter>
  );
};

export default ExpensesFilter;

const StyledExpenseFilter = styled.div`
  color: white;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

const StyledExpenseFilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const StyledLabel = styled.label`
  font-size: 22px;
  padding: 10px;
`;

const StyledSelect = styled.select`
  width: 100px;
  height: 36px;
  border-radius: 7px;
  text-align: center;
  font-size: 18px;
`;