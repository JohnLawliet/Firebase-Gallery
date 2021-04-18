import styled from 'styled-components'
import Cropper from "react-cropper";
import {AiOutlineLike} from 'react-icons/ai'

export const Content = styled.div`
    height:100%;
    width:100%;
    padding:0 1rem;
`

export const CropBox = styled(Cropper)`
    height:100%;
    width:100%;
`

export const LikeModalButton = styled(AiOutlineLike)`
cursor: pointer;
position:absolute;
bottom:20px;
right:20px;
width:32px;
height:32px;
padding:10px;
z-index:10;
color:blue;
background:white;
border-radius:999px;
border: 3px solid blue;
box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.6);
transition: 0.3s;

:hover{
    background:blue;
    color:white;
}
`