import React, { useState, useEffect } from 'react'
import { List } from '../../components/List'
import { NavigationBar } from '../../components/NavigationBar'
import { Button } from '../../components/Button'
import { Container, Grid, BuildersWrap, Controllers } from './styles'


export const Dashboard = ({ builders, templates, visibleBuilders, dispatch }) => {
    const [checkedList, setCheckedList] = useState([])

    return (
        <Container className="wrapper">
            <h1>Select Builder Schedule - 2019 Fall Cohort</h1>
            <Grid>
                <NavigationBar templates={templates} currentTab={visibleBuilders} />
                <BuildersWrap>
                    {builders.map((builder) => (
                        <List
                            key={builder.id}
                            marginBottom="65"
                            list={builder}
                            builders={builders}
                            dispatch={dispatch}
                            showAllOptions={visibleBuilders === "All"}
                            visibleBuilders={visibleBuilders}
                            setCheckedList={setCheckedList}
                            checkedList={checkedList}
                        />
                    ))}
                </BuildersWrap>
            </Grid>
            <Controllers>
                <a onClick={() => setCheckedList([])}>cancel</a>
                <Button type="secondary" >use this builder schedule</Button>
            </Controllers>
        </Container>
    )
}
