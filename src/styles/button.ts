import { styled } from './theme.ts'

export const Button = styled('button', {
  padding: '1rem .7rem',
  border: 'none',
  borderRadius: '7px',
  alignSelf: 'start',
  marginBlock: '1rem',

  '&:hover': {
    opacity: 0.8,
    cursor: 'pointer',
  },
})
