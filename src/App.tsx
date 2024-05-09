import Header from './components/header.tsx'
import { globalStyles } from './styles/theme.ts'
// import OftenRegister from './components/oftenRegister.tsx'
import Footer from './components/footer.tsx'
import FiringRangeForm from './components/forms/firingRangeForm.tsx'
import SportyShooterForm from './components/forms/sportyShooterForm.tsx'
import HabitualityContainer from './components/HabitualityContainer.tsx'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Button } from './styles/button.ts'
function App() {
  globalStyles()

  return (
    <main>
      <Header />
      <FiringRangeForm />
      <SportyShooterForm />
      <HabitualityContainer />
      <Button onClick={() => window.print()}>Imprimir</Button>
      <Footer />
      <ToastContainer />
    </main>
  )
}

export default App
