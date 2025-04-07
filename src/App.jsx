import { createContext, useEffect, useReducer } from "react"
import { initState, reducer, getAllActionCreator } from "./store/store"
import { API } from "./api/api"
import { Route, Routes } from "react-router-dom"
import { Home, Country, Layout } from "./pages/index"
import './App.css'

export const MyContext = createContext(null)

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    API.getAll().then((res) => dispatch(getAllActionCreator(res)))
  }, [])

  return (
    <section className="container">
      <MyContext.Provider value={state}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/country/:name" element={<Country />} />
          </Route>
        </Routes>
      </MyContext.Provider>
    </section>
  )
}

export default App
