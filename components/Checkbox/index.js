import styled from 'styled-components'

export const Checkbox = ({ checked, label, type, ...props }) => {
    return (
        <>
            {type === "rounded" &&
                <CheckboxContainer checked={checked} >
                    <HiddenCheckbox checked={checked} {...props} />
                    <StyledCheckbox checked={checked} />
                    <Label>
                        {label ? label : ""}
                    </Label>
                </CheckboxContainer>}
        </>

    )
}
const CheckboxContainer = styled.label`
    position: initial;
    display: flex;
    align-items: center;
    cursor: pointer;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`

const StyledCheckbox = styled.div`
    width:20px;
    height:20px;
    background: ${({ checked, theme }) => checked ? theme.colors.aqua : theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 50%;
    margin-right: 10px;
    transition: all .2s ease-in-out;
    & :hover{
        background: ${({  theme }) => theme.colors.lightAqua };
    }
`

const Label = styled.div`
    display:flex;
    flex-direction:column;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.18;
    color:${({ theme }) => theme.colors.black};
`
