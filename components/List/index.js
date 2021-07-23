import React, { useState, useEffect, useReducer, useCallback } from 'react'
import {
    ListWrap,
    ListInfo,
    BigTriangle,
    SmallTriangle,
    Row,
    Box,
    MDBox,
    MDRow,
    ItemInfo,
    GrayBox,
    Form,
    Input
} from './styles'
import { Checkbox } from '../CheckBox'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { AnimatePresence } from 'framer-motion'

import { DragDropContext } from 'react-beautiful-dnd';


export const List = ({ list, marginBottom, checkedList, setCheckedList, showAllOptions, visibleBuilders, builders, dispatch }) => {
    const [showSelectAll, setShowSelectAll] = useState(true)

    const selectAll = () => {
        const selectedItems = list.items.map(items => items.id)
        setCheckedList([...checkedList, ...selectedItems])
        setShowSelectAll(false)
    }
    const deselectAll = () => {
        const selectedItems = list.items.map(items => items.id)
        const newCheckedList = checkedList.filter((checked) => !selectedItems.includes(checked))
        setCheckedList(newCheckedList)
        setShowSelectAll(true)

    }
    useEffect(() => {
        if (!checkedList.length) {
            setShowSelectAll(true)
        }
    }, [checkedList])

    useEffect(() => {
        if (visibleBuilders !== 'All') {
            selectAll()
        } else {
            setCheckedList([])
        }
    }, [visibleBuilders])


    const onDragEnd = useCallback((result) => {
        if (result.reason === "DROP") {
            if (!result.destination) {
                return;
            }

            let currentItems = [...list.items]
            const removed = currentItems.splice(result.source.index, 1);
            currentItems.splice(result.destination.index, 0, removed[0]);

            let newOrder = builders.map((builder) => {
                if (builder.name === list.name) {
                    return { ...list, items: currentItems }
                } else {
                    return builder
                }
            })
            dispatch({ type: 'SET_BUILDERS', payload: newOrder })
        }
    }, [builders]);

    return (
        <>
            <ListInfo>
                <span className="title"><strong>{list.name}</strong></span>
                {
                    showAllOptions &&
                    <>
                        {
                            showSelectAll ?
                                <a onClick={selectAll}>{`select all in ${list.name}`}</a> :
                                <a onClick={deselectAll}>{`deselect all in ${list.name}`}</a>
                        }
                    </>
                }
                <span className="due-date">Due date (optional)</span>
            </ListInfo>
            <DragDropContext onDragEnd={onDragEnd} >
                <Droppable droppableId={list.name}>
                    {(provided) => {
                        return (
                            <ListWrap marginBottom={marginBottom} ref={provided.innerRef} {...provided.droppableProps}>
                                {list.items.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}
                                        shouldRespectForcePress>
                                        {(provided) => {
                                            return (
                                                <ListItem
                                                    item={item}
                                                    currentList={list.items}
                                                    checkedList={checkedList}
                                                    setCheckedList={setCheckedList}
                                                    showSelectAll={showSelectAll}
                                                    setShowSelectAll={setShowSelectAll}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps} />
                                            )
                                        }}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </ListWrap>
                        )
                    }}
                </Droppable>
            </DragDropContext>
        </>
    )
}

