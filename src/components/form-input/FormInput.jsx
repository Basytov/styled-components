import styled from "styled-components";

const FormInput = ({ id, labelName, placeholder, inputType, ...rest }) => {
  return (
    <StyledFormInput>
      <StyledLabel htmlFor={id}>{labelName}</StyledLabel>
      <StyledInput
        placeholder={placeholder || "..."}
        id="id"
        type={inputType}
        {...rest}
      />
    </StyledFormInput>
  );
};

export default FormInput;


const StyledFormInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 10px;
  width: 400px;
`;

const StyledInput = styled.input`
  height: 30px;
  width: 25vw;
  border-radius: 10px;
  border: none;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
`;