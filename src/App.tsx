import Header from './components/header.tsx'
import { globalStyles } from './styles/theme.ts'
// import Form from './components/form.tsx'
// import Input from './components/input.tsx'
// import { DataContainer } from './styles/form.ts'
// import OftenRegister from './components/oftenRegister.tsx'
// import Footer from './components/footer.tsx'
import FiringRangeForm from './components/forms/firingRangeForm.tsx'
import SportyShooterForm from './components/forms/sportyShooterForm.tsx'

function App() {
  globalStyles()

  return (
    <main>
      <Header />
      <FiringRangeForm />
      <SportyShooterForm />

      {/* <h1>Dados da Habitualidade</h1> */}

      {/* <Form header={'Ficha'}> */}
      {/*  <DataContainer> */}
      {/*    <Input label={'Arma'} /> */}
      {/*    <Input label={'Ordem'} /> */}
      {/*    <Input label={'Data-Hora'} /> */}
      {/*    <Input label={'Sigma'} /> */}
      {/*    <Input label={'QTD. Munição'} /> */}
      {/*    <Input label={'Treinamento / Competição'} /> */}
      {/*    <OftenRegister /> */}
      {/*  </DataContainer> */}
      {/* </Form> */}

      {/* <Footer /> */}
    </main>
  )
}

export default App
