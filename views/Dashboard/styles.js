import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    padding:40px 0px;
    flex-direction:column;
    h1{
        font-size:24px;
        text-align:center;
        margin-bottom:30px;
    }
`
export const Controllers = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    gap:15px;
    margin-top:30px;
    a {
        cursor:pointer;
        transition: color .2s ease-in-out;
        &:hover{
            color:${({ theme }) => theme.colors.dirtyBlue};
        }
    }
    @media(max-width:${({ theme }) => theme.device.sm}){
        display:none;
    }
`
export const Grid = styled.div`
    display:grid;
    grid-template-columns: 0.3fr 1.7fr;
    gap:20px;
    @media(max-width:${({ theme }) => theme.device.sm}){
        grid-template-columns:1fr;
    }
`

export const BuildersWrap = styled.div`
    border: solid 1px ${({ theme }) => theme.colors.lightGray};
    overflow-y:scroll;
    height:70vh;
    padding:30px 20px 0px;
    ::-webkit-scrollbar-track , 
    ::-webkit-scrollbar-corner {
        background-color:${({ theme }) => theme.colors.lightGray};
    }
    ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
        height: 7px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 0px;
        background-color: rgba(0,0,0,.5);
    }
    @media(max-width:${({ theme }) => theme.device.sm}){
        overflow:visible;
        height:auto;
        padding:0px;
        border:none;
    }
`