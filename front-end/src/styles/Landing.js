import styled from "styled-components";

export const BackgroundHolder = styled.div`
    background-color: #A0DDFF;
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
    height: 500px;
    width: 75%;
    background-color: grey;
    margin-left: 30%;
    
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
    margin-top: -120px;
  `;

export const ScheduleButtonButton = styled.button`
    box-shadow: 5px 10px 20px hsl(178, 53%, 43%);
    font-size: 2em;
    align-self: flex-end;
    margin-left: 345%;
    z-index: 2;
    position: relative;
  `;

export const FooterStyles = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -15px;
  `;
