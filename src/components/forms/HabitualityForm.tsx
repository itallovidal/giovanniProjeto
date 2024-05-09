import { DataContainer, Form, FormContainer } from '../../styles/form.ts'
import Input from '../input.tsx'
import { Button } from '../../styles/button.ts'
import { useFieldArray, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import {
  habitualitySchema,
  THabitualitySchema,
} from '../../schemas/habitualitySchema.ts'
import HabitualityTable from '../tables/habitualityTable.tsx'

const defaultFormValues = {
  system: [
    {
      value: '',
    },
  ],
  registerNumber: [
    {
      value: '',
    },
  ],
  launchDate: [
    {
      value: '',
    },
  ],
}

function HabitualityForm() {
  const [registers, setRegisters] = useState<THabitualitySchema[]>(
    [] as THabitualitySchema[],
  )
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<THabitualitySchema>({
    resolver: zodResolver(habitualitySchema),
    defaultValues: defaultFormValues,
  })

  const { fields: fieldsSystem, append: appendSystem } = useFieldArray({
    control,
    name: 'system',
  })

  // const { fields, append } = useFieldArray({
  //   control,
  //   name: 'system',
  // })
  //
  // const { fields, append } = useFieldArray({
  //   control,
  //   name: 'system',
  // })

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

            {fieldsSystem.map((field, index) => (
              <>
                <Input
                  defaultValue={field.value}
                  label={'Sistema'}
                  errorMessage={errors.system?.message}
                  key={field.id}
                  hookForm={register(`system.${index}.value`)}
                />

                <Input
                  defaultValue={field.value}
                  label={'Número de Registro'}
                  errorMessage={errors.registerNumber?.message}
                  key={field.id}
                  hookForm={register(`registerNumber.${index}.value`)}
                />

                <Input
                  defaultValue={field.value}
                  key={field.id}
                  hookForm={register(`launchDate.${index}.value`)}
                  errorMessage={errors.launchDate?.message}
                  label={'Data Lançamento'}
                />
              </>
            ))}
          </DataContainer>
          <Button type={'button'} onClick={() => appendSystem({ value: '' })}>
            Adicionar habitualidade
          </Button>
          <Button>Pronto</Button>
        </Form>
      )}
    </FormContainer>
  )
}

export default HabitualityForm
