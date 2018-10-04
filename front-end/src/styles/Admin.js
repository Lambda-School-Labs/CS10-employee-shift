import styled from "styled-components";

import { device } from "./globals.js";

// STYLES FOR ADMIN DASHBOARD PAGE

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 10% 0 10%;

  @media ${device.laptop} {
    padding-top: 80px;
  }
`;

export const AdminHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const Welcome = styled.h1`
  fontsize: 30px;
  fontweight: 300;
`;

export const AdminBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
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
