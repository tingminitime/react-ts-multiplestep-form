import { ReactNode } from 'react'

type FormWrapperProps = {
  title: string
  children: ReactNode
}

function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="mb-8 text-center text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-[auto,minmax(0,1fr)] justify-start gap-y-2 gap-x-4">
        {children}
      </div>
    </>
  )
}
export default FormWrapper
