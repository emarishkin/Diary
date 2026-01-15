import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header"
import { AppRoutes } from "./components/routes/AppRoutes"

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Header />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
