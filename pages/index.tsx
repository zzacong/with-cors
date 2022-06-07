import type { SubmitHandler } from 'react-hook-form'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'
import axios from 'axios'
import PageTitle from '$components/PageTitle'
import Wrapper from '$components/Wrapper'

export default function Home() {
  const { register, handleSubmit, formState } = useForm<FormFieldValues>()

  const { errors, isSubmitting } = formState

  const onSubmit: SubmitHandler<FormFieldValues> = async data => {
    try {
      console.log('data', data)
      const { attachments, ...rest } = data

      const formData = new FormData()
      formData.set('data', JSON.stringify(rest))
      Array.from(attachments).forEach(attc =>
        formData.append('attachments', attc)
      )

      const { data: resp } = await axios.post('/api/formidable', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      console.log('response', resp)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Head>
        <title>Sample Next App</title>
      </Head>

      <Wrapper>
        <PageTitle>Sample Next App</PageTitle>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 rounded-xl p-8 shadow-2xl"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-700">Form</h2>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className={clsx(
                'rounded text-gray-700 placeholder:text-gray-400',
                errors.name &&
                  'border-2 border-red-500 focus:border-transparent focus:ring-2'
              )}
              {...register('name', { required: 'Please enter the name' })}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="attachments" className="sr-only">
              Name
            </label>
            <input
              type="file"
              multiple
              id="attachments"
              placeholder="Name"
              className={clsx(
                'text-lg text-gray-700 file:mr-6 file:rounded-full file:border-none file:bg-blue-200 file:px-4 file:py-2 file:text-base file:font-semibold file:text-blue-700 file:hover:cursor-pointer file:hover:bg-blue-100'
              )}
              {...register('attachments')}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-blue-500 py-2 px-10 font-semibold text-white transition-all hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-80"
            >
              Submit
            </button>
          </div>
        </form>
      </Wrapper>
    </>
  )
}

type FormFieldValues = {
  name: string
  attachments: File[]
}
