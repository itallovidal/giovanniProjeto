import { DataContainer, Form } from '../../styles/form.ts'
import Input from '../input.tsx'
import { Button } from '../../styles/button.ts'
import { useFieldArray, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  habitualitySchema,
  THabitualitySchema,
} from '../../schemas/habitualitySchema.ts'

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

interface IHabitualityForm {
  updateRegistry: (data: THabitualitySchema) => void
}

function HabitualityForm({ updateRegistry }: IHabitualityForm) {
  const {
    register,
    control,
    reset,
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

  function submit(data: THabitualitySchema) {
    reset()
    updateRegistry(data)
  }

  console.log(errors)

  return (
    <Form onSubmit={handleSubmit(submit)}>
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
              errorMessage={errors.system && 'Informe o nome do sistema.'}
              key={field.id}
              hookForm={register(`system.${index}.value`)}
            />

            <Input
              defaultValue={field.value}
              label={'Número de Registro'}
              errorMessage={
                errors.registerNumber && 'Informe o número de registro.'
              }
              key={field.id}
              hookForm={register(`registerNumber.${index}.value`)}
            />

            <Input
              defaultValue={field.value}
              key={field.id}
              hookForm={register(`launchDate.${index}.value`)}
              errorMessage={
                errors.launchDate && 'Informe o data de lançamento.'
              }
              label={'Data Lançamento'}
            />
          </>
        ))}
      </DataContainer>
      <Button type={'button'} onClick={() => appendSystem({ value: '' })}>
        Adicionar habitualidade
      </Button>
      <Button>Adicionar Arma à Ficha</Button>
    </Form>
  )
}

export default HabitualityForm
