import styled from "styled-components";
// Maybe combine with all other "cards" styling

export const EmployeesContainer = styled.div`
  display: flex;
  margin: 70px 10% 0 10%;
  flex-direction: column;
`;

export const EmployeeHeader = styled.h1`
  margin: 30px auto;
  color: black;
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
