import z from 'zod'

const generalDataSchema = z.object({
  name: z.string().min(2),
  date: z.string(),
  address: z.string(),
  registryCertificate: z.string(),
})

const hasCNPJ = z.object({
  cnpj: z.string(),
})

const isSportyShoter = z.object({
  affiliatesNumber: z.string(),
  affiliateSince: z.string(),
  cpf: z.string(),
})

export const firingRangeSchema = generalDataSchema.merge(hasCNPJ)

export type TFiringRangeSchema = z.infer<typeof firingRangeSchema>

export const sportyShooterSchema = generalDataSchema.merge(isSportyShoter)

export type TSportyShooterSchema = z.infer<typeof sportyShooterSchema>

export type TGenericTable = z.infer<typeof generalDataSchema> &
  Partial<TFiringRangeSchema> &
  Partial<TSportyShooterSchema>
