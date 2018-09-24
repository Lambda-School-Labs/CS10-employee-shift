import styled from "styled-components";
// Maybe combine with all other "cards" styling

export const EmployeesContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EmployeeCardContainer = styled.div`
  border: 1px solid black;
`;

export const CardInner = styled.div`
  border: 1px solid black;
  max-width: 80%;
  margin-left: 16px;
  margin-bottom: 16px;
`;

export const NewEmployeeCard = styled.div`
  border: 1px solid black;
`;