import { TextInput, InputContainer } from '../styles/input.ts'
import { ComponentProps } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { ErrorMessage } from '../styles/global.ts'

interface InputProps extends ComponentProps<typeof TextInput> {
  label: string
  hookForm: UseFormRegisterReturn<string>
  errorMessage: string | undefined
}
function Input({ label, hookForm, errorMessage, ...props }: InputProps) {
  console.log(errorMessage)
  return (
    <InputContainer>
      <label>{label}</label>
      <TextInput {...hookForm} {...props} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  )
}

export default Input
