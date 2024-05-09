import Header from './components/header.tsx'
import { globalStyles } from './styles/theme.ts'
// import OftenRegister from './components/oftenRegister.tsx'
import Footer from './components/footer.tsx'
import FiringRangeForm from './components/forms/firingRangeForm.tsx'
import SportyShooterForm from './components/forms/sportyShooterForm.tsx'
import HabitualityForm from './components/forms/HabitualityForm.tsx'

function App() {
  globalStyles()

  return (
    <main>
      <Header />
      <FiringRangeForm />
      <SportyShooterForm />
      <HabitualityForm />
      <Footer />
    </main>
  )
}

export default App
