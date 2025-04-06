import { createContext, useEffect, useReducer } from "react"
import { initState, reducer, getAllActionCreator } from "./store/store"
import { API } from "./api/api"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/index"
import './App.css'

export const MyContext = createContext(null)

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    API.getAll().then((res) => dispatch(getAllActionCreator(res)))
  }, [])

  return (
    <MyContext.Provider value={state}>
      <section className="container p-4">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </section>
    </MyContext.Provider>
  )
}

export default App
