import { z } from 'zod'

const email = z.string().email()
const password = z.string().min(6).max(100)

export const registerSchema = z
  .object({
    name: z.string().min(2).max(256),
    email,
    password,
    confirmPassword: password,
  })
  .strict()
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords do not match',
        path: ['confirmPassword'],
      })
    }
  })

export const loginSchema = z
  .object({
    email,
    password,
  })
  .strict()

export type RegisterSchemaType = z.infer<typeof registerSchema>
export type LoginSchemaType = z.infer<typeof loginSchema>
