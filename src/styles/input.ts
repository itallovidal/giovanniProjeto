import { styled } from './theme.ts'

export const TextInput = styled('input', {
  padding: '1rem .7rem',
  border: 'none',
  background: '$placeholder',
  borderRadius: '7px',
})
export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  minWidth: '30%',

  label: {
    marginBottom: '.7rem',
  },
})
