import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header"
import { AppRoutes } from "./components/routes/AppRoutes"
import styles from './styles/app.module.css'
import backgroundImage from './public/backOboi.jpg'

function App() {
  return (
    <BrowserRouter>
      <div 
        className={styles.app}
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div className={styles.appContent}>
          <Header />
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App