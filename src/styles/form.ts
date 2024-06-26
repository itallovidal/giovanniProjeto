import { styled } from './theme.ts'

export const FormContainer = styled('div', {
  width: '100%',

  h1: {
    width: '100% !important',
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '1.2rem',
  },
})

export const Form = styled('form', {
  marginBlock: '2rem',
  display: 'flex',
  justifyContents: 'center',
  flexWrap: 'wrap',
  flexDirection: 'Column',

  h1: {
    width: '100% !important',
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '1.2rem',
  },
})

export const DataContainer = styled('div', {
  display: 'flex',
  justifyContents: 'center',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '1rem',

  h2: {
    width: '100%',
    marginBlock: '1rem',
  },

  button: {
    // width: '33%',
    marginBlock: '0rem',
    alignSelf: 'end',
  },
})
