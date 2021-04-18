import styled from "styled-components"


export const ActionContainer = styled.div`
    display:flex;
    height:100%;
    width:100%;  
    justify-content:center; 
    align-items:center;
`

export const ActionWrapper = styled.div`
    display:flex;
    width:65%;
    height:20%;
    padding:0.5rem 1rem;
    flex-direction: column;

    >span{
        margin:0.7rem auto;
        font-size:24px;
        font-weight:700;
        animation-name: flicker;
        animation-duration: 4s;
        animation-iteration-count: infinite;

        @keyframes flicker {
            0% { opacity: 1; }
            50% { opacity: 0.1; }
            100% { opacity: 1; }
        }
    }
`