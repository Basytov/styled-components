
import { ExpenseItem } from "../expense-item/ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";
import Chart from "../Chart/Chart";
import styled from "styled-components";

export const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredItems = expenses.filter((ele) => {
    const stringifiedYear = new Date(ele.date).getFullYear().toString();
    return stringifiedYear === selectedYear;
  });
  return (
    <StyledUlTag>
      <ExpensesFilter />
      <Chart expenses={filteredItems} />
      {filteredItems.map((elem) => {
        return (
          <ExpenseItem title={elem.title} price={elem.price} date={elem.date} />
        );
      })}
    </StyledUlTag>
  );
};

const StyledUlTag = styled.ul`
border-radius: 13px;
background-color: black;
     padding: 20px;
        border: 2px solid ;
     
`