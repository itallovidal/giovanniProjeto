import { Button } from '../styles/button.ts'
import { ReactNode, useState } from 'react'
import Input from './input.tsx'
import { v4 as uuidv4 } from 'uuid'

function OftenRegister() {
  const [count, setCount] = useState(1)
  const inputs: ReactNode[] = []
  console.log(count)

  for (let i = 0; i < count; i++) {
    inputs.push(<Input key={uuidv4()} label={'Sistema'} />)
    inputs.push(<Input key={uuidv4()} label={'Número de Registro'} />)
    inputs.push(<Input key={uuidv4()} label={'Data de Lançamento'} />)
  }

  return (
    <>
      <h2>Registro de Habitualidade</h2>

      {inputs}

      <Button onClick={() => setCount((prevState) => prevState + 1)}>
        Novo Registro
      </Button>
    </>
  )
}

export default OftenRegister
