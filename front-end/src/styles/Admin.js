import styled from "styled-components";

import { device } from "./globals.js";

// STYLES FOR ADMIN DASHBOARD PAGE

export const AdminContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AdminHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const Welcome = styled.h2`
  fontsize: 30px;
  fontweight: 300;
  align-self: center;
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
  align-self: baseline;

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
