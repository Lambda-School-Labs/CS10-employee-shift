import styled from "styled-components";

export const Modals = styled.div`
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
`;

export const ModalInner = styled.div`
    background-color: gray;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid black;
    width: 80%
`;