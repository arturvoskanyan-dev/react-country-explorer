import { createContext, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { Home, Country, Layout, getAllActionCreator, API } from "./pages/index"
import { useDispatch, useSelector } from "react-redux"
import './App.css'

export const MyContext = createContext(null)

function App() {
  const {text} = useSelector((state) => state.text);
  const {countries} = useSelector((state) => state.countries);
  const {searchCountries} = useSelector((state) => state.searchCountries);
  const {country} = useSelector((state) => state.country);
  const dispatch = useDispatch()

  useEffect(() => {
    API.getAll().then((res) => dispatch(getAllActionCreator(res)))
  }, [])

  return (
    <section className="container">
      <MyContext.Provider value={{countries, text, searchCountries, country}}>
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
