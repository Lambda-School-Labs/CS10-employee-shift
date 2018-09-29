import styled from "styled-components";

// STYLES FOR EMPLOYEE DASHBOARD PAGE

export const DashboardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const DashboardHeader = styled.h1`
  fontsize: 30px;
  fontweight: 300;
`;

export const AssignedShiftsContainer = styled.div`
  width: 100%;
  height: 89vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
`;

export const TimeOffApprovedContainer = styled.div`
  width: 100%;
  height: 89vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
`;

export const TimeOffRequestContainer = styled.div`
  width: 100%;
  height: 89vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
`;
