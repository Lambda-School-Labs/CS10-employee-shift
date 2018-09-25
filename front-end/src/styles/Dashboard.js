import styled from "styled-components";

// STYLES FOR DASHBOARD PAGE

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

export const OrganismContainer = styled.div`
  width: 30vh;
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
`;
