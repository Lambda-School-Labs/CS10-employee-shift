import styled from "styled-components";

export const BackgroundHolder = styled.div`
    background-color: #4B9CD3;
    width: 100%;
    height: 700px;
    max-height: 80%;
  `;

export const LandingNavBar = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: 5;
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
    height: 700px;
    width: 75%;
    background-color: #13294B;
    margin-left: 30%;
    
`;

{/* possibly depreciated */}
export const WelcomeText = styled.div`
    display: flex;
    width: 200px;
    justify-content: center;
    padding-top: 17%;
    font-size: 1.5em;
  `;

export const ScheduleButton = styled.div`
    .btn{
    display: flex;
    position: relative;
    justify-content: center;
    margin-top: 70%;
    margin-left: 197%;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 300px;
    color: black;
    letter-spacing: 2px;
    padding: 25px 50px;
    border-radius: 10px;
    box-shadow: 10px 6px #13294B
    }

    .btn: hover {
        background-color: #007FAE;
        box-shadow: 6px 2px #13294B;
        top: 2px;
    }

    .btn: action {
        box-shadow: none;
        top: 6px;
    }
  `;



export const ScheduleButtonButton = styled.button`
    box-shadow: 5px 10px 20px hsl(178, 53%, 43%);
    font-size: 2em;
    align-self: flex-end;
    // margin-left: 0%;
    z-index: 2;
    position: relative;
  `;

export const NavButton = styled.div `
    .btn{
    display: flex;
    position: relative;
    justify-content: flex-end;
    margin-top: 5%;
    margin-left: 10%;
    border: none;
    cursor: pointer;
    font-size: 12px;
    font-weight: 20px;
    color: black;
    letter-spacing: 2px;
    padding: 5px 5px;
    border-radius: 10px;
    box-shadow: 10px 6px #13294B
    }

    .btn: hover {
        background-color: #007FAE;
        box-shadow: 6px 2px #13294B;
        top: 2px;
    }

    .btn: action {
        box-shadow: none;
        top: 6px;
    }
  `;

export const NavButtonButton = styled.button `
    box-shadow: 5px 10px 20px hsl(178, 53%, 43%);
    font-size: 1em;
    align-self: flex-end;
    z-index: 2;
    position: relative;
  `;

export const Circle_div = styled.div `
    position: absolute;
    margin-left: -25%;
    top: -200px;
    z - index: 1;
    transistion: 2s;
  `;

  
export const circle_img = styled.div `
    display: flex;
    margin-right: 150px;
    position: relative;
    justify-content: center;
    border:red solid 1px;
    z-index: -1;
    `;

export const textBox = styled.div `
    display: flex;
    width: 25%;
    height: 700px;
    justify-content: flex-start;
    flex-direction: row;
    border: red 1px solid;
    background-color: white;
    `;

export const FooterStyles = styled.div`
    display: flex;
    background-color: #4B9CD3;
    justify-content: center;
    flex-direction: row;
    z-index: 5;
  `;

export const UserButton = styled.button`
    // padding: 5px;
    // border: none;
`