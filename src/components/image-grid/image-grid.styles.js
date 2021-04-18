import { MdDelete } from 'react-icons/md'
import styled from 'styled-components'

export const GridContainer = styled.div`
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
`

export const HeaderBar = styled.div`    
    cursor: pointer;
    height:15%;
    width:100%;
    display:none;
    justify-content:center;
    position:absolute;
    background-color:rgba(0,0,0,0.5);
    bottom:0;

    :hover{
        background-color:black;
    }
`

export const CloseButton = styled(MdDelete)`
    width:36px;
    height:36px;
    padding:5px;
    border-radius:999px;
    color:red;
`

export const GridImage = styled.div`
    overflow: hidden;
    height: 0;
    opacity: 0.8;
    cursor:pointer;
    width:300px;
    height:300px;
    position:relative;

    >img{
        height:100%;
        width:100%;
        object-fit:contain;
    }

    :hover ${HeaderBar}{
        display:flex
    }    
`



