import { FormContainer } from '../styles/form.ts'
import { Button } from '../styles/button.ts'
import { FormEvent, ReactNode } from 'react'

interface IFormProps {
  header: string
  children: ReactNode
}

function Form({ header, children }: IFormProps) {
  return (
    <FormContainer onSubmit={(e: FormEvent) => e.preventDefault()}>
      <h1>{header}</h1>
      {children}
      <Button>Pronto</Button>
    </FormContainer>
  )
}

export default Form
