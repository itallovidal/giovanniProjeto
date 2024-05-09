import { DataContainer, Form, FormContainer } from '../../styles/form.ts'
import Input from '../input.tsx'
import { Button } from '../../styles/button.ts'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import {
  habitualitySchema,
  THabitualitySchema,
} from '../../schemas/habitualitySchema.ts'
import HabitualityTable from '../tables/habitualityTable.tsx'

function HabitualityForm() {
  const [registers, setRegisters] = useState<THabitualitySchema[]>(
    [] as THabitualitySchema[],
  )
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<THabitualitySchema>({
    resolver: zodResolver(habitualitySchema),
  })

  function submitData(data: THabitualitySchema) {
    console.log(data)
    setRegisters((prevState) => [data, ...prevState])
  }

  return (
    <FormContainer>
      <h1>Dados da Habitualidade</h1>

      {registers.length > 0 && registers[0].gun ? (
        <HabitualityTable data={registers} />
      ) : (
        <Form onSubmit={handleSubmit(submitData)}>
          <DataContainer>
            <Input
              errorMessage={errors.gun?.message}
              hookForm={register('gun')}
              label={'Arma'}
            />
            <Input
              errorMessage={errors.order?.message}
              hookForm={register('order')}
              label={'Ordem'}
            />
            <Input
              errorMessage={errors.date?.message}
              hookForm={register('date')}
              label={'Data-Hora'}
            />
            <Input
              errorMessage={errors.sigma?.message}
              hookForm={register('sigma')}
              label={'Sigma'}
            />
            <Input
              errorMessage={errors.ammoCount?.message}
              hookForm={register('ammoCount')}
              label={'QTD. Munição'}
            />
            <Input
              errorMessage={errors.trainingOrCompetition?.message}
              hookForm={register('trainingOrCompetition')}
              label={'Treinamento / Competição'}
            />

            <h1>Registro de Habitualidade</h1>

            <Input
              errorMessage={errors.system?.message}
              hookForm={register('system')}
              label={'Sistema'}
            />

            <Input
              errorMessage={errors.registerNumber?.message}
              hookForm={register('registerNumber')}
              label={'Número de Registro'}
            />

            <Input
              errorMessage={errors.launchDate?.message}
              hookForm={register('launchDate')}
              label={'Data Lançamento'}
            />
          </DataContainer>
          <Button>Pronto</Button>
        </Form>
      )}
    </FormContainer>
  )
}

export default HabitualityForm
