import { Container } from '../styles/habituality.ts'
import { useState } from 'react'
import { THabitualitySchema } from '../schemas/habitualitySchema.ts'
import HabitualityTable from './tables/habitualityTable.tsx'
import HabitualityForm from './forms/HabitualityForm.tsx'
import { Button } from '../styles/button.ts'
import { toast } from 'react-toastify'
function HabitualityContainer() {
  const [registers, setRegisters] = useState<THabitualitySchema[]>(
    [] as THabitualitySchema[],
  )
  const notify = () =>
    toast('Arma adicionada à ficha!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })

  const [showTable, setShowTable] = useState(false)

  function updateRegistry(data: THabitualitySchema) {
    console.log(data)
    notify()
    setRegisters((prevState) => [data, ...prevState])
  }

  return (
    <Container>
      <h1>Dados da Habitualidade</h1>

      {showTable ? (
        <HabitualityTable data={registers.reverse()} />
      ) : (
        <HabitualityForm updateRegistry={updateRegistry} />
      )}

      <Button onClick={() => setShowTable((prev) => !prev)}>
        {showTable ? 'Voltar à edição' : 'Mostrar Tabela'}
      </Button>
    </Container>
  )
}

export default HabitualityContainer
