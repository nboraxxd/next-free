'use client'

import toast from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import envConfig from '@/constants/config'
import { LoginSchemaType, loginSchema } from '@/lib/validation'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LoginForm() {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: LoginSchemaType) {
    try {
      const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then(async (res) => {
        const payload = await res.json()
        const data = {
          status: res.status,
          payload,
        }

        if (!res.ok) {
          throw data
        }

        return data
      })

      const resultFromNextServer = await fetch('api/auth', {
        method: 'POST',
        body: JSON.stringify(result),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(async (res) => {
        const payload = await res.json()
        const data = {
          status: res.status,
          payload,
        }

        if (!res.ok) {
          throw data
        }

        form.reset()
        return data
      })
      console.log('🔥 ~ onSubmit ~ resultFromNextServer:', resultFromNextServer)
    } catch (error: any) {
      const errors = error.payload?.errors as { field: string; message: string }[]
      const status = error.status

      if (status === 422) {
        errors.forEach(({ field, message }) => {
          form.setError(field as keyof LoginSchemaType, { type: 'server', message })
        })
      } else {
        if (error.payload?.message) {
          toast.error(error.payload.message)
        } else {
          toast.error(error.toString())
        }
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="flex w-full flex-col gap-3.5">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" autoComplete="email" placeholder="bruce@wayne.dc" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  autoComplete="new-password"
                  placeholder="Please enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Button */}
        <Button type="submit" className="mt-2 w-fit">
          Login
        </Button>
      </form>
    </Form>
  )
}
