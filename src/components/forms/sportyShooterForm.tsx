import GenericTable from '../tables/GenericTable.tsx'
import { DataContainer, Form, FormContainer } from '../../styles/form.ts'
import Input from '../input.tsx'
import { Button } from '../../styles/button.ts'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  sportyShooterSchema,
  TSportyShooterSchema,
} from '../../schemas/schemas.ts'

function SportyShooterForm() {
  const [sportyShooterData, setSportyShooterData] =
    useState<TSportyShooterSchema>({} as TSportyShooterSchema)

  const [showTable, setShowTable] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSportyShooterSchema>({
    resolver: zodResolver(sportyShooterSchema),
  })

  function submitData(data: TSportyShooterSchema) {
    setSportyShooterData(data)
    setShowTable((prev) => !prev)
  }

  return (
    <FormContainer>
      <h1>Dados do Atirador Desportivo</h1>

      {showTable ? (
        <GenericTable data={sportyShooterData} />
      ) : (
        <Form onSubmit={handleSubmit(submitData)}>
          <DataContainer>
            <Input
              errorMessage={errors.name?.message}
              hookForm={register('name')}
              label={'Nome'}
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
              errorMessage={errors.affiliatesNumber?.message}
              hookForm={register('affiliatesNumber')}
              label={'Número da Filiação'}
            />
            <Input
              errorMessage={errors.affiliateSince?.message}
              hookForm={register('affiliateSince')}
              label={'Data da Filiação'}
            />
            <Input
              errorMessage={errors.cpf?.message}
              hookForm={register('cpf')}
              label={'CPF'}
            />

            <Input
              errorMessage={errors.registryCertificate?.message}
              hookForm={register('registryCertificate')}
              label={'Certificado de Registro'}
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

export default SportyShooterForm
