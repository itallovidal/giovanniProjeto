import { styled } from './theme.ts'

export const FooterContainer = styled('footer', {
  display: 'flex',
  justifyContents: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  flexDirection: 'column',
  textTransform: 'uppercase',
  textAlign: 'center',

  h1: {
    fontWeight: 'normal',
    fontSize: '1.5rem',
    marginBlock: '4rem'
,  },

  img: {
    width: '120px',
  },
})
