import { useState } from "react";
import styled from "styled-components";
import FormInput from "../../../../css-components/src/components/form-input/FormInput";
import { Button } from "../../../../css-components/src/components/UI/Button/Button";


export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(null);

  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChangeHandler = (event) => {
    const value = event.target.value;
    if (value.charAt(0) !== "-") {
      setPrice(value);
    }
  };

  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const saveHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title,
      date,
      price,
    };

    props.onNewExpenseAdd(expenseDate);
    setDate("");
    setPrice("");
    setTitle("");
  };
  return (
    <form className="form">
      <StyledChild>
        <FormInput
          labelName="Название"
          id="name"
          inputType="text"
          placeholder="Введите..."
          value={title}
          onChange={titleInputChangeHandler}
        />

        <FormInput
          labelName="Количество денег"
          id="price"
          inputType="number"
          placeholder="Введите..."
          value={price}
          onChange={priceInputChangeHandler}
        />
      </StyledChild>
      <div className="child2">
        <FormInput
          labelName="Датa"
          id="date"
          inputType="date"
          placeholder="дд.мм.ггг"
          value={date}
          onChange={dateInputChangeHandler}
        />
      </div>

      <StyledBtn>
        <div className="cancel">
          <Button title="Отмена" onClick={cancelHandler} />
        </div>
        <Button title="Сохранить" onClick={saveHandler} />
      </StyledBtn>
    </form>
  );
};
 const StyledChild = styled.div`
   display: flex;
 `;

const StyledBtn = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: end;
`;


// const StyledChildInput = styled.div`
//   height: 30px;
//   width: 25vw;
//   border-radius: 10px;
//   border: none;
// `;

// const StyledChildInput2 = styled.div`
//   height: 30px;
//   width: 25vw;
//   border-radius: 10px;
//   border: none;
// `;
