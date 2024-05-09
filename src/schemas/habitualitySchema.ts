import z from 'zod'

export const habitualitySchema = z.object({
  gun: z.string().min(2),
  order: z.string(),
  date: z.string(),
  sigma: z.string(),
  ammoCount: z.coerce.number(),
  trainingOrCompetition: z.string(),
  system: z.array(
    z.object({
      value: z.string(),
    }),
  ),
  registerNumber: z.array(
    z.object({
      value: z.string(),
    }),
  ),
  launchDate: z.array(
    z.object({
      value: z.string(),
    }),
  ),
})

export type THabitualitySchema = z.infer<typeof habitualitySchema>
