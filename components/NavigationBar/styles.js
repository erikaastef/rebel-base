import styled, { css } from 'styled-components'

export const ListItem = styled.li`
    transition: background-color .25s ease-in-out;
    padding:10px;
    cursor:pointer;
    &:hover{
        background-color:${({ active, theme }) => active === 'false' ? theme.colors.lightGray : theme.colors.gray};
    } 
    ${({ active }) => active === 'true' && css`
        background-color:${({ theme }) => theme.colors.gray}; 
    `}
    ${({ readOnly }) => readOnly && css`
        padding:0px;
        &:hover{
            background:none;
        }
        & span{
            display:block;
            cursor:default;
            padding:10px;
            color:${({ theme }) => theme.colors.gray}; 
        }
    `}
`
export const ListWrap = styled.ul`
    ${({ childrenList }) => childrenList && css`
        ${ListItem}{
            padding-left:35px;
        }
    `}
    @media(max-width:${({ theme }) => theme.device.sm}){
        display:none;
    }
`
export const MobileContainer = styled.div`
    display:none;
    .blue-btn{
        align-self:flex-end;
    }
    @media(max-width:${({ theme }) => theme.device.sm}){
        display:flex;
        flex-direction:column;
        gap:15px;
        width: 100%;
    }
`
export const MobileNavigator = styled.div`
    display:flex;
    align-self:center;
    align-items:center;
    justify-content:space-between;
    gap:15px;
    max-width:75vw;
    width: 100%;
`

