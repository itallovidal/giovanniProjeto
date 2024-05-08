import { Table, TableData, TableRow } from '../../styles/table/tableStyles.ts'
import { TGenericTable } from '../../schemas/schemas.ts'

function GenericTable({ data }: { data: TGenericTable }) {
  return (
    <Table>
      <tbody>
        <TableRow>
          <TableData>
            Nome: <b>{data.name} </b>
          </TableData>

          <TableData>
            {data.cnpj && `CNPJ: ${data.cnpj} `}
            {data.cpf && `CPF: ${data.cpf}`}
          </TableData>
        </TableRow>
        <TableRow>
          <TableData>
            Certificado de Registro: <b>{data.registryCertificate} </b>
          </TableData>

          <TableData>
            Data: <b>{data.date} </b>
          </TableData>
        </TableRow>
        <TableRow>
          <TableData colSpan={2}>Endereço: {data.address}</TableData>
        </TableRow>

        {data.affiliatesNumber && data.affiliateSince && (
          <TableRow>
            <TableData>Filiação à Entidade de Tiro</TableData>
            <TableData className={'filiacao'}>
              Número: {data.affiliatesNumber}
              <div>Número: {data.affiliatesNumber} </div>
            </TableData>
          </TableRow>
        )}
      </tbody>
    </Table>
  )
}

export default GenericTable
