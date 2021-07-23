import { useState, useEffect } from 'react'
import { ListItem, ListWrap, MobileContainer, MobileNavigator } from './styles'
import { StyledSelect } from '../Select'
import { Button } from '../Button'
import Router from 'next/router'

export const NavigationBar = ({ templates, currentTab }) => {
    const [selectOptions, setSelectOptions] = useState([])

    useEffect(() => {
        if (templates.length) {
            let options = templates.map((builder) => ({
                label: builder.name,
                value: builder.slug
            }))
            setSelectOptions(options)
        }
    }, [templates])

    return (
        <>
            <ListWrap>
                <ListItem active={String(currentTab == "All")} onClick={() => Router.push('/')}>All</ListItem>
                <ListItem readOnly><span>Templates</span>
                    <ListWrap childrenList>
                        {
                            templates.length ?
                                templates.map((builder) => (
                                    <ListItem
                                        key={builder.id}
                                        onMouseEnter={(e) => e.stopPropagation()}
                                        onClick={() => Router.push(`/?template=${builder.slug}`)}
                                        active={String(currentTab == builder.slug)}
                                    >
                                        {builder.name}
                                    </ListItem>
                                ))
                                : ''
                        }
                    </ListWrap>
                </ListItem>
            </ListWrap>
            <MobileContainer>
                <MobileNavigator>
                    <Button type="outlined" active={String(currentTab == "All")} onClick={() => Router.push('/')}>All</Button>
                    <StyledSelect
                        id="select"
                        active={String(currentTab !== "All")}
                        placeholder={selectOptions[0]?.label}
                        value={currentTab !== 'All' ? currentTab : ''}
                        options={selectOptions}
                        onChange={(e) => Router.push(`/?template=${e.value}`)}
                    />
                </MobileNavigator>
                <Button type="secondary" className="blue-btn">use this builder schedule</Button>
            </MobileContainer>
        </>
    )
}
