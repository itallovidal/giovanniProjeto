import z from 'zod'

const generalDataSchema = z.object({
  name: z.string().min(4, {
    message: 'O nome do stand deve ter pelo menos 4 letras.',
  }),
  date: z.string().min(1, {
    message: 'Informe a data, por favor.',
  }),
  address: z.string().min(4, {
    message: 'O endereço deve ter pelo menos 4 letras.',
  }),
  registryCertificate: z.coerce.number().min(1, {
    message: 'CR deve ter positivo.',
  }),
})

const hasCNPJ = z.object({
  cnpj: z.string().min(14, {
    message: 'CNPJ precisa de pelo menos 14 números.',
  }),
})

const isSportyShooter = z.object({
  affiliatesNumber: z.string().min(5, {
    message: 'O afiliado precisa de pelo menos 5 números.',
  }),
  affiliateSince: z.string(),
  cpf: z.string().min(10, {
    message: 'CPF precisa de pelo menos 10 números.',
  }),
})

export const firingRangeSchema = generalDataSchema.merge(hasCNPJ)

export type TFiringRangeSchema = z.infer<typeof firingRangeSchema>

export const sportyShooterSchema = generalDataSchema.merge(isSportyShooter)

export type TSportyShooterSchema = z.infer<typeof sportyShooterSchema>

export type TGenericTable = z.infer<typeof generalDataSchema> &
  Partial<TFiringRangeSchema> &
  Partial<TSportyShooterSchema>