const ListItem = React.forwardRef((props, ref) => {
    const [isChecked, setIsChecked] = useState(false)
    const [date, setDate] = useState('')
    const [time, setTime] = useState('00:00')

    const {
        item,
        currentList,
        checkedList,
        setCheckedList,
        showSelectAll,
        setShowSelectAll,
        ...otherProps } = props

    useEffect(() => {
        if (checkedList.includes(item.id)) {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }
    }, [checkedList, item.id])

    const handleCheck = () => {
        if (isChecked) {
            let index = checkedList.indexOf(item.id)
            let checkedListCopy = checkedList.slice()
            checkedListCopy.splice(index, 1)
            setCheckedList(checkedListCopy)
            setIsChecked(false)
            if (!showSelectAll && checkedListCopy.length > currentList.length) setShowSelectAll(true)
        } else {
            let checkedListCopy = checkedList.slice()
            checkedListCopy.push(item.id)
            setCheckedList(checkedListCopy)
            setIsChecked(true)
            let allChecked = currentList.every((item) => checkedListCopy.includes(item.id))
            if (showSelectAll && allChecked) setShowSelectAll(false)
        }
    }
    return (
        <>
            {/* Web Design */}

            <Row checked={isChecked} ref={ref} {...otherProps}>
                <Checkbox
                    type="rounded"
                    checked={isChecked}
                    onChange={handleCheck}
                />
                <Box>
                    <ItemInfo>
                        <h3>{item.name}</h3>
                        <a>view builder</a>
                    </ItemInfo>
                    <GrayBox>
                        <BigTriangle viewBox="0 0 511.509 511.509">
                            <path d="M498.675 493.845L265.16 5.568c-3.541-7.424-15.701-7.424-19.243 0L11.251 496.235a10.69 10.69 0 0 0 .597 10.283 10.67 10.67 0 0 0 9.024 4.992h469.76c5.888 0 10.667-4.779 10.667-10.667a10.6 10.6 0 0 0-2.624-6.998z" fill="#7e7e7e" />
                        </BigTriangle>
                        <SmallTriangle viewBox="0 0 511.509 511.509">
                            <path d="M374.786 372.419L260.363 133.163c-1.735-3.638-7.693-3.638-9.429 0L135.948 373.59a5.24 5.24 0 0 0 .293 5.039 5.23 5.23 0 0 0 4.422 2.446h230.182a5.23 5.23 0 0 0 5.227-5.227c0-1.307-.481-2.509-1.286-3.429z" fill="#b7b6b6" />
                        </SmallTriangle>
                    </GrayBox>
                </Box>
                <AnimatePresence >
                    {
                        isChecked ?
                            <Form
                                initial={{ x: 0, opacity: 0 }}
                                animate={{ x: 15, opacity: 1 }}
                                exit={{ x: 0, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <Input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </Form>
                            : ''
                    }
                </AnimatePresence>
            </Row>

            {/* Mobile Design */}

            <MDBox
                checked={isChecked}
                onClick={handleCheck}
            >
                <MDRow minHeight="80">
                    <ItemInfo>
                        <h3>{item.name}</h3>
                        <a>view builder</a>
                    </ItemInfo>
                    <GrayBox>
                        <BigTriangle viewBox="0 0 511.509 511.509">
                            <path d="M498.675 493.845L265.16 5.568c-3.541-7.424-15.701-7.424-19.243 0L11.251 496.235a10.69 10.69 0 0 0 .597 10.283 10.67 10.67 0 0 0 9.024 4.992h469.76c5.888 0 10.667-4.779 10.667-10.667a10.6 10.6 0 0 0-2.624-6.998z" fill="#7e7e7e" />
                        </BigTriangle>
                        <SmallTriangle viewBox="0 0 511.509 511.509">
                            <path d="M374.786 372.419L260.363 133.163c-1.735-3.638-7.693-3.638-9.429 0L135.948 373.59a5.24 5.24 0 0 0 .293 5.039 5.23 5.23 0 0 0 4.422 2.446h230.182a5.23 5.23 0 0 0 5.227-5.227c0-1.307-.481-2.509-1.286-3.429z" fill="#b7b6b6" />
                        </SmallTriangle>
                    </GrayBox>
                </MDRow>
                <AnimatePresence >
                    {
                        isChecked ?
                            <MDRow
                                initial={{ height: 0, marginTop: 0, opacity: 0 }}
                                animate={{ height: 'auto', marginTop: 10, opacity: 1 }}
                                exit={{ height: 0, marginTop: 0, opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span>Due date (optional)</span>
                                <Form onClick={(e) => e.stopPropagation()}>
                                    <Input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)} />
                                    <Input
                                        type="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                    />
                                </Form>
                            </MDRow>
                            : ''
                    }
                </AnimatePresence>
            </MDBox>
        </>
    )
}
)
ListItem.displayName = 'ListItem'


