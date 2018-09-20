import styled from "styled-components";

// STYLES FOR MAIN TEMPLATE

export const MainContainer = styled.div`
width: 100vw,
height: 100vh,
display: flex,
flexDirection: column,
`;

export const HorizontalContainer = styled.div`
  display: flex;
`;

export const ComponentContainer = styled.div`
  width: 80%;
`;

export const SideNavigationContainer = styled.div`
  display: flex;
  border: solid black 1px;
  flex-direction: column;
  justify-content: flex-start;
  width: 20%;
  height: 80vh;
  margin: 0 5%;
`;

export const TopNav_Container = styled.div`
width: "90%",
display: "flex",
justifyContent: "space-between",
margin: "0 5%",
`;

export const Breadcrumb = styled.div`
display: "flex",
alignItems: "center",
`;
