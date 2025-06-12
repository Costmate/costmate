'use client'

import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import FormInput from './FormInput'

// Validation schema
const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Confirm password is required')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export default function SignUpForm() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    }
  })

  const onSubmit = (data) => {
    console.log('Form Data:', data)
  }

  return (
    <FormProvider {...methods}>
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 max-w-md px-4 mx-auto">
          <FormInput name="firstName" label="First Name" placeholder={'Enter your first name'} />
          <FormInput name="lastName" label="Last Name" placeholder={'Enter your last name'}/>
          <FormInput name="email" label="Email" placeholder={'Enter your email'} />
          <FormInput name="phone" label="Phone" placeholder={'Enter your phone number'} />
          <FormInput name="password" label="Password" placeholder={'******'} />
          <FormInput name="confirmPassword" label="Confirm Password" placeholder={'******'} />

          <Button type="submit" className="w-full bg-[#550948]">Sign Up</Button>
        </form>
      </Form>
    </FormProvider>
  )
}
