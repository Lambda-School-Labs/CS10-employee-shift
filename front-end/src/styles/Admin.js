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
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;

  @media ${device.tablet} {
    padding: 10% 0;
  }
`;

export const Welcome = styled.h2`
  fontsize: 30px;
  fontweight: 300;
`;

export const ButtonContainer = styled.div`
  padding-left: auto;

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
