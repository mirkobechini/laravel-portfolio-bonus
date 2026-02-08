import { BrowserRouter, Routes, Route } from "react-router-dom"

//Layout
import DefaultLayout from "./layouts/DefaultLayout"

//Pages
import HomePage from "./pages/HomePage"
import ShowPage from "./pages/ShowPage"

import GlobalContext from "./context/GlobalContext"

function App() {


  return (
    <GlobalContext.Provider value={{API_URL: import.meta.env.VITE_API_URL}}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<HomePage />} />
            <Route path="/projects/:id" element={<ShowPage />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
