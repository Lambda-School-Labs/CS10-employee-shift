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

export const Header = styled.h1`
  padding: 0 0;
  margin: 0;
  height: 100px;
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

export const RegisterForm = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const FormItem = styled.div`
  min-width: 200px;
  max-width: 300px;
  padding: 5% 0;
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

export const DashboardContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
