import { useEffect, useReducer } from "react"
import {initState, reducer, getAllActionCreator} from "./store/store"
import { API } from "./api/api"
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    API.getAll().then((res) => dispatch(getAllActionCreator(res)))
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
