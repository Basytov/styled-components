
import { Button } from "../UI/Button/Button";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import { useState } from "react";
import styled from "styled-components";

export const NewExpense = ({ onNewExpenseAdd }) => {
  const [showForm, setShowForm] = useState(false);

  const showExpenseForm = () => {
    setShowForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <StyledDiv>
      {showForm ? (
        <ExpenseForm
          onShowForm={showExpenseForm}
          onNewExpenseAdd={onNewExpenseAdd}
        />
      ) : (
        <Button title="Добавить новый расход" onClick={showExpenseForm} />
      )}
    </StyledDiv>
  );
};


const StyledDiv = styled.div`
  background-color: rgb(108, 85, 151);
  border: 2px solid;
border-radius: 18px;
  padding: 5px;
`;