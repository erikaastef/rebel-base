import styled, { css } from "styled-components"
import { motion } from 'framer-motion'

//Web Design

export const ListWrap = styled.div`
    display:flex;
    gap:20px;
    flex-direction:column;
    ${({ marginBottom }) => marginBottom && css`
        margin-bottom:${marginBottom}px;
    `}
`
export const ListInfo = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:30px;
    .title{
        font-size:24px;
    }
    a{
        cursor:pointer;
        text-transform:lowercase;
        color:${({ theme }) => theme.colors.aqua};
    }
    @media(min-width:${({ theme }) => theme.device.sm}) and (max-width:1150px){
        padding-right:20px;
        min-width:800px;
    }
    @media(max-width:${({ theme }) => theme.device.sm}){
        .due-date{
            display:none;
        }
    }
`
export const Box = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 15px;
    background-color:${({ theme }) => theme.colors.white};
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    box-shadow: 7px 8px 6px 1px rgb(0 0 0 / 20%);
    transition: border-color .2s ease-in-out;
`
export const GrayBox = styled.div`
    width:fit-content;
    padding: 15px 20px 10px 18px;
    background: ${({ theme }) => theme.colors.gray};    
`
export const BigTriangle = styled.svg`
    width:50px;
    height:30px;
    * {
        transition: fill .2s ease-in-out;
    }
`
export const SmallTriangle = styled.svg`
    width:30px;
    height:45px;
    position: absolute;
    bottom: -4px;
    right: -1px;
    * {
        transition: fill .2s ease-in-out;
    }
`
export const Row = styled.div`
    display:grid;
    align-items:center;
    grid-template-columns: 0.2fr 1.4fr 1.4fr;
    gap:10px;
    width:100%;
    min-width:800px;
    padding: 0px 10px;
    ${({ checked }) => checked && css`
        ${Box}{
            border: 1px solid ${({ theme }) => theme.colors.aqua};    
        }
        ${BigTriangle}{
            path{
                fill:${({ theme }) => theme.colors.darkRed}; 
            }
        }
        ${SmallTriangle}{
            path{
                fill:${({ theme }) => theme.colors.lightRed}; 
            }
        } 
    `}
    
    @media(max-width:${({ theme }) => theme.device.sm}){
        display:none;
    }
`
export const ItemInfo = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    h3{
        font-size:18px;
    }
    a{
        cursor:pointer;
        color:${({ theme }) => theme.colors.blue};
    }
    @media(max-width:${({ theme }) => theme.device.sm}){
        height:100%;
    }

`
export const Form = styled(motion.form)`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:20px;
    @media(min-width:${({ theme }) => theme.device.sm}) and (max-width:1150px){
        padding-right:20px;
    }
    @media(max-width:${({ theme }) => theme.device.xsm}){
        display:grid;
        grid-template-columns:auto;
        gap:6px;
        margin-left:6px;
    }
`
export const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.gray}; 
    padding:5px 45px 5px 10px;
    font-size: 13px;
    &[type="date"]{
        cursor: text;
        min-width: 150px;
        ::-webkit-datetime-edit-month-field { text-transform: uppercase; }
        ::-webkit-datetime-edit-day-field { text-transform: uppercase; }
        ::-webkit-datetime-edit-year-field { text-transform: uppercase; }
        ::-webkit-calendar-picker-indicator{
            cursor:pointer;
            position:absolute;
            right:3px;
            padding-left:5px;
            border-left:1px solid ${({ theme }) => theme.colors.gray};
            path{
                fill:red;
            }
        }
    }
    &[type="time"]{
        cursor: text;
        ::-webkit-calendar-picker-indicator {
            cursor:pointer;
            position:absolute;
            right:3px;
            padding-left:5px;
            border-left:1px solid ${({ theme }) => theme.colors.gray};
        }
    }
`

//Mobile Design

export const MDRow = styled(motion.div)`
    display:flex;
    justify-content:space-between;
    align-items:center;
    span{
        font-size:14px;
        color: ${({ theme }) => theme.colors.gray};
    }
    ${({ minHeight }) => minHeight && css`
        min-height:${minHeight}px;
    `}

`
export const MDBox = styled(Box)`
    display:none;
    width:100%;
    min-height:100px;
    padding: 20px 15px 15px 20px;
    box-shadow:-2px 5px 11px 0px rgb(0 0 0 / 18%);
    ${({ checked }) => checked && css`
        border: 1px solid ${({ theme }) => theme.colors.aqua}; 
        ${BigTriangle}{
            path{
                fill:${({ theme }) => theme.colors.darkRed}; 
            }
        }
        ${SmallTriangle}{
            path{
                fill:${({ theme }) => theme.colors.lightRed}; 
            }
        }
        
    `}
    @media(max-width:${({ theme }) => theme.device.sm}){
        display:grid;
        grid-template-columns:1fr;
        grid-template-rows:auto;
    }
`


