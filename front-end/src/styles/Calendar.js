import styled from "styled-components";

// STYLES FOR CALENDAR PAGE

export const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
`;

export const TopNavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export const TopNavHeader = styled.h1`
  min-width: 380px;
  align-self: baseline;
  margin-left: calc(50% - 200px);
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
  align-self: baseline;
`;

export const HoOButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
`;

export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-column: repeat(8, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 70px);
  padding: 1%;
  place-items: stretch stretch;
  place-content: stretch stretch;
`;

export const GridItemHeader = styled.div`
  grid-column-start: ${props => props.column};
  grid-column-end: ${props => props.column};
  grid-row: 1 / span 1;
`;

export const GridItemEmployee = styled.div`
  grid-row-start: ${props => props.row};
  grid-row-end: ${props => props.row};
  grid-column-start: 1;
  grid-column-end: 1;
`;

export const GridItemShift = styled.div`
  grid-row-start: ${props => props.row};
  grid-row-end: ${props => props.row};
  grid-column-start: ${props => props.column};
  grid-column-end: ${props => props.column};
`;
