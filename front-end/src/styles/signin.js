import styled from "styled-components";

// STYLES FOR SIGNIN & SIGNUP PAGE

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: hsl(178, 53%, 83%);
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin: 10%;
  background-color: lightgray;
  padding: 13px;
  border: 1px solid black;
`;

export const FormItem = styled.div`
  margin: 5%;
`;

export const SettingsContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BillingContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DashboardContainer = styled.div `
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
