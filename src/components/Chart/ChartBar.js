import React from "react";
import styled from "styled-components";


const Chartbar = ({ maximumPrice, currentPrice, label }) => {
  const fillHeight = (100 * currentPrice) / maximumPrice;
  return (
    <StyledChartBar>
      <StyledChartBar2>
        <StyledChartBarFill 
          style={{ height: `${fillHeight}%` }}
        ></StyledChartBarFill>
      </StyledChartBar2>
      <StyledTagP>{label}</StyledTagP>
    </StyledChartBar>
  );
};

export default Chartbar;


const StyledChartBar = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const StyledChartBar2 = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-radius: 12px;
  background-color: #a892ee;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledChartBarFill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 1s ease-out;
`;

const StyledTagP = styled.p`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
  font-size: 9px;
`;