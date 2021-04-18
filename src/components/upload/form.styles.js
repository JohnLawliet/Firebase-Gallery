import styled from 'styled-components'

export const Output = styled.div`

`

export const Result = styled.div`

`

export const Error = styled(Result)`

`

export const File = styled(Result)`

`


export const InputForm = styled.form`
    margin: 30px auto 10px;
    text-align: center;
`

export const Label = styled.label`
    display: block;
    width: 30px;
    height: 30px;
    border: 1px solid var(--primary);
    border-radius: 50%;
    margin: 10px auto;
    line-height: 30px;
    color: var(--primary);
    font-weight: bold;
    font-size: 24px;

    :hover{
        background: var(--primary);
        color: white;
        cursor:pointer;
    }

    >input {
        height: 0;
        width: 0;
        opacity: 0;
    }
`