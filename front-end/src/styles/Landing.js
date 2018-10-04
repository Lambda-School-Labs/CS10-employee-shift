import styled from "styled-components";

import { device } from "./globals.js";


export const BackgroundHolder = styled.div`
    background-color: #4B9CD3;
    width: 100%;
    // height: 700px;
    max-height: 80%;
`;

export const LandingNavBar = styled.div`
    display: flex;
    justify-content: flex-end;
    z-index: 2;

    @media ${device.tablet} {
        font-size: 23px;
        min-width: 260px;
    }

    @media ${device.mobileL} {
        font-size: 21px;
        min-width: 200px;
    }
`;

export const WelcomeHolder = styled.div`
    display: flex;
`;

export const MainLogo = styled.img`
    width: 300px;
`;

export const WelcomeH1 = styled.div`
    font-size: 4em;
    margin-top: 45%;
    margin-left: 10%;
`;

export const WelcomeSide = styled.div`
    display: flex;
    flex-flow: column;
    width: 60%;
    min-height: 800px;
`;

export const WelcomeLogo = styled.div`
    min-height: 800px;
    width: 40%;
    background-color: #13294B;    
`;

export const WelcomeText = styled.div`
    margin-top: 10%;
    margin-left: 10%;
    font-size: 1.5em;
`;

export const ScheduleButton = styled.div`
    .btn{
        align-self: flex-end;
        background-color: #4B9CD3;
        color: #fff;
        cursor: pointer;
        border: none;
        border-radius: 7px;
        display: flex;
        font-size: 20px;
        font-weight: 300px;
        letter-spacing: 2px;
        margin-top: 7%;
        margin-left: 10%;
        position: relative;
        padding: 25px 50px;
        text-align: center;
        width: 260px;
        z-index: 5;
    }

    .btn: hover {
        background-color: #007FAE;
    }

    .btn: action {
        box-shadow: none;
        top: 6px;
    }

    @media ${device.mobileL} {
        font-size: 21px;
        min-width: 200px;
        margin-left: 97%;
    }
`;

export const NavButton = styled.div`
    margin: 5px;
    margin-left: 2px;

    .btn{
        align-self: flex-end;
        background-color: #4B9CD3;
        border: none;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        font-size: 17px;
        font-weight: 20px;
        letter-spacing: 2px;
        padding: 5px 5px;
        position: relative;
        text-align: center;
        width: 100px;
        z-index: 3;
    }

    .btn: hover {
        background-color: #007FAE;
    }

    .btn: action {
        box-shadow: none;
        top: 6px;
    }
`;

export const Circle_div = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    margin-left: 0%;
    top: -200px;
    z-index: 1;
    transistion: 2s;
    width: 20%;
    border-width: 2px;
    border: red solid;
    
    @media ${device.tablet} {
        display: none;
    }

    @media ${device.mobileL} {
        display: none;
    }

`;

export const Circle_img = styled.img`
`;

export const FooterStyles = styled.div`
    display: flex;
    background-color: #4B9CD3;
    justify-content: center;
    flex-direction: row;
    z-index: 5;
`;