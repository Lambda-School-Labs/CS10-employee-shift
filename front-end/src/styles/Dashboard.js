import styled from "styled-components";

import { device } from "./globals.js";

// STYLES FOR EMPLOYEE DASHBOARD PAGE

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HorizontalContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

export const DashboardHeader = styled.h1`
  fontsize: 30px;
  fontweight: 300;
`;

export const AssignedShiftsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 5%;
  flex-direction: column;
`;

export const TimeOffApprovedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 5%;
  flex-direction: column;
`;

export const TimeOffRequestContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 5%;
  flex-direction: column;
`;

export const FormItem = styled.div`
  min-width: 250px;
  padding: 5% 0;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin: 10%;
  background-color: lightgray;
  padding: 13px;
`;
