import styled, {css} from 'styled-components'
import {MdClose} from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'


export const Container = styled.div`
    display:flex;
    top:0;
    left:0;
    width:100%;
    position:absolute;
    align-items:center;
    justify-content:center;
    height:100vh;
`

export const Background = styled.div`
width:100%;
height:100vh;
background-color:rgba(0,0,0,0.8);
position:fixed;
display:flex;
justify-content:center;
align-items:center;
z-index:100;
`

export const ModalWrapper = styled.div`
width:65vw;
height:75vh;
box-shadow:0 5px 16px rgba(0,0,0,0.2);
background:white;
color:black;
z-index:10;
border-radius:1rem;
display:flex;
justify-content:center;
`

export const Content = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    background-color:white;
    border-radius:1rem;
`

export const ImageContent = styled.img`
    object-fit:contain;
    height:${p => p.type==="upload"? "90%" : "80%"};
`

export const DataContent = styled.div`
    margin-top:0.2rem;
    height:${p => p.type==="upload"? "10%" : "20%"}
`

export const Details = styled.span`
    margin-left:5%;
    font-size:16px;
    font-weight:500;
    font-style:italic;
    display:block;
`

export const CropButton = styled.button`
    font-size:1rem;
    border-radius:10px;
    margin-top:0.7rem;
    padding:0.5rem 1rem;
    outline:none;
    cursor: pointer;
    transition: 0.3s;
    border:none;
    transition: 0.3s;    
    box-shadow: 0px 2px 6px 5px rgba(0,0,0,0.6);

    :hover{
        box-shadow: 0px 3px 8px 2px rgba(0,0,0,0.6);
        transform: scale(1.1);
    }

    :active {
        box-shadow: 0px 3px 6px 3px rgba(0,0,0,0.6);
        transform: scale(1.05);
    }
`

export const Title = styled.input`
    height:100%;
    width:100%;
    padding:0.5rem 1rem;
    font-size:1rem;
    outline:none;
    border:none;
    border-bottom-right-radius:1rem;
    border-bottom-left-radius:1rem;
    box-sizing:border-box;
    margin-top:1rem;
`

const ModifiedButtons = css`
    position:absolute;
    cursor: pointer;
    right:20px;
    width:32px;
    height:32px;
    padding:10px;
    z-index:10;
    background:white;
    border-radius:999px;
    box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.6);
    transition: 0.3s;
`

export const LikeModalButton = styled(AiOutlineLike)`
    
    bottom:20px;
    color:blue;
    border: 3px solid blue;
    ${ModifiedButtons}

    :hover{
        background:blue;
        color:white;
    }
`

export const CloseModalButton = styled(MdClose)`
    top:20px;
    color:black;
    border: 3px solid black;
    ${ModifiedButtons}

    :hover{
        background:black;
        color:white;
    }
`

