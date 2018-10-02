import styled from "styled-components";

import { device } from "./globals.js";

// STYLES FOR ADMIN DASHBOARD PAGE

export const AdminContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AdminHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 10%;

  @media ${device.tablet} {
    padding: 10% 0;
  }
`;

export const AdminBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Welcome = styled.h2`
  padding-left: 10%;
  align-self: flex-start;
  fontsize: 30px;
  fontweight: 300;
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;

  @media ${device.tablet} {
    max-width: 92px;
  }
`;

export const HoOButton = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 5% 12%;
  justify-content: space-between;
  cursor: pointer;
`;

export const AdminDetailsContainer = styled.div`
  order: 3;
`;

export const AdminHoursContainer = styled.div`
  padding-right: auto;
`;
