import React, { useState, useEffect, useReducer } from 'react'
import { Dashboard } from '../views/Dashboard'
import { useRouter } from 'next/router'
import axios from 'axios'

const initialState = {
  builders: [],
  templates: []
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_BUILDERS':
      return { ...state, builders: action.payload };
    case 'SET_TEMPLATES':
      return { ...state, templates: action.payload };;
    case 'GET_BUILDERS':
      return state.builders;
    case 'GET_TEMPLATES':
      return state.templates;
    default:
      return state
  }
}

export default function DashboardView() {
  const [isMounted, setIsMounted] = useState(false)
  const [visibleBuilders, setVisibleBuilders] = useState('All')

  const [state, dispatch] = useReducer(reducer, initialState);

  const router = useRouter()
  const { template } = router.query

  const fetch = async () => {
    try {
      const promise = await axios.get('/api/builders')
      const response = promise.data
      dispatch({ type: 'SET_BUILDERS', payload: response.result })
      dispatch({ type: 'SET_TEMPLATES', payload: response.result })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetch()
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      if (template) {
        let currentTemplate = state.templates.filter((builder) => builder.slug == template)
        dispatch({ type: 'SET_BUILDERS', payload: currentTemplate })
        setVisibleBuilders(template)
      } else {
        dispatch({ type: 'SET_BUILDERS', payload: state.templates })
        setVisibleBuilders('All')
      }
    }
  }, [template, isMounted])

  return <Dashboard builders={state.builders} templates={state.templates} visibleBuilders={visibleBuilders} dispatch={dispatch} />

}
