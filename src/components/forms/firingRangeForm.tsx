import { DataContainer, Form, FormContainer } from '../../styles/form.ts'
import Input from '../input.tsx'
import GenericTable from '../tables/GenericTable.tsx'
import { Button } from '../../styles/button.ts'
import { useForm } from 'react-hook-form'
import { firingRangeSchema, TFiringRangeSchema } from '../../schemas/schemas.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

function FiringRangeForm() {
  const [firingRangeData, setFiringRangeData] = useState<TFiringRangeSchema>(
    {} as TFiringRangeSchema,
  )

  const [showTable, setShowTable] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFiringRangeSchema>({
    resolver: zodResolver(firingRangeSchema),
  })

  function submitData(data: TFiringRangeSchema) {
    setFiringRangeData(data)
    setShowTable((prev) => !prev)
  }

  return (
    <FormContainer>
      <h1>Dados da Entidade de Tiro Declarante</h1>

      {showTable ? (
        <GenericTable data={firingRangeData} />
      ) : (
        <Form onSubmit={handleSubmit(submitData)}>
          <DataContainer>
            <Input
              errorMessage={errors.name?.message}
              hookForm={register('name')}
              label={'Nome'}
            />
            <Input
              errorMessage={errors.cnpj?.message}
              hookForm={register('cnpj')}
              label={'CNPJ'}
            />
            <Input
              errorMessage={errors.registryCertificate?.message}
              hookForm={register('registryCertificate')}
              label={'Certificado de Registro'}
            />
            <Input
              errorMessage={errors.date?.message}
              hookForm={register('date')}
              label={'Data'}
            />
            <Input
              errorMessage={errors.address?.message}
              hookForm={register('address')}
              label={'Endereço'}
            />
          </DataContainer>
          <Button>Pronto</Button>
        </Form>
      )}

      {showTable ? (
        <Button onClick={() => setShowTable((prev) => !prev)}>
          Voltar à edição
        </Button>
      ) : null}
    </FormContainer>
  )
}

export default FiringRangeForm
