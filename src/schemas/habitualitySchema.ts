import z from 'zod'

export const habitualitySchema = z.object({
  gun: z.string().min(5, {
    message: 'A arma precisa de pelo menos 5 letras.',
  }),
  order: z.coerce.number().min(1, {
    message: 'CPF precisa de pelo menos 10 números.',
  }),
  date: z.string(),
  sigma: z.string().min(7, {
    message: 'Sigma precisa de pelo menos 7 números.',
  }),
  ammoCount: z.string().min(1, {
    message: 'A quantidade de munição deve ser maior que 0.',
  }),
  trainingOrCompetition: z.string().min(1, {
    message: 'Informe o treinamento/comp.',
  }),
  system: z.array(
    z.object({
      value: z.string().min(7, {
        message: 'Sistema precisa de pelo menos 7 letras.',
      }),
    }),
  ),
  registerNumber: z.array(
    z.object({
      value: z.string().min(7, {
        message: 'Sistema precisa de pelo menos 7 números.',
      }),
    }),
  ),
  launchDate: z.array(
    z.object({
      value: z.string().min(1),
    }),
  ),
})

export type THabitualitySchema = z.infer<typeof habitualitySchema>
