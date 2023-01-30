import React from "react";
// import "./Button.css";
import styled from "styled-components";


export const Button = (props) => {
  return (
    <StyledButton>
      <StyledBtn onClick={props.onClick}>
        {props.title}
      </StyledBtn>
    </StyledButton>
  );
};

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledBtn = styled.button`
  font-size: 16px;
  width: 250px;
  height: 50px;
  border: none;
  background-color: rgb(68, 34, 100);
  color: white;
  padding: 10px 20px;
  border-radius: 12px;
`;