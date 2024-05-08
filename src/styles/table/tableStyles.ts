import { styled } from '../theme.ts'

export const Table = styled('table', {
  border: 'none',
  borderCollapse: 'collapse',
  width: '100%',
  marginBlock: '1rem',
})

export const TableRow = styled('tr', {
  border: '1px solid black',

  '.filiacao': {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    border: 'none',

    div: {
      width: '50%',
      borderLeft: '2px solid black',
      paddingLeft: '16px',
    },
  },
})

export const TableData = styled('td', {
  padding: '.5rem 1rem',
  border: '2px solid black',
  width: '50%',
})
