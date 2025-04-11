import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { Home, Country, Layout, getCountriesThunk } from "./pages/index"
import { useDispatch } from "react-redux"
import './App.css'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountriesThunk())
  }, [])

  return (
    <section className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/country/:name" element={<Country />} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
