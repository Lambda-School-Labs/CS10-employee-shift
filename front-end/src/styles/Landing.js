import styled from "styled-components";

export const BackgroundHolder = styled.div`
    background-color: grey;
    width: 100%;
    height: 500px;
    max-height: 80%;
  `;

export const LandingNavBar = styled.div`
    display: flex;
    justify-content: flex-end;
  `;

export const WelcomeHolder = styled.div`
    display: flex;
`;

export const WelcomeH1 = styled.div`
    font-size: 4em;
`;

export const WelcomeSide = styled.div`
    display: flex;
    flex-flow: column;
    margin-top: 20%;
    margin-left: 10%;
`;

export const WelcomeLogo = styled.div`
    width: 50%;
    background: black;
    margin-left: 10%;
    margin-top: 5%;
`;

{/* possibly depreciated */}
export const WelcomeText = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 17%;
    font-size: 2em;
  `;

export const ScheduleButton = styled.div`
    display: flex;
    justify-content: center;
    padding: 70px;
  `;

export const ScheduleButtonButton = styled.button`
    box-shadow: 5px 10px 20px black;
    font-size: 2em;
  `;

export const FooterStyles = styled.div`
    display: flex;
    justify-content: center;
  `;
