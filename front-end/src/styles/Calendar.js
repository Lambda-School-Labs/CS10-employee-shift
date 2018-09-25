import styled from "styled-components";

// STYLES FOR CALENDAR PAGE

export const CalendarContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TopNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  alignitems: center;
`;

export const TopNavHeader = styled.h1`
  fontsize: 30px;
  fontweight: 300;
`;

export const ButtonContainer = styled.div`
  width: 14%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HoOButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
`;
