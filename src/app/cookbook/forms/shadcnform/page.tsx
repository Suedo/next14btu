'use client'

import { Button } from '@/shadui/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shadui/ui/form'
import { Input } from '@/shadui/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { Control, FieldPath, useForm } from 'react-hook-form'
import { z } from 'zod'

const shadcnform = () => {
  return (
    <section className="flex flex-col min-h-screen items-center justify-between p-24">
      <div className="w-4/5 max-w-5xl mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Signup</h1>
        <p className="text-sm text-neutral-500">
          Already have an account?{' '}
          <Link href="#" className="underline underline-offset-4">
            Login
          </Link>
        </p>
      </div>
      <SignupForm />
    </section>
  )
}

export default shadcnform

const formSchema = z.object({
  email: z.string().email(),
  userName: z.string().min(3).max(50),
  password: z.string().min(8), // keepin it simple
})

const SignupForm = () => {
  // hooks can only be called inside body of a function component
  const reactHookForm = useForm<z.infer<typeof formSchema>>({
    // this guy validates the form
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      userName: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => console.log(values)

  return (
    // make sure to use shadcn Form, not react-hook-form
    <Form {...reactHookForm}>
      {/* core onsubmit functionality is baked into HTML, so we need the HTML form */}
      <form onSubmit={reactHookForm.handleSubmit(onSubmit)}>
        {/* call react hook form's handleSubmit, passing our custom `onSubmit` method/behaviour */}

        <SignupFormField name="email" label="email" placeholder="email" inputType="email" formControl={reactHookForm.control} />
        <SignupFormField name="userName" label="UserName" placeholder="UserName" description="min 3 characters" formControl={reactHookForm.control} />
        <SignupFormField name="password" label="Password" placeholder="Password" inputType="password" formControl={reactHookForm.control} />

        <Button type="submit">Signup</Button>
      </form>
    </Form>
  )
}

interface SignupFormFieldProps {
  name: FieldPath<z.infer<typeof formSchema>>
  label: string
  placeholder: string
  description?: string
  inputType?: string
  formControl: Control<z.infer<typeof formSchema>, any>
}
// a form is a set of fields, and each field is built with many components
const SignupFormField: React.FC<SignupFormFieldProps> = ({ name, label, placeholder, description, inputType, formControl }) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} type={inputType || 'text'} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage /> {/* shows us any validation errors */}
        </FormItem>
      )}
    />
  )
}
