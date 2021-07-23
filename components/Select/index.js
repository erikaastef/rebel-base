import styled, { css } from 'styled-components'
import { theme } from '../../styles/Theme'
import { motion } from 'framer-motion'
import Select from 'react-select';

export const StyledSelect = ({ className, label, options, id, defaultValue, onChange, width, placeholder, active }) => {

    return (
        <Wrapper width={width} className={className}>
            <Label>{label}</Label>
            <Select
                instanceId={id}
                components={{ IndicatorsContainer }}
                styles={
                    active === 'true' ?
                        {
                            ...customStyles,
                            control: (provided, state) => ({
                                ...provided,
                                borderRadius: '10px',
                                border: `1px solid ${theme.colors.gray}`,
                                backgroundColor: theme.colors.gray,
                                padding: "0px 10px",
                                fontWeight: 400,
                                boxShadow: 'none',
                                transition: 'border-color .3s ease-in-out , background-color .3s ease-in-out',
                                '&:hover': {
                                    borderColor: 'none !important`',
                                },
                            })
                        }
                        : customStyles
                }
                options={options}
                placeholder={placeholder}
                onChange={onChange}
                defaultValue={defaultValue}
                theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary25: 'none',
                        primary75: 'none',
                        primary: 'none',
                        primary50: 'none',
                    },
                })}
            />
        </Wrapper>
    )
}

const IndicatorsContainer = ({ innerRef, innerProps, selectProps }) => {

    return (
        <div ref={innerRef} {...innerProps}>
            <Chevron viewBox="0 0 20 20" width="18" height="20">
                <g fill="none" fillRule="evenodd">
                    <g fill="#008657">
                        <g>
                            <g>
                                <g>
                                    <path d="M15.895 8.162c.14.173.138.423.008.594l-.055.06-5.563 5.072c-.144.13-.347.147-.505.049l-.065-.049-5.563-5.072c-.183-.167-.204-.46-.047-.654.14-.173.374-.21.553-.099l.064.049L10 12.925l5.278-4.813c.163-.148.4-.147.56-.009l.057.059z" transform="translate(-520 -256) translate(95 158) translate(0 69) translate(425 29)" />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </Chevron>
        </div>
    );
};

const Chevron = styled(motion.svg).attrs({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
    path{
        fill:${({ theme }) => theme.colors.black}
    }
`

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderRadius: '7px',
        padding: "0px 10px",
        border: `1px solid ${theme.colors.black}`,
        fontWeight: 400,
        boxShadow: 'none',
        transition: 'border-color .3s ease-in-out , background-color .3s ease-in-out',
        '&:hover': {
            borderColor: 'none !important`',
        },
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: '0px',
        flexWrap: 'nowrap',
    }),
    placeholder: (provided, state) => ({
        color: `${theme.colors.black}`,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    }),
    indicatorSeparator: (provided, state) => ({
        ...provided,
        width: '0px',
    }),
    menu: (provided, state) => ({
        ...provided,
        padding: "10px",
        margin: "2px 0px",
        width: "100%",
        borderRadius: "0px",
        border: `1px solid ${theme.colors.black}`,
        boxShadow: " 0 2px 4px 0 rgba(0, 0, 0, 0.3)",
        "&::-webkit-scrollbar-thumb": {
            borderRadius: "2.5px",
            backgroundColor: `${theme.colors.lightGray}`
        }
    }),
    menuList: (provided, state) => ({
        ...provided,
        maxHeight: "150px",
        overflow: "auto"
    }),
    option: (provided, state) => ({
        ...provided,
        color: `${theme.colors.black}`,
        padding: "10px 0",
        fontSize: "14px",
        fontWeight: state.isSelected ? 700 : "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.5",
        letterSpacing: "normal",
        '&:hover': {
            color: !state.isSelected && `${theme.colors.gray}`,
        },
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        content: `url('/images/green-chevron.svg')!important`
    })
}


const Label = styled.label`
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 25px;
    text-align: left;
    transition: color .3s ease-in-out;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align:left;
    margin:0px;
    width: ${({ width }) => width ? `${width}px` : '100%'};

`