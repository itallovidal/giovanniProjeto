import { styled } from '../theme.ts'

export const Table = styled('table', {
  border: 'none',
  borderStyle: 'none',
  borderCollapse: 'collapse',
  outline: 'none',
  width: '100%',
  marginBlock: '1rem',

  '.title': {
    fontWeight: 'bold',
  },
})

export const TableRow = styled('tr', {
  borderCollapse: 'collapse',
  textAlign: 'center',
  borderStyle: 'none',

  '.filiacao': {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    border: '1px solid black',
    // borderBottom: '.5px solid black',
    // borderRight: '.5px solid black',

    div: {
      width: '50%',
      borderLeft: '2px solid black',
      paddingLeft: '16px',
      border: 'none',
    },
  },
})

export const TableData = styled('td', {
  padding: '.5rem 1rem',
  border: '1px solid black',
  width: '50%',
})
