import { Table, TableData, TableRow } from '../../styles/table/tableStyles.ts'
import { THabitualitySchema } from '../../schemas/habitualitySchema.ts'

function HabitualityTable({ data }: { data: THabitualitySchema[] }) {
  console.log('oi')
  console.log(data)
  return (
    <Table>
      <tbody>
        <TableRow className={'title'}>
          <TableData colSpan={4}>Calibre Permitido</TableData>
          <TableData colSpan={10}>Tipo de Evento</TableData>
        </TableRow>
        {data.map((registry) => (
          <>
            <TableRow>
              <TableData colSpan={10}>
                <b>{registry.gun}</b>
              </TableData>
            </TableRow>

            <TableRow className={'title'}>
              <TableData>Ordem:</TableData>
              <TableData>data-hora:</TableData>
              <TableData>sigma:</TableData>
              <TableData>QTD. Munição:</TableData>
              <TableData colSpan={6}>Treinamento / Competição: </TableData>
            </TableRow>
            <TableRow>
              <TableData>{registry.order}</TableData>
              <TableData>{registry.date}</TableData>
              <TableData>{registry.sigma}</TableData>
              <TableData>{registry.ammoCount}</TableData>
              <TableData colSpan={6}>
                {registry.trainingOrCompetition}
              </TableData>
            </TableRow>
            <TableRow className={'title'}>
              <TableData colSpan={10}> Registro De Habitualidade </TableData>
            </TableRow>

            <TableRow className={'title'}>
              <TableData colSpan={4}> Sistema </TableData>
              <TableData colSpan={4}> N de Registro </TableData>
              <TableData colSpan={4}> Data Lançamento </TableData>
            </TableRow>

            {registry.system.map((_, index) => (
              <TableRow>
                <TableData colSpan={4}>
                  {registry.system[index].value}
                </TableData>
                <TableData colSpan={4}>
                  {registry.registerNumber[index].value}
                </TableData>
                <TableData colSpan={4}>
                  {registry.launchDate[index].value}
                </TableData>
              </TableRow>
            ))}
          </>
        ))}
      </tbody>
    </Table>
  )
}

export default HabitualityTable
