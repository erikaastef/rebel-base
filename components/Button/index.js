import styled, { css } from 'styled-components'

export const Button = ({ type, onClick, children, ...props }) => {
    return (
        <>
            {
                type === "outlined" &&
                <OutlinedButton onClick={onClick} {...props}>{children}</OutlinedButton>
            }
            {
                type === "secondary" &&
                <SecondaryButton onClick={onClick} {...props}>{children}</SecondaryButton>
            }

        </>
    )
}
const OutlinedButton = styled.button`
    width:fit-content;
    cursor:pointer;
    padding:10px 30px;
    border-radius:7px;
    border: 1px solid ${({ theme }) => theme.colors.black}; 
    transition: border-color .3s ease-in-out , background-color .3s ease-in-out;
    &:hover{
        border-color:${({ theme }) => theme.colors.gray}; 
        background-color:${({ theme }) => theme.colors.gray}; 
    }
    ${({ active }) => active === 'true' && css`
        border-color:${({ theme }) => theme.colors.gray}; 
        background-color:${({ theme }) => theme.colors.gray}; 
    `}
`
const SecondaryButton = styled.button`
    width:fit-content;
    cursor:pointer;
    padding: 5px 8px;
    border-radius:7px;
    color:${({ theme }) => theme.colors.white}; 
    background-color:${({ theme }) => theme.colors.dirtyBlue}; 
    transition: background-color .3s ease-in-out;
    &:hover{
        
        background-color:${({ theme }) => theme.colors.darkBlue};
    }
`